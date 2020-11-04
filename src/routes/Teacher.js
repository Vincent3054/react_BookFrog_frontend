import React, { Component } from "react";
import Layout from "../layouts/TLayout";
import Tablelist from "../components/Tablelist";
import "antd/dist/antd.css";
import "./Myclass.css";
import "./Teacher.css";
import { Card, Pagination, List, Breadcrumb, Input, Button,Modal } from "antd";
import {
  PlusOutlined,
  EyeOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
export default class Teacher extends Component {
  state = {
    tags: ["數學", "自然", "國文"],
    inputVisible: false,
    inputValue: "",
    tableVisible:false,
    table_nm:"",
  };

  handleClose = (removedTag) => {
    const tags = this.state.tags.filter((tag) => tag !== removedTag);
    console.log(tags);
    this.setState({ tags });
  };

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  };

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleInputConfirm = () => {
    const { inputValue } = this.state;
    let { tags } = this.state;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    this.setState({
      tags,
      inputVisible: false,
      inputValue: "",
    });
  };

  saveInputRef = (input) => {
    this.input = input;
  };

  render() {
    const { table_nm, inputVisible, inputValue,tags } = this.state;
    const AddBtn = inputVisible ? (
      <Input
        ref={this.saveInputRef}
        type="text"
        size="large"
        className="teach_inp"
        value={inputValue}
        onChange={this.handleInputChange}
        onBlur={this.handleInputConfirm}
        onPressEnter={this.handleInputConfirm}
      />
    ) : (
      <Button onClick={this.showInput} className="teach_add">
        <PlusOutlined /> 新增
      </Button>
    );
    return (
      <Layout>
        <Breadcrumb style={{ margin: "0 2vw 2vh 2vw", fontSize: "large" }}>
          <Breadcrumb.Item>建立主題</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-card-wrapper">
          <div className="add_wrap">{inputVisible?<span className="teach_span">課程名稱</span>:""}{AddBtn}</div>
          <List
            className="teach_list"
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 4,
              lg: 4,
              xl: 6,
              xxl: 6,
            }}
            footer={
              <Pagination total={tags.length} pageSize={tags.length} />
            }
            dataSource={tags}
            renderItem={(item) => (
              <List.Item>
                <Card
                className="teach_card"
                  hoverable="true"
                  actions={[
                    <EyeOutlined key="view" onClick={()=>{this.setState({tableVisible:true,table_nm:item})}}/>,
                    <DeleteOutlined key="ellipsis" onClick={e => {
                        e.preventDefault();
                        this.handleClose(item);
                      }} />,
                  ]}
                >
                  {item}
                </Card>
              </List.Item>
            )}
          />
          <Modal
          title="課程大綱"
          visible={this.state.tableVisible}
          onOk={() => this.setState({ tableVisible: false })}
          onCancel={() => this.setState({ tableVisible: false })}
          footer={null}
          width={1000}
        >
          <Tablelist table_nm={table_nm}/>
        </Modal>
        </div>
      </Layout>
    );
  }
}
