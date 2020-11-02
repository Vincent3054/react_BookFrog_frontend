import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Layout, Menu, Avatar, Button } from "antd";
import "../mixin/main.css";
import "antd/dist/antd.css";
import "./Layout.css";
import { Link } from "react-router-dom";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UnorderedListOutlined,
  UserOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import img from "../Assets/frog.png";

export default class SiderDemo extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    const { Header, Sider, Content } = Layout;
    const { children } = this.props;
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo">
            <Avatar
              size={{ xs: 24, sm: 24, md: 32, lg: 32, xl: 32, xxl: 32 }}
              src={img}
              className="logo_img"
            />
            旅行書蛙
          </div>
          <Menu theme="dark" mode="inline" >
            <Menu.Item
              key="1"
              icon={<AppstoreOutlined />}
            >
            <Link to="Demo">主題</Link>
            </Menu.Item>
            <Menu.Item
              key="2"
              icon={<UserOutlined />}
            >
              <Link to="Myclass">我的班級</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UnorderedListOutlined />} link>
            <Link to="Record">學習歷程</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background layout_header"
            style={{ padding: 0 }}
          >
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: this.toggle,
              }
            )}
            <Button type="link" htmlType="submit" className="login_form_btn">
              登出
            </Button>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
