import React, { Component } from "react";
import Layout from "../layouts/Layout";
import "antd/dist/antd.css";
import "./Myclass.css";
import { Card, Pagination, List, Modal, Table, Tag, Breadcrumb } from "antd";
import { Link } from "react-router-dom";

export default class Myclass extends Component {
  state = {
    openmain: false,
    filelist: [
      { nm: "Math", title: "數學" },
      { nm: "Nature", title: "自然" },
      { nm: "Chinese", title: "國文" },
    ],
    data: [
      {
        key: "1",
        week: "第一週",
        content: "持續改變的生命",
        tags: ["#化石", "#活化石", "#地質", "#生物種類", "#物種演變"],
      },
      {
        key: "2",
        week: "第二週",
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
    color: [
      "magenta",
      "red",
      "volcano",
      "orange",
      "gold",
      "lime",
      "green",
      "cyan",
      "blue",
      "geekblue",
      "purple",
    ],
  };
  render() {
    const { filelist, color, data } = this.state;
    const columns = [
      {
        title: "週次",
        dataIndex: "week",
        key: "week",
        width: 100,
      },
      {
        title: "內容",
        dataIndex: "content",
        key: "content",
        width: 400,
      },
      {
        title: "Tags",
        key: "tags",
        dataIndex: "tags",
        render: (tags) => (
          <div>
            {tags.map((tag, index) => {
              let cor = color[index];
              return (
                <Tag color={cor} key={tag} className="tag_font">
                  <Link to="/Demo">{tag}</Link>
                </Tag>
              );
            })}
          </div>
        ),
      },
    ];

    return (
      <Layout>
        <Breadcrumb style={{ margin: "0 2vw 2vh 2vw", fontSize: "large" }}>
          <Breadcrumb.Item>我的班級</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-card-wrapper">
          <List
            className="class_list"
            grid={{
              column: 5,
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 4,
              lg: 4,
              xl: 6,
              xxl: 6,
            }}
            footer={
              <Pagination total={filelist.length} pageSize={filelist.length} />
            }
            dataSource={filelist}
            renderItem={(item) => (
              <List.Item
                onClick={() =>
                  this.setState({ openmain: !this.state.openmain })
                }
              >
                <Card className="myclass_card" hoverable="true">
                  {item.title}
                </Card>
              </List.Item>
            )}
          />
          <Modal
            title="課程大綱"
            visible={this.state.openmain}
            onOk={() => this.setState({ openmain: false })}
            onCancel={() => this.setState({ openmain: false })}
            footer={null}
            width={1000}
          >
            <Table columns={columns} dataSource={data} />
          </Modal>
        </div>
      </Layout>
    );
  }
}
