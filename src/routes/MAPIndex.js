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
import imgS004 from '../Assets/S004.jpg';

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
                            <Link to="Exhibition"><img width={200} src={imgS003}></img></Link>
                        </div>
                    </Col>
                    <Col flex="auto">
                        <Link to="Exhibition"><Title level={4}><u>繽紛生命-生物多樣性特展</u></Title></Link>
                        <p style={{ marginBottom: '5px' }}><Text type="secondary">臺中市 , 國立自然科學博物館 , 第四特展室 , 展出日期: 2020-05-20 至 2021-03-21</Text></p>
                        <p><Text code>　生命　</Text><Text code>　生物　</Text><Text code>　植物　</Text><Text code>　動物　</Text><Text code>　自然　</Text></p>
                        <p style={{ marginBottom: '5px' }}><Text>生物始之於簡，繼之以變，現之於繁，呈之以美。生物卅多億年的演化，將地球打造成亮麗的行星，這裡也是所</Text></p>
                        <p style={{ marginBottom: '5px' }}><Text>有過去、現在和未來生物的家。我們沒有另一個行星家園，There is no Planet B。科博館在2020年世界地球</Text></p>
                        <p style={{ marginBottom: '5px' }}><Text>日五十周年推出「繽紛的生命」特展，以豐富的館藏精品和民間藝術創作，搭配臺灣在地或世界性的研究故事</Text></p>
                        <p style={{ marginBottom: '5px' }}><Text>與公民科學，呈現生物世界的感性與知性之美。...... <Link to="Exhibition">more</Link></Text></p>
                    </Col>
                </Row>
            </Layout>
        )
    }
}
