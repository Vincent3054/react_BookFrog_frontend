import React, { Component } from "react";
import { Layout, Menu, Input, Select, Typography, Avatar, Button  } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import "../mixin/main.css";
import 'antd/dist/antd.css';
import './BooklistLayout.css';
import { Link } from "react-router-dom";
import img from "../Assets/frog.png";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    UnorderedListOutlined,
  AppstoreOutlined,
  ReadOutlined,
  EnvironmentOutlined,
  PictureOutlined,
} from '@ant-design/icons';

const { Search } = Input;
const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#538d22',
        }}
    />
);
const onSearch = value => console.log(value);
const { Option } = Select;
function handleChange(value) {
    console.log(`selected ${value}`);
}


function handleTagChange(value) {
    console.log(`selected ${value}`);
}

const { Title } = Typography;

export default class ExhibitionListLayout extends Component {
    state = {
        collapsed: false,
      };
      toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };
      handleSelect = (e) => {
        this.setState({
          k: e.key,
        });
      };
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
                  <Link to="/Subject">主題</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<ReadOutlined />} >
                  <Link to="/booklist">書籍查詢</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<PictureOutlined />} >
                  <Link to="/ExhibitionList">展覽查詢</Link>
                </Menu.Item>
                <Menu.Item key="4" icon={<UserOutlined />} >
                  <Link to="/Myclass">我的班級</Link>
                </Menu.Item>
                <Menu.Item key="5" icon={<EnvironmentOutlined />} >
                  <Link to="/MAPIndex">附近資源</Link>
                </Menu.Item>
                <Menu.Item key="6" icon={<UnorderedListOutlined />} >
                  <Link to="/portfolio">學習歷程</Link>
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
                    <Link to="/">登出</Link>
                </Button>
              </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            height: 150,
                        }}
                    >
                        <Select defaultValue="lucy" style={{ width: "10%", marginRight: 20 }} onChange={handleChange} size="large"
                        >
                            <Option value="jack">書名</Option>
                            <Option value="lucy">作者</Option>
                            <Option value="Yiminghe">ISBN</Option>
                            <Option value="Yiminghe">分類號</Option>
                        </Select>
                        <Select defaultValue="lucy" style={{ width: "10%", marginRight: 20 }} onChange={handleChange} size="large"
                        >
                            <Option value="jack">所有館別</Option>
                            <Option value="lucy">臺北</Option>
                            <Option value="Yiminghe">臺中</Option>
                            <Option value="Yiminghe">臺南</Option>
                        </Select>
                        <Select defaultValue="lucy" style={{ width: "20%", marginRight: 20 }} onChange={handleChange} size="large"
                        >
                            <Option value="jack">依出版年排序(由大到小)</Option>
                            <Option value="lucy">依出版年排序(由小到大)</Option>
                            <Option value="Yiminghe">依書名排序(由大到小)</Option>
                            <Option value="Yiminghe">依書名年排序(由小到大)</Option>
                        </Select>
                        <Search
                            placeholder="請輸入搜尋內容"
                            enterButton="Search"
                            size="large"
                            suffix={suffix}
                            onSearch={onSearch}
                            style={{ width: '55%' }}
                        />
                        <br></br>
                        <span style={{fontSize:16}}>標籤：</span>
                        <Select
                            mode="multiple"
                            allowClear
                            style={{ width: '95%',margin: '24px 0px 0px 16px' }}
                            placeholder="Please select"
                            defaultValue={['生命','生物','植物','動物','自然']}
                            onChange={handleTagChange}
                            size="large"
                        >
                            <Option key={"蕨類"}>蕨類</Option>
                            <Option key={"古埃及"}>古埃及</Option>
                            <Option key={"金字塔"}>金字塔</Option>
                            <Option key={"火山地形"}>火山地形</Option>
                            <Option key={"地震帶"}>地震帶</Option>                                                    
                            <Option key={"酸鹼"}>酸鹼</Option>                                                    
                            <Option key={"維管素"}>維管素</Option>                                                    
                            <Option key={"植物"}>植物</Option>                                                    
                        </Select>
                    </Content>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '0px 16px 16px 16px',
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
