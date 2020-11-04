import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Layout from "../layouts/Layout";
import BraftEditor from 'braft-editor';
import Slider from "react-slick";
import { List, Avatar, Rate, Row, Col, Divider, Typography, Modal, Button, Result } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import "../mixin/main.css";
import "./book.css";
import 'braft-editor/dist/index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgL001 from '../Assets/L001.jpg';
import imgL002 from '../Assets/L002.jpg';
import imgL003 from '../Assets/L003.jpg';
import imgL004 from '../Assets/L004.jpg';
import imgL005 from '../Assets/L005.jpg';
import imgL006 from '../Assets/L006.jpg';
import imgL007 from '../Assets/L007.jpg';
import imgS003 from '../Assets/S003.jpg';



const { Title, Text } = Typography;

const data = [
    {
        title: '非常有趣!',
        img: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png',
        time: '2020-09-27 11:38:02'
    },
    {
        title: '這個展覽太棒了!',
        img: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-512.png',
        time: '2020-10-29 08:16:51'
    },
    {
        title: '有點無聊',
        img: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png',
        time: '2020-11-05 22:17:06'
    },
];

export default class Exhibition extends Component {

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
        const { editorState, outputHTML } = this.state
        const controls = [
            'bold', 'italic', 'underline', 'text-color', 'separator', 'link', 'separator',
        ]
        var settings = {
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            color: 'black',
        };
        return (
            <Layout>
                <Row style={{ marginLeft: '15%', marginRight: "0%" }}>
                    <Col flex="400px">
                        <img width={350} src={imgS003}></img>
                    </Col>
                    <Col flex="550px" style={{ fontSize: '18pt' }} >
                        <Title level={2}><u>繽紛生命-生物多樣性特展</u>  </Title>
                        <p><Text code>　生命　</Text><Text code>　生物　</Text><Text code>　植物　</Text><Text code>　動物　</Text><Text code>　自然　</Text></p>
                        <p style={{ marginBottom: '5px' }}><Text >地區：臺中市 </Text></p>
                        <p style={{ marginBottom: '5px' }}><Text>地點：國立自然科學博物館</Text></p>
                        <p style={{ marginBottom: '5px' }}> <Text>展館：第四特展室 </Text></p>
                        <p style={{ marginBottom: '5px' }}> <Text>展出日期：2020-05-20 至 2021-03-21 </Text></p>
                        <p style={{ marginBottom: '5px' }}><Text>門票：免費 </Text></p>
                        <p style={{ marginBottom: '5px' }}><Text>開放時間：星期二至星期日 09:00~17:00 </Text></p>
                        <p style={{ marginBottom: '5px' }}><Text>其他：星期一公休 </Text></p>
                        <Button type="primary" icon={<DownloadOutlined />} size='large' onClick={this.showModal} style={{ marginLeft: '60%', marginTop: '5%' }} >
                            加入學習歷程
                        </Button>
                        <Modal
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                            footer={[]}
                            width={600}
                            style={{ paddingBottom: 0 }}
                        >
                            <Result
                                status="success"
                                title="成功加入至學習歷程!"
                                subTitle="請至學習歷程頁面，填寫回饋心得單。"
                                extra={[
                                    <Link to="Portfolio">
                                        <Button type="primary" key="console" style={{ marginTop: 10 }}>
                                            前往學習歷程
                                        </Button>
                                    </Link>,
                                    <Button key="buy" onClick={this.handleCancel}>關閉視窗</Button>,
                                ]}
                            />
                        </Modal>
                    </Col>
                    <Col flex="400px" style={{ marginTop: '8%' }} >
                        <Row style={{ marginBottom: '2%' }}>
                            <Col flex="70px" >
                                <span className="rateh1" >9.5</span>
                            </Col>
                            <Col flex="300px" >
                                <Row>
                                    <Rate allowHalf defaultValue={4.5} />
                                </Row>
                                <Row>
                                    <span style={{ color: "#3498DB" }}>20人評價</span>
                                </Row>
                            </Col>
                        </Row>
                        <Row style={{ marginBottom: '1%' }}>
                            <Col flex="40px" >
                                五星
                            </Col>
                            <Col flex="200px" >
                                <div class="w3-progress-container">
                                    <div id="myBar" class="w3-progressbar" style={{ width: "60%" }}></div>
                                </div>
                            </Col>
                            <Col flex="20px">
                                70%
                            </Col>
                        </Row>
                        <Row style={{ marginBottom: '1%' }}>
                            <Col flex="40px" >
                                四星
                            </Col>
                            <Col flex="200px" >
                                <div class="w3-progress-container">
                                    <div id="myBar" class="w3-progressbar" style={{ width: "20%" }}></div>
                                </div>
                            </Col>
                            <Col flex="20px" style={{ marginBottom: '1%' }}>
                                20%
                            </Col>
                        </Row>
                        <Row style={{ marginBottom: '1%' }}>
                            <Col flex="40px" >
                                三星
                            </Col>
                            <Col flex="200px" >
                                <div class="w3-progress-container">
                                    <div id="myBar" class="w3-progressbar" style={{ width: "10%" }}></div>
                                </div>
                            </Col>
                            <Col flex="20px" style={{ marginBottom: '1%' }}>
                                10%
                            </Col>
                        </Row>
                        <Row style={{ marginBottom: '1%' }}>
                            <Col flex="40px" >
                                二星
                            </Col>
                            <Col flex="200px" >
                                <div class="w3-progress-container">
                                    <div id="myBar" class="w3-progressbar" style={{ width: "0%" }}></div>
                                </div>
                            </Col>
                            <Col flex="20px" style={{ marginBottom: '1%' }}>
                                0%
                            </Col>
                        </Row>
                        <Row style={{ marginBottom: '1%' }}>
                            <Col flex="40px" >
                                一星
                            </Col>
                            <Col flex="200px" >
                                <div class="w3-progress-container">
                                    <div id="myBar" class="w3-progressbar" style={{ width: "0%" }}></div>
                                </div>
                            </Col>
                            <Col flex="20px" style={{ marginBottom: '1%' }}>
                                0%
                            </Col>
                        </Row>


                    </Col>

                    <Divider />
                </Row>
                <Row>
                    <Title level={3} style={{ marginLeft: '15%', marginRight: "15%" }}>討論園地</Title>
                    <Col span={24}>
                        <List
                            style={{ marginLeft: '15%', marginRight: "15%" }}
                            itemLayout="horizontal"
                            dataSource={data}
                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar src={item.img} />}
                                        title={item.title}
                                        description={item.time}
                                    />
                                </List.Item>
                            )}
                        />
                        <div style={{ marginLeft: "15%", marginRight: "15%" }}>
                            <div className="editor-wrapper" style={{ borderStyle: 'solid', borderColor: '#E5E7E9', borderWidth: '1px' }}>
                                <BraftEditor
                                    value={editorState}
                                    onChange={this.handleChange}
                                    controls={controls}
                                    contentStyle={{ height: 210, boxShadow: 'inset 0 1px 3px rgba(0,0,0,.1)' }}
                                />
                            </div>
                            <Button type="primary" style={{ float: 'right', marginTop: '10px' }}>送出</Button>
                        </div>
                    </Col>
                    <Divider />
                </Row>
                <Row>
                    <Title level={3} style={{ marginLeft: '15%', marginRight: "15%" }}>相關書籍</Title>
                    <Col span={24}>
                        <div style={{ marginLeft: "15%", marginRight: "15%" }}>
                            <Slider {...settings} >
                                <div>
                                    <Link to="Book"><img height="300px" src={imgL001} /></Link>
                                </div>
                                <div>
                                    <img height="300px" src={imgL002} />
                                </div>
                                <div>
                                    <img height="300px" src={imgL003} />
                                </div>
                                <div>
                                    <img height="300px" src={imgL004} />
                                </div>
                                <div>
                                    <img height="300px" src={imgL005} />
                                </div>
                                <div>
                                    <img height="300px" src={imgL006} />
                                </div>
                                <div>
                                    <img height="300px" src={imgL007} />
                                </div>
                            </Slider>
                        </div>
                    </Col>
                    <Divider />
                </Row>
                <Row>
                    <Title level={3} style={{ marginLeft: '15%', marginRight: "15%" }}>如何去展覽館(公車)</Title>
                    <Col span={24}>
                        <div style={{ marginLeft: "15%", marginRight: "15%" }}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d464359.544214666!2d120.79561101639953!3d24.595789155097524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x3442a98bc29e871d%3A0x861db0f2b5ef52a3!2zMTA25Y-w5YyX5biC5aSn5a6J5Y2A576F5pav56aP6Lev5Zub5q61MeiZn-Wci-eri-iHuueBo-Wkp-WtuOe2nOWQiOmrlOiCsumkqA!3m2!1d25.0216697!2d121.5352956!4m5!1s0x34693d78069134cb%3A0xf7a65bba8f974f36!2z5Y-w5Lit5YyX5Y2A6aSo5YmN6Lev5ZyL56uL6Ieq54S256eR5a245Y2a54mp6aSo!3m2!1d24.1572335!2d120.6660606!5e0!3m2!1szh-TW!2stw!4v1604490002143!5m2!1szh-TW!2stw" width="1150" height="600" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>                        </div>
                    </Col>
                </Row>




            </Layout>
        )
    }
}
/*
                        <Button type="primary" onClick={this.showModal}>
                            加入學習歷程
                        </Button>
*/
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
/*
AIzaSyBl97Q2qi59q3XyhAypbV8eD89fxvifLLU
*/
/*
<Table columns={columns} dataSource={data} />
                            <span className="rateh1" >7.6<Rate allowHalf defaultValue={2.5} style={{ marginLeft: '5%' }} /></span>10人評價

*/
