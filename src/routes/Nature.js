import React, { Component } from "react";
import Layout from "../layouts/Layout";
import "antd/dist/antd.css";
import "./Myclass.css";
import { Card, Pagination, List,Breadcrumb } from "antd";
import { Link } from "react-router-dom";

export default class Subjects extends Component {
  state = {
    list: [
      {title: "蕨類" },
      {title: "真菌" },
      {title: "動物" },
      {title: "魚類" },
      {title: "裸子" },
      {title: "鳥類" },
      {title: "藻類" },
      {title: "原生動物" },
      {title: "細菌" },
      {title: "藍綠藻" },
      {title: "哺乳類" },
      {title: "化石" },
    ],
  };
  render() {
    const { list } = this.state;
    return (
      <Layout>
      <Breadcrumb style={{ margin: '0 2vw 2vh 2vw',fontSize:'large' }}>
          <Breadcrumb.Item>主題</Breadcrumb.Item>
          <Breadcrumb.Item>標籤</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-card-wrapper">
          <List
            className="class_list"
            grid={{
              column:10,
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 4,
              lg: 4,
              xl: 6,
              xxl: 6,
            }}
            dataSource={list}
            renderItem={(item) => (
              <List.Item>
                <Link to="">
                  <Card className="tag_card" hoverable="true">
                    {item.title}
                  </Card>
                </Link>
              </List.Item>
            )}
          />
        </div>
      </Layout>
    );
  }
}
