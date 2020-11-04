import React, { Component } from "react";
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
    k:1,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  handleSelect=(e)=>{
this.setState({
  k:e.key,
})
  }
  render() {
    const { Header, Sider, Content } = Layout;
    const { children } = this.props;
    const { collapsed } = this.state;
    const span = collapsed ? <span></span> : <span>旅行書蛙</span>;
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo">
            <Avatar
              size={{ xs: 24, sm: 24, md: 32, lg: 32, xl: 32, xxl: 32 }}
              src={img}
              className={collapsed?"logo_img_closs":"logo_img"}
            />
            {span}
          </div>
          <Menu theme="dark" mode="inline" onClick={this.handleSelect} defaultSelectedKeys={[this.state.k]}>
            <Menu.Item key="1" icon={<AppstoreOutlined />} >
              <Link to="/Teacher">建立主題</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />} >
              <Link to="/Demo">學習歷程核對</Link>
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
              margin: "16px",
              padding: "12px 24px",
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
