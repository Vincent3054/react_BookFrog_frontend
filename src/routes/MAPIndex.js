import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Layout from "../layouts/Layout";
import BraftEditor from 'braft-editor';
import Slider from "react-slick";
import SimpleMap from '../components/SimpleMap'
import { List, Avatar, Rate, Row, Col, Divider, Typography, Modal, Button, Result } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import "../mixin/main.css";
import "./book.css";
import 'braft-editor/dist/index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgS001 from '../Assets/S001.jpg';
import imgS002 from '../Assets/S002.jpg';
import imgS003 from '../Assets/S003.jpg';
import imgS004 from '../Assets/S004.jpg';

const { Title, Text } = Typography;


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
                    <Title level={3} style={{ marginLeft: '15%', marginRight: "15%" }}>如何去圖書館(公車)</Title>
                    <Col span={24}  style={{ marginLeft: '15%', marginRight: "15%" }}>

                        <SimpleMap />
                    </Col>
                </Row>




            </Layout>
        )
    }
}

/*
    蕨類觀察入門
                        <p style={{marginBottom: '5px'}}><Text >ISBN：9789573245018 </Text></p>
                        <p style={{marginBottom: '5px'}}><Text>作者：<u>郭城孟</u></Text></p>
                        <p style={{marginBottom: '5px'}}> <Text>繪者：<u>黃崑謀</u> </Text></p>
                        <p style={{marginBottom: '5px'}}> <Text>出版社：<u>遠流</u> </Text></p>
                        <p style={{marginBottom: '5px'}}><Text>出版日期：2020/01/15 </Text></p>
                        <p style={{marginBottom: '5px'}}><Text>語言：繁體中文 </Text></p>
*/
/*
柴山蕨類植物
                        <p style={{marginBottom: '5px'}}><Text > ISBN：9789860244762 </Text></p>
                        <p style={{marginBottom: '5px'}}><Text>作者：<u>楊吉壽</u></Text></p>
                        <p style={{marginBottom: '5px'}}> <Text>出版社：<u>高雄市政府研究發展考核委員會</u> </Text></p>
                        <p style={{marginBottom: '5px'}}><Text>出版日期：2010/08/01 </Text></p>
                        <p style={{marginBottom: '5px'}}><Text>語言：繁體中文 </Text></p>
*/
/*
蕨妙草山
                        <p style={{marginBottom: '5px'}}><Text > ISBN：9789860304268</Text></p>
                        <p style={{marginBottom: '5px'}}><Text>作者：<u>陽明山國家公園管理處</u></Text></p>
                        <p style={{marginBottom: '5px'}}> <Text>出版社：<u>內政部營建署陽明山國家公園管理處  </u> </Text></p>
                        <p style={{marginBottom: '5px'}}><Text>出版日期：2011/12/01 </Text></p>
                        <p style={{marginBottom: '5px'}}><Text>語言：繁體中文 </Text></p>
*/
/*
蕨影：大雪山國家森林遊樂區蕨類植物解說手冊
                        <p style={{marginBottom: '5px'}}><Text > ISBN：9789860199987 </Text></p>
                        <p style={{marginBottom: '5px'}}><Text>作者：<u>郭城孟、黃俊溢、高美芳</u></Text></p>
                        <p style={{marginBottom: '5px'}}> <Text>出版社：<u>行政院農業委員會林務局  </u> </Text></p>
                        <p style={{marginBottom: '5px'}}><Text>出版日期：2011/10/01 </Text></p>
                        <p style={{marginBottom: '5px'}}><Text>語言：繁體中文 </Text></p>
*/
