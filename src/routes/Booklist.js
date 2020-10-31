import React, { Component } from "react";
import Layout from "../layouts/BooklistLayout";
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
const data = [
    {
        title: 'Ant Design Title 1',

        img: 'https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/087/48/0010874830.jpg&v=5f96a52c&w=348&h=348'
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];

export default class Booklist extends Component {
    render() {

        return (
            <Layout>
                <div>
                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    img={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"></img>}
                                    title={<a href="https://ant.design">{item.title}</a>}
                                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                />
                            </List.Item>
                        )}
                    />
                  mountNode,

                </div>
            </Layout>
        )
    }
}
