import React, { Component } from "react";
import Layout from "../layouts/Layout";
import "antd/dist/antd.css";
import"./Myclass.css";
import { Card, Col, List } from "antd";

export default class Myclass extends Component {
  state = {
    filelist: [{ title: "自然" }, { title: "數學" }, { title: "國文" }],
  };
  
  render() {
      const {filelist}=this.state;
    return (
      <Layout>
        <div className="site-card-wrapper">
        <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 6,
        }}
        dataSource={filelist}
        renderItem={item => (
          <List.Item>
            <Card className="myclass_card">{item.title}</Card>
          </List.Item>
        )}
      />
        </div>
      </Layout>
    );
  }
}
