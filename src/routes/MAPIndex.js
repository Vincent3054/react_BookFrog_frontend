import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Layout from "../layouts/Layout";
import BraftEditor from 'braft-editor';
import Slider from "react-slick";
import SimpleMap from '../components/SimpleMap'
import { List, Avatar, Rate, Row, Col, Divider, Typography, Modal, Button, Result } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined, LineChartOutlined } from '@ant-design/icons';
import "../mixin/main.css";
import "./book.css";
import 'braft-editor/dist/index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgS001 from '../Assets/S001.jpg';
import imgS002 from '../Assets/S002.jpg';
import imgS003 from '../Assets/S003.jpg';
import imgS005 from '../Assets/S005.jpg';

const { Title, Text } = Typography;

const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);
export default class MAPIndex extends Component {

    state = {
        editorState: BraftEditor.createEditorState('<p>初始值</p>'), // 设置编辑器初始内容
        outputHTML: '<p></p>',
        visible: false // 编辑器输出内容
    }
    showModal = () => {
        setTimeout(() => {
            this.setState({
                visible: true,
            });
        }, 500);
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

    componentDidMount() {
        this.setState({
            editorState: BraftEditor.createEditorState('請在此留言...')
        })
    }

    handleChange = (editorState) => {
        this.setState({
            editorState: editorState,
            outputHTML: editorState.toHTML()
        }, () => {
            console.log(editorState)
            console.log(this.state.outputHTML)
        })
    }

    render() {


        return (
            <Layout>
                <Row>
                    <Title level={3} style={{ marginLeft: '15%', marginRight: "15%" }}>鄰近展覽</Title>
                    <Col span={24} style={{ marginLeft: '15%', marginRight: "15%", marginBottom: "15%" }}>
                        <SimpleMap />
                    </Col>
                </Row>
                <Divider />

                <Row style={{ marginLeft: "15%",marginRight:'15%',marginBottom:'5%' }}>
                    <Col flex="300px" style={{ marginLeft: "3%" }} >
                        <div style={{ margin: '10px 0px 5px 20px' }}>
                            <Link to="#"><img width={200} src={imgS005}></img></Link>
                        </div>
                    </Col>
                    <Col flex="auto">
                        <Link to="#"><Title level={4}><u>現代國畫畫派 2020 現代國畫創作展</u></Title></Link>
                        <p style={{ marginBottom: '5px' }}><Text type="secondary">臺北市 , 國立臺灣藝術教育館 , 第一、二展覽廳 , 展出日期: 2020-11-14 至 2020-11-25</Text></p>
                        <p><Text code>　國畫　</Text><Text code>　創作　</Text><Text code>　藝術　</Text><Text code>　現代　</Text><Text code>　藝術　</Text></p>
                        <p style={{ marginBottom: '5px' }}><Text>現代國畫畫派創立畫家陳銘顯，提倡筆墨、意境、與現代精神的現代國畫，認為理論及觀念要跟隨時代，創作</Text></p>
                        <p style={{ marginBottom: '5px' }}><Text>題材要反應生活體驗，以創作者的自我感性為主導，將所見、所聞、所感融入畫中。聚焦賞析：以國畫水墨媒</Text></p>
                        <p style={{ marginBottom: '5px' }}><Text>材，保留傳統國畫筆墨、意境......<Link to="#">more</Link></Text></p>
                    </Col>
                </Row>
            </Layout>
        )
    }
}
