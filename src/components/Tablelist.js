import React, {
  Component,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
import { Table, Input, Button, Popconfirm, Form, Select } from "antd";
import "./Tablelist.css";

const EditableContext = React.createContext();
const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef();
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async (e) => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };
  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

export default class Tablelist extends Component {
  state = {
    dataSource: [
      {
        key: "1",
        week: "第1週",
        content: "持續改變的生命",
        tags: ["#化石", "#活化石", "#地質", "#生物種類", "#物種演變"],
      },
      {
        key: "2",
        week: "第2週",
        content: "生物的命名與分類",
        tags: ["#生物", "#病毒", "#五界"],
      },
      {
        key: "3",
        week: "第三週",
        content: "真菌界",
        tags: ["#真菌"],
      },
      {
        key: "4",
        week: "第四週",
        content: "植物界",
        tags: ["#植物","#蘚苔", "#蕨類", "#裸子", "#單雙子葉"],
      },
      {
        key: "5",
        week: "第五週",
        content: "動物界",
        tags: [
          "#刺絲胞",
          "#扁形",
          "#軟體",
          "#環節",
          "#刺皮",
          "#節肢動物",
          "#魚類",
          "#兩生爬蟲類",
          "#哺乳類",
          "#鳥類",
          "#動物門",
        ],
      },
      {
        key: "6",
        week: "第六週",
        content: "原核生物與原生生物",
        tags: ["#細菌", "#藍綠菌", "#藻類", "#原生動物", "#原生菌類"],
      },
    ],
    tag: [
        "#植物",
      "#化石",
      "#活化石",
      "#地質",
      "#生物種類",
      "#物種演變",
      "#生物",
      "#病毒",
      "#五界",
      "#細菌",
      "#藍綠菌",
      "#藻類",
      "#原生動物",
      "#原生菌類",
      "#刺絲胞",
      "#扁形",
      "#軟體",
      "#環節",
      "#刺皮",
      "#節肢動物",
      "#魚類",
      "#兩生爬蟲類",
      "#哺乳類",
      "#鳥類",
      "#動物門",
      "#蘚苔",
      "#蕨類",
      "#裸子",
      "#單雙子葉",
      "#真菌",
      
    ],
    inputVisible: false,
    inputValue: "",
    count: 7,
  };

  handleDelete = (key) => {
    const dataSource = [...this.state.dataSource];
    const { count } = this.state;
    this.setState({
      dataSource: dataSource.filter((item) => item.key !== key),
      count: count - 1,
    });
  };
  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      week: `第${count}週`,
      content: "請輸入課程內容",
      tags: [],
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  };
  handleSave = (row) => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    this.setState({
      dataSource: newData,
    });
  };
  render() {
    const { dataSource, tag } = this.state;
    const { Option } = Select;
    const child = [];
    for (let i = 0; i < tag.length; i++) {
      child.push(<Option key={i.toString(36) + i}>{tag[i]}</Option>);
    }
   
    const columns = [
      {
        title: "週次",
        dataIndex: "week",
        key: "week",
        width: 150,
        editable: true,
      },
      {
        title: "內容",
        dataIndex: "content",
        key: "content",
        editable: true,
        width: 400,
      },
      {
        title: "Tags",
        key: "tags",
        dataIndex: "tags",
        render:(tags)=> {
            const all=tags.toString().replace('#', ",#");
            const alltags=all.split(",");
            const allta=alltags.slice(1,alltags.length);
            return(
          <div>
            <Select
              mode="tags"
              style={{ width: "100%" }}
              placeholder="Tags"
              defaultValue={allta}
            >
              {child}
            </Select>
          </div>)
        },
      },
      {
        title: "操作",
        dataIndex: "operation",
        render: (text, record) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => this.handleDelete(record.key)}
            >
              <a className="del">刪除</a>
            </Popconfirm>
          ) : null,
      },
    ];
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };
    const column = columns.map((col) => {
      if (!col.editable) {
        return col;
      }

      return {
        ...col,
        onCell: (record) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    return (
      <div>
        <Button onClick={this.handleAdd} className="add_content">
          新增課綱
        </Button>
        <Table
          components={components}
          rowClassName={() => "editable-row"}
          bordered
          dataSource={dataSource}
          columns={column}
        />
      </div>
    );
  }
}
