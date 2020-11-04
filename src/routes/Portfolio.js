import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Layout from "../layouts/Layout";
import "../mixin/main.css";
import "./Portfolio.css";
import { Input, Radio, Typography, Button, Row, Col, Table, Tag, Space, Modal } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import imgL001 from '../Assets/L001.jpg';
import imgS005 from '../Assets/S005.jpg';
import imgS006 from '../Assets/S006.jpg';
import imgS007 from '../Assets/S007.png';
import imgS003 from '../Assets/S003.jpg';

const { Title, Text } = Typography;
const { Search, TextArea } = Input;
const { Column, ColumnGroup } = Table;

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
        img: imgS003,
        name: '繽紛生命-生物多樣性特展',
        status: '未填寫',
        date: '2020-11-7',
        tags: ['生命', '生物', '植物', '動物','自然'],
    },
    {
        key: '3',
        img: imgS005,
        name: '現代國畫畫派 2020 現代國畫創作展',
        status: '已填寫',
        date: '2020-11-5',
        tags: ['植物', '蕨類', '自然', '觀察家'],
    },
    {
        key: '4',
        img: imgS006,
        name: '仿生-從大自然來的絶妙點子特展',
        status: '未填寫',
        date: '2020-11-3',
        tags: ['植物', '蕨類', '自然', '觀察家'],
    },
    {
        key: '5',
        img: imgS007,
        name: '仿生-從大自然來的絶妙點子特展',
        status: '未填寫',
        date: '2020-11-3',
        tags: ['植物', '蕨類', '自然', '觀察家'],
    },

];

export default class Portfolio extends Component {
    state = {
        size: 'all',
        visible: false,
    };

    handleSizeChange = e => {
        this.setState({ size: e.target.value });
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render() {
        const { size } = this.state;
        return (
            <Layout>
                <Row>
                    <Col flex="300px">
                        <Title level={2} >學習歷程(學生)</Title>
                    </Col>
                    <Col flex="auto" style={{ textAlign: "right" }}>
                        <Radio.Group value={size} onChange={this.handleSizeChange} style={{ marginRight: "3%" }}>
                            <Radio.Button value="all">全部</Radio.Button>
                            <Radio.Button value="default">未填寫</Radio.Button>
                            <Radio.Button value="small" > 已填寫</Radio.Button>
                        </Radio.Group>
                        <Search placeholder="請輸入" style={{ width: 200 }} />

                    </Col>
                </Row>
                <Row >
                    <Col span={24}>
                        <Table dataSource={data}>
                            <Column
                                title="預覽圖片"
                                dataIndex="img"
                                key="img"
                                width={10}
                                align='center'
                                render={img => (
                                    <>
                                        <img height={300} src={img} />
                                    </>
                                )}
                            />
                            <Column
                                title="展覽/書籍名稱"
                                dataIndex="name"
                                key="name"
                                align='center'
                                render={text => (
                                    <a>{text}</a>
                                )}
                            />
                            <Column
                                title="建立日期"
                                dataIndex="date"
                                key="date"
                                align='center'
                            />
                            <Column
                                title="填寫狀態"
                                dataIndex="status"
                                key="status"
                                align='center'
                            />
                            <Column
                                title="標籤"
                                dataIndex="tags"
                                key="tags"
                                align='center'
                                render={tags => (
                                    <>
                                        {tags.map(tag => (
                                            <Tag color="blue" key={tag} onClick={this.showModal}>
                                                {tag}
                                            </Tag>
                                        ))}
                                    </>
                                )}
                            />
                            <Column
                                title=""
                                key="action"
                                render={(text, record) => (
                                    <Space size="middle">
                                        <Button type="primary" onClick={this.showModal}>
                                            填寫心得
                                        </Button>

                                    </Space>
                                )}
                            />
                        </Table>
                        <Modal
                            title="填寫心得"
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                            width='80%'
                            okText='送出'
                            cancelText='取消'
                        >
                            <Row align="middle" style={{ marginBottom: "1%" }} >
                                <Col span={6} style={{ textAlign: "right" }}>
                                    <span>班級：</span>
                                </Col>
                                <Col span={12}>
                                    <Input placeholder="" style={{ width: 190, marginRight: '5%' }} />
                                    <span>學號：</span>
                                    <Input placeholder="" style={{ width: 190, marginRight: '5%' }} />
                                    <span>姓名：</span>
                                    <Input placeholder="" style={{ width: 190 }} />
                                </Col>
                                <Col span={6}></Col>
                            </Row >
                            <Row align="middle" style={{ marginBottom: "1%" }} >
                                <Col span={6} style={{ textAlign: "right" }}>
                                    <span>標題：</span>
                                </Col>
                                <Col span={12}>
                                    <Input placeholder="" />
                                </Col>
                                <Col span={6}></Col>
                            </Row >
                            <Row align="top" style={{ marginBottom: "1%" }} >
                                <Col span={6} style={{ textAlign: "right" }}>
                                    <span>一、圖書作者與內容簡介：</span>
                                </Col>
                                <Col span={12}>
                                    <TextArea rows={4} />
                                </Col>
                                <Col span={6}></Col>
                            </Row >
                            <Row align="top" style={{ marginBottom: "1%" }} >
                                <Col span={6} style={{ textAlign: "right" }}>
                                    <span>二、內容摘錄：</span>
                                </Col>
                                <Col span={12}>
                                    <TextArea rows={8} />
                                </Col>
                                <Col span={6}></Col>
                            </Row >
                            <Row align="top" style={{ marginBottom: "1%" }} >
                                <Col span={6} style={{ textAlign: "right" }}>
                                    <span>三、我的觀點：</span>
                                </Col>
                                <Col span={12}>
                                    <TextArea rows={12} />
                                </Col>
                                <Col span={6}></Col>
                            </Row >
                            <Row align="top" style={{ marginBottom: "1%" }} >
                                <Col span={6} style={{ textAlign: "right" }}>
                                    <span>四、討論議題：</span>
                                </Col>
                                <Col span={12}>
                                    <TextArea rows={4} />
                                </Col>
                                <Col span={6}></Col>
                            </Row >
                        </Modal>
                    </Col>
                </Row>
            </Layout>
        )
    }
}
