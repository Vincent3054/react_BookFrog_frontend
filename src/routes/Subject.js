import React, { Component } from "react";
import Layout from "../layouts/Layout";
import "antd/dist/antd.css";
import "./Myclass.css";
import { Card, Pagination, List,Breadcrumb } from "antd";
import { Link } from "react-router-dom";

export default class Subject extends Component {
  state = {
    filelist: [
      { nm: "Nature", title: "自然" },
      { nm: "Nature", title: "生物" },
      { nm: "Nature", title: "國文" },
      { nm: "Nature", title: "英文" },
      { nm: "Nature", title: "理化" },
      { nm: "Nature", title: "數學" },
      { nm: "Nature", title: "地科" },
    ],
  };
  render() {
    const { filelist } = this.state;
    return (
      <Layout>
      <Breadcrumb style={{ margin: '0 2vw 2vh 2vw',fontSize:'large' }}>
          <Breadcrumb.Item>主題</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-card-wrapper">
          <List
            className="class_list"
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 4,
              lg: 4,
              xl: 6,
              xxl: 6,
            }}
            pagination={<Pagination total={50} size="small" />}
            dataSource={filelist}
            renderItem={(item) => (
              <List.Item>
                <Link to={"/" + item.nm}>
                  <Card className="myclass_card" hoverable="true">
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
