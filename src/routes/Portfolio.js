import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Layout from "../layouts/Layout";
import "../mixin/main.css";
import "./Portfolio.css";
import { Input, Select, Modal, Button, Row, Col, Table, Tag, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import imgL001 from '../Assets/L001.jpg';
import imgS005 from '../Assets/S005.jpg';
import imgS006 from '../Assets/S006.jpg';
import imgS007 from '../Assets/S007.png';

const columns = [
    {
        title: '預覽圖片',
        dataIndex: 'img',
        key: 'img',
        width: 10,
        align: 'center',
        render: img => <img height={300} src={img} />
    },
    {
        title: '展覽/書籍名稱',
        dataIndex: 'name',
        key: 'name',

        render: text => <a>{text}</a>,
    },
    
    {
        title: '建立日期',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: '填寫狀態',
        dataIndex: 'status',
        key: 'status',
        align: 'center',


    },
    {
        title: '標籤',
        key: 'tags',
        dataIndex: 'tags',
        align: 'center',

        render: tags => (
            <>
                {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag} style={{ fontSize: '20px' }} size='Default'>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: '　',
        key: 'action',
        render: (text, record) => (
            <Space size="large">
                <Button type="primary">
                    填寫心得
                </Button>
            </Space>
        ),
    },
];

const data = [
    {
        key: '1',
        img: imgL001,
        name: '蕨類觀察入門',
        status: '未填寫',
        date: '2020-11-7',
        tags: ['植物', '蕨類', '自然', '觀察家'],

    },
    {
        key: '2',
        img: imgS005,
        name: '現代國畫畫派 2020 現代國畫創作展',
        status: '未填寫',
        date: '2020-11-5',
        tags: ['植物', '蕨類', '自然', '觀察家'],
    },
    {
        key: '3',
        img: imgS006,
        name: '仿生-從大自然來的絶妙點子特展',
        status: '未填寫',
        date: '2020-11-3',
        tags: ['植物', '蕨類', '自然', '觀察家'],
    },
    {
        key: '4',
        img: imgS007,
        name: '仿生-從大自然來的絶妙點子特展',
        status: '未填寫',
        date: '2020-11-3',
        tags: ['植物', '蕨類', '自然', '觀察家'],
    },
];
export default class Portfolio extends Component {
    render() {

        return (
            <Layout>
                <Row >
                    <Col span={24}>
                        <Table columns={columns} dataSource={data} />
                    </Col>
                </Row>
            </Layout>
        )
    }
}
