import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Layout, Menu, Input, Select, Typography  } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import "../mixin/main.css";
import 'antd/dist/antd.css';
import './BooklistLayout.css';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';

const { Search } = Input;
const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1890ff',
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

export default class BooklistLayout extends Component {
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
            <Layout style={{ minHeight: '100vh' }}>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            nav 1
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                            nav 2
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined />}>
                            nav 3
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                        })}
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
                            <Option value="jack">??????</Option>
                            <Option value="lucy">??????</Option>
                            <Option value="Yiminghe">ISBN</Option>
                            <Option value="Yiminghe">?????????</Option>
                        </Select>
                        <Select defaultValue="lucy" style={{ width: "10%", marginRight: 20 }} onChange={handleChange} size="large"
                        >
                            <Option value="jack">????????????</Option>
                            <Option value="lucy">??????</Option>
                            <Option value="Yiminghe">??????</Option>
                            <Option value="Yiminghe">??????</Option>
                        </Select>
                        <Select defaultValue="lucy" style={{ width: "20%", marginRight: 20 }} onChange={handleChange} size="large"
                        >
                            <Option value="jack">??????????????????(????????????)</Option>
                            <Option value="lucy">??????????????????(????????????)</Option>
                            <Option value="Yiminghe">???????????????(????????????)</Option>
                            <Option value="Yiminghe">??????????????????(????????????)</Option>
                        </Select>
                        <Search
                            placeholder="?????????????????????"
                            enterButton="Search"
                            size="large"
                            suffix={suffix}
                            onSearch={onSearch}
                            style={{ width: '55%' }}
                        />
                        <br></br>
                        <span style={{fontSize:16}}>?????????</span>
                        <Select
                            mode="multiple"
                            allowClear
                            style={{ width: '95%',margin: '24px 0px 0px 16px' }}
                            placeholder="Please select"
                            defaultValue={['??????']}
                            onChange={handleTagChange}
                            size="large"
                        >
                            <Option key={"??????"}>??????</Option>
                            <Option key={"?????????"}>?????????</Option>
                            <Option key={"?????????"}>?????????</Option>
                            <Option key={"????????????"}>????????????</Option>
                            <Option key={"?????????"}>?????????</Option>                                                    
                            <Option key={"??????"}>??????</Option>                                                    
                            <Option key={"?????????"}>?????????</Option>                                                    
                            <Option key={"??????"}>??????</Option>                                                    
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
