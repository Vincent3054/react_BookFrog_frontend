import React, { Component } from "react";
import Layout from "../layouts/Layout";
import "../mixin/main.css";
import { Input, Select, List, Avatar, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';


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

const listData = [];
for (let i = 0; i < 23; i++) {
    listData.push({
        href: 'https://ant.design',
        title: `書名 ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
            '書籍類型：測試'

    });
}
const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);


export default class Booklist extends Component {
    render() {

        return (
            <Layout>
                <div>
                    <div >
                        <Select defaultValue="lucy" style={{ width: 200, marginRight: 20 }} onChange={handleChange} size="large"
                        >
                            <Option value="jack">書名</Option>
                            <Option value="lucy">作者</Option>
                            <Option value="Yiminghe">ISBN</Option>
                            <Option value="Yiminghe">分類號</Option>
                        </Select>
                        <Select defaultValue="lucy" style={{ width: 200, marginRight: 20 }} onChange={handleChange} size="large"
                        >
                            <Option value="jack">所有館別</Option>
                            <Option value="lucy">臺北</Option>
                            <Option value="Yiminghe">臺中</Option>
                            <Option value="Yiminghe">臺南</Option>
                        </Select>
                        <Select defaultValue="lucy" style={{ width: 300, marginRight: 20 }} onChange={handleChange} size="large"
                        >
                            <Option value="jack">依出版年排序(由大到小)</Option>
                            <Option value="lucy">依出版年排序(由小到大)</Option>
                            <Option value="Yiminghe">依書名排序(由大到小)</Option>
                            <Option value="Yiminghe">依書名年排序(由小到大)</Option>
                        </Select>
                        <Search
                            placeholder="input search text"
                            enterButton="Search"
                            size="large"
                            suffix={suffix}
                            onSearch={onSearch}
                            style={{ width: 850 }}
                        />
                    </div>

                    <List

                        itemLayout="vertical"
                        size="large"
                        pagination={{
                            onChange: page => {
                                console.log(page);
                            },
                            pageSize: 3,
                        }}
                        dataSource={listData}
                        footer={
                            <div>
                                <b>ant design</b> footer part
                            </div>
                        }
                        renderItem={item => (
                            <List.Item

                                key={item.title}
                                actions={[
                                    <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                                    <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                                    <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                                ]}

                            >


                                <List.Item.Meta

                                    //avatar={<Avatar src={item.avatar} />}
                                    title={<a href={item.href}>{item.title}</a>}
                                //description={item.description}

                                />
                                <img
                                    width={272}
                                    alt="logo"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                />
                                <span>書籍型態：書目－語言資料</span>
                                <span>作者：無中縣</span>
                                <span>出班者：光復</span>
                                <span>出版年：1987</span>
                                <span>館藏數量：1</span>
                                <span></span>可借閱數量:1</span>
                            </List.Item>

                        )}
                    />,
                    mountNode,

                </div>
            </Layout>
        )
    }
}
