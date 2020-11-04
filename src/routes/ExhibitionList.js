import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Layout from "../layouts/ExhibitionListLayout";
import "../mixin/main.css";
import { Input, Select, List, Pagination, Space, Row, Col, Divider, Typography, Anchor } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { MessageOutlined, LikeOutlined, StarOutlined, LineChartOutlined } from '@ant-design/icons';
import imgS001 from '../Assets/S001.jpg';
import imgS002 from '../Assets/S002.jpg';
import imgS003 from '../Assets/S003.jpg';
import imgS004 from '../Assets/S004.jpg';

const { Text, Title } = Typography;

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

export default class ExhibitionList extends Component {
    render() {

        return (
            <Layout>
                <Row>
                    <Col flex="300px" style={{ marginLeft: "3%" }} >
                        <Link to="Exhibition"><img width={200} src={imgS003}></img></Link>
                        <div style={{ margin: '10px 0px 5px 20px' }}>
                            <IconText icon={StarOutlined} text="9.2" key="list-vertical-star-o" />　|
                            <IconText icon={LineChartOutlined} text="76" key="list-vertical-like-o" />　|
                            <IconText icon={MessageOutlined} text="3" key="list-vertical-message" />
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
                <Divider />
                <Row>
                    <Col flex="300px" style={{ marginLeft: "3%" }}>
                        <img width={200} src={imgS004}></img>
                        <div style={{ margin: '10px 0px 5px 20px' }}>
                            <IconText icon={StarOutlined} text="7.7" key="list-vertical-star-o" />　|
                            <IconText icon={LineChartOutlined} text="38" key="list-vertical-like-o" />　|
                            <IconText icon={MessageOutlined} text="1" key="list-vertical-message" />
                        </div>
                    </Col>
                    <Col flex="auto">
                        <Title level={4}><u>自然變調-失序的生態系</u></Title>
                        <p style={{ marginBottom: '5px' }}><Text type="secondary">臺中市 , 國立自然科學博物館 , 第二特展室 , 展出日期: 2020-04-01至2020-11-15</Text></p>
                        <p><Text code>　自然　</Text><Text code>　生態　</Text><Text code>　生物　</Text><Text code>　動物　</Text></p>
                        <p style={{ marginBottom: '5px' }}><Text>人類造成的汙染與棲地破壞，不僅導致了氣候與環境的劇烈變遷，也正在改變自然界既有的秩序。生物生長形態 </Text></p>
                        <p style={{ marginBottom: '5px' }}><Text>、體色斑紋中規律井然的秩序之美，是經過長期演化而來。但身為資淺地球公民的人類發展出來的「文明」，卻</Text></p>
                        <p style={{ marginBottom: '5px' }}><Text>快速擴張、劇烈衝擊著自然秩序，地球上的生物們也不 得不在快速變化的局勢中尋求生存之道。自然變調，</Text></p>
                        <p style={{ marginBottom: '5px' }}><Text>是場沒有特定劇本的現場演出。生物們......more</Text></p>
                    </Col>
                </Row>
                <Divider />
                <Row>
                    <Col flex="300px" style={{ marginLeft: "3%" }}>
                        <img width={200} src={imgS002}></img>
                        <div style={{ margin: '10px 0px 5px 20px' }}>
                            <IconText icon={StarOutlined} text="6.4" key="list-vertical-star-o" />　|
                            <IconText icon={LineChartOutlined} text="23" key="list-vertical-like-o" />　|
                            <IconText icon={MessageOutlined} text="0" key="list-vertical-message" />
                        </div>
                    </Col>
                    <Col flex="auto" >
                        <Title level={4}><u>台灣農業的故事</u></Title>
                        <p style={{ marginBottom: '5px' }}><Text type="secondary">高雄市 , 國立科學工藝博物館 , 北館地下三樓 , 展出日期: 2016-07-01起常設展出</Text></p>
                        <p><Text code>　台灣　</Text><Text code>　農業　</Text><Text code>　植物　</Text><Text code>　畜牧　</Text></p>
                        <p style={{ marginBottom: '5px' }}><Text>「臺灣農業的故事」常設展示廳位於國立科學工藝博物館地下三樓，展示內容以臺灣精緻農業發展為主軸，透</Text></p>
                        <p style={{ marginBottom: '5px' }}><Text> 過多樣的展示方式，引述科技如何應用於日常生活的農業。民眾持一卡通亦可選擇廳內精選的５位農業明星</Text></p>
                        <p style={{ marginBottom: '5px' }}><Text>：水稻、豬、香蕉、蝴蝶蘭或石斑魚，闖關體驗累積資金打造個人的虛擬農場。......more</Text></p>
                    </Col>
                </Row>

                <Divider />
                <Row>
                    <Col flex="300px" style={{ marginLeft: "3%" }}>
                        <img width={200} src={imgS001}></img>
                        <div style={{ margin: '10px 0px 5px 20px' }}>
                            <IconText icon={StarOutlined} text="1" key="list-vertical-star-o" />　|
                            <IconText icon={LineChartOutlined} text="6" key="list-vertical-like-o" />　|
                            <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />
                        </div>
                    </Col>
                    <Col flex="auto">
                        <Title level={4}><u>森．生不息</u></Title>
                        <p style={{ marginBottom: '5px' }}><Text type="secondary">中文書 , 陽明山國家公園管理處 , 內政部營建署陽明山國家公園管理處 , 出版日期: 2011-12-01</Text></p>
                        <p><Text code>　植物　</Text><Text code>　蕨類　</Text><Text code>　自然　</Text><Text code>　觀察家　</Text></p>
                        <p style={{ marginBottom: '5px' }}><Text>陽明山國家公園的蕨類總計近200種，包含臺灣所有蕨類的科別。由於受多變氣候的影響，區內蕨類的豐富度和歧</Text></p>
                        <p style={{ marginBottom: '5px' }}><Text>異度相當高，除低海拔的蕨類普遍可見外，因受東北季風影響而出現許多「北降型」蕨類，諸如稀子蕨、日本金星</Text></p>
                        <p style={{ marginBottom: '5px' }}><Text>蕨、韓氏烏毛蕨……等。園區內降雨量多、水源豐沛，加上受火山地形影響，形成許多小溪流、沼澤及湖泊，如此高 </Text></p>
                        <p style={{ marginBottom: '5px' }}><Text>潮溼的生態......more</Text></p>

                    </Col>
                </Row>
                <Divider />
                <Row>
                    <Col flex="300px" style={{ marginLeft: "3%" }}>
                        <img width={200} src={imgS004}></img>
                        <div style={{ margin: '10px 0px 5px 20px' }}>
                            <IconText icon={StarOutlined} text="1" key="list-vertical-star-o" />　|
                            <IconText icon={LineChartOutlined} text="1" key="list-vertical-like-o" />　|
                            <IconText icon={MessageOutlined} text="0" key="list-vertical-message" />
                        </div>
                    </Col>
                    <Col flex="auto" >
                        <Title level={4}><u>棲蘭山蕨類生態解說手冊</u></Title>
                        <p style={{ marginBottom: '5px' }}><Text type="secondary">中文書 , 陳子英、林哲榮、李坤益 , 行政院國軍退除役輔導委員會 , 出版日期: 2011-12-01</Text></p>
                        <p><Text code>　植物　</Text><Text code>　蕨類　</Text><Text code>　自然　</Text><Text code>　觀察家　</Text></p>
                        <p style={{ marginBottom: '5px' }}><Text>本著內容介紹有關棲蘭山蕨類植物的演化史、觀察方法、生長環境等之描述及各類蕨類植物科別種類附圖解說</Text></p>
                        <p style={{ marginBottom: '5px' }}><Text>一、棲蘭山地區之地理環境......more</Text></p>
                    </Col>
                </Row>
                <Divider />
                <Row>
                    <Col flex="300px" style={{ marginLeft: "3%" }}>
                        <img width={200} src={imgS004}></img>
                        <div style={{ margin: '10px 0px 5px 20px' }}>
                            <IconText icon={StarOutlined} text="1" key="list-vertical-star-o" />　|
                            <IconText icon={LineChartOutlined} text="1" key="list-vertical-like-o" />　|
                            <IconText icon={MessageOutlined} text="0" key="list-vertical-message" />
                        </div>
                    </Col>
                    <Col flex="auto">
                        <Title level={4}><u>蕨類觀察圖鑑1：基礎常見篇 </u></Title>
                        <p style={{ marginBottom: '5px' }}><Text type="secondary">中文書 , 郭城孟 , 遠流 , 出版日期: 2020-01-17</Text></p>
                        <p><Text code>　植物　</Text><Text code>　蕨類　</Text><Text code>　自然　</Text><Text code>　觀察家　</Text></p>
                        <p style={{ marginBottom: '5px' }}><Text>★有系統、有方法、有要訣，從基礎到進階，是認識台灣蕨類世界最易上手的入門圖鑑 ◎輕鬆認識台灣35科超 </Text></p>
                        <p style={{ marginBottom: '5px' }}><Text>過300種較常見到與造形特殊的蕨類 ◎條理清晰、內容詳盡的文字說明 ◎含括完整植株與重要局部特徵的生態</Text></p>
                        <p style={{ marginBottom: '5px' }}><Text>照片 ◎重點歸納的生態特徵圖例 ◎多樣化的查詢方法 ◎透過蕨類看到台灣獨特的植物生態地景 最親切易查</Text></p>
                        <p style={{ marginBottom: '5px' }}><Text>的賞蕨圖鑑台灣雖是蕞爾小島，卻是......more</Text></p>
                    </Col>
                </Row>
                <Divider />
                <Row>
                    <Col flex="300px" style={{ marginLeft: "3%" }}>
                        <img width={200} src={imgS004}></img>
                        <div style={{ margin: '10px 0px 5px 20px' }}>
                            <IconText icon={StarOutlined} text="1" key="list-vertical-star-o" />　|
                            <IconText icon={LineChartOutlined} text="1" key="list-vertical-like-o" />　|
                            <IconText icon={MessageOutlined} text="0" key="list-vertical-message" />
                        </div>
                    </Col>
                    <Col flex="auto">
                        <Title level={4}><u>蕨類觀察圖鑑2：進階珍稀篇  </u></Title>
                        <p style={{ marginBottom: '5px' }}><Text type="secondary">中文書 , 郭城孟 , 遠流 , 出版日期: 2020-01-17</Text></p>
                        <p><Text code>　植物　</Text><Text code>　蕨類　</Text><Text code>　自然　</Text><Text code>　觀察家　</Text></p>
                        <p style={{ marginBottom: '5px' }}><Text>★有系統、有方法、有要訣，從基礎到進階，是認識台灣蕨類世界最易上手的入門圖鑑 ◎輕鬆認識台灣超過300種</Text></p>
                        <p style={{ marginBottom: '5px' }}><Text>蕨類，包括許多珍貴稀有甚至瀕危的物種 ◎條理清晰、內容詳盡的文字說明 ◎含括完整植株與重要局部特徵的生 </Text></p>
                        <p style={{ marginBottom: '5px' }}><Text>態照片 ◎重點歸納的生態特徵圖例 ◎多樣化的查詢方法　◎透過蕨類看到台灣獨特的植物生態地景　最親切易查</Text></p>
                        <p style={{ marginBottom: '5px' }}><Text>的賞蕨圖鑑台灣雖是蕞爾小島，卻是......more</Text></p>
                    </Col>
                </Row>
                <div style={{ margin: '12pt 8pt 12pt 5pt', float: 'right' }}><Pagination defaultCurrent={1} total={50} /></div>
            </Layout>
        )
    }
}
