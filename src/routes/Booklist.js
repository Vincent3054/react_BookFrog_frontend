import React, { Component } from "react";
//import { Link } from 'react-router-dom';
import Layout from "../layouts/BooklistLayout";
import "../mixin/main.css";
import { Input, Select, List, Pagination , Space, Row, Col,Divider ,Typography ,Anchor } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import Book from "./Book";


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
 const { Link } = Anchor;

const { Title } = Typography;
const { Text, } = Typography;
const { Paragraph } = Typography;
function onChange(pageNumber) {
    console.log('Page: ', pageNumber);
  }

export default class Booklist extends Component {
    render() {

        return (
            <Layout>                
                <Row>
                    <Col flex="300px">
                        <img width={300} src='https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/084/59/0010845956_bc_01.jpg&v=5e204961&w=655&h=609'></img>
                        <div style={{margin:'10px 0px 5px 60px'}}>
                            <IconText icon={StarOutlined} text="3" key="list-vertical-star-o"/>　|　
                            <IconText icon={LikeOutlined} text="16" key="list-vertical-like-o"/>　|　
                            <IconText icon={MessageOutlined} text="2" key="list-vertical-message"/> 
                        </div>  
                    </Col>
                    <Col flex="auto">
                        <Title level={4}><u>蕨類觀察入門</u></Title>                        
                        <p style={{marginBottom: '5px'}}><Text type="secondary">中文書 , 郭城孟   黃崑謀 , 遠流 , 出版日期: 2020-01-15</Text></p>        
                        <p><Text code>　植物　</Text><Text code>　蕨類　</Text><Text code>　自然　</Text><Text code>　觀察家　</Text></p>
                        <p style={{marginBottom: '5px'}}><Text>★深入淺出、明晰漸進的精美圖解式指南，吸引一般讀者與自然科學愛好者。 ◎台灣第一部本土自製蕨類百科，</Text></p>        
                        <p style={{marginBottom: '5px'}}><Text>歷久彌新全方位蕨類入門。 ◎近40幅細緻蕨類博物畫，數十幅精密解說小圖，加上約五百張生態與特徵照，多角</Text></p>        
                        <p style={{marginBottom: '5px'}}><Text>度呈現蕨類之美。◎豐富的延伸資訊與生活化的取材，是認識台灣植物生態地景不可或缺的科普讀物。◎蕨類專家、</Text></p>  
                        <p style={{marginBottom: '5px'}}><Text>優秀生態畫家、金獎編輯團......more</Text></p>  
                    </Col>
                </Row>
                <Divider />
                <Row>
                    <Col flex="300px">
                        <img width={300} src='https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/048/47/0010484722.jpg&v=4cb5a6f0&w=348&h=348'></img>
                        <div style={{margin:'10px 0px 5px 60px'}}>
                            <IconText icon={StarOutlined} text="0" key="list-vertical-star-o"/>　|　
                            <IconText icon={LikeOutlined} text="8" key="list-vertical-like-o"/>　|　
                            <IconText icon={MessageOutlined} text="1" key="list-vertical-message"/> 
                        </div>  
                    </Col>
                    <Col flex="auto" style={{marginTop:22}}>
                        <Title level={4}><u>柴山蕨類植物</u></Title>
                        <p style={{marginBottom: '5px'}}><Text type="secondary">中文書 , 楊吉壽 , 高雄市政府研究發展考核委員會 , 出版日期: 2010-08-01</Text></p>        
                        <p><Text code>　植物　</Text><Text code>　蕨類　</Text><Text code>　自然　</Text><Text code>　觀察家　</Text></p>
                        <p style={{marginBottom: '5px'}}><Text>介紹柴山蕨類植物。作者楊吉壽先生將歷年來平時所從事之柴山蕨類生態觀察集結成書，為柴山珍貴的自然環境資</Text></p>        
                        <p style={{marginBottom: '5px'}}><Text>源留下紀錄......more </Text></p>        
                    </Col>
                </Row>
                <Divider />
                <Row>
                    <Col flex="300px" >
                        <img width={300} src='https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/053/33/0010533361.jpg&v=4f141b87&w=348&h=348'></img>
                        <div style={{margin:'10px 0px 5px 60px'}}>
                            <IconText icon={StarOutlined} text="1" key="list-vertical-star-o"/>　|　
                            <IconText icon={LikeOutlined} text="6" key="list-vertical-like-o"/>　|　
                            <IconText icon={MessageOutlined} text="2" key="list-vertical-message"/> 
                        </div>  
                    </Col>
                    <Col flex="auto"  style={{marginTop:22}}>
                        <Title level={4}><u>蕨妙草山</u></Title>
                        <p style={{marginBottom: '5px'}}><Text type="secondary">中文書 , 陽明山國家公園管理處 , 內政部營建署陽明山國家公園管理處 , 出版日期: 2011-12-01</Text></p>        
                        <p><Text code>　植物　</Text><Text code>　蕨類　</Text><Text code>　自然　</Text><Text code>　觀察家　</Text></p>
                        <p style={{marginBottom: '5px'}}><Text>陽明山國家公園的蕨類總計近200種，包含臺灣所有蕨類的科別。由於受多變氣候的影響，區內蕨類的豐富度和歧</Text></p>        
                        <p style={{marginBottom: '5px'}}><Text>異度相當高，除低海拔的蕨類普遍可見外，因受東北季風影響而出現許多「北降型」蕨類，諸如稀子蕨、日本金星</Text></p>        
                        <p style={{marginBottom: '5px'}}><Text>蕨、韓氏烏毛蕨……等。園區內降雨量多、水源豐沛，加上受火山地形影響，形成許多小溪流、沼澤及湖泊，如此高 </Text></p>  
                        <p style={{marginBottom: '5px'}}><Text>潮溼的生態......more</Text></p>  
                         
                    </Col>
                </Row>
                <Divider />
                <Row>
                    <Col flex="300px">
                        <img width={300} src='https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/049/27/0010492758.jpg&v=4d1887e3&w=348&h=348'></img>
                        <div style={{margin:'10px 0px 5px 60px'}}>
                            <IconText icon={StarOutlined} text="2" key="list-vertical-star-o"/>　|　
                            <IconText icon={LikeOutlined} text="1" key="list-vertical-like-o"/>　|　
                            <IconText icon={MessageOutlined} text="0" key="list-vertical-message"/> 
                        </div>  
                    </Col>
                    <Col flex="auto"  style={{marginTop:22}}>
                        <Title level={4}><u>蕨影：大雪山國家森林遊樂區蕨類植物解說手冊</u></Title>
                        <p style={{marginBottom: '5px'}}><Text type="secondary">中文書 , 郭城孟、黃俊溢、高美芳 , 行政院農業委員會林務局 , 出版日期: 2010-10-01</Text></p>        
                        <p><Text code>　植物　</Text><Text code>　蕨類　</Text><Text code>　自然　</Text><Text code>　觀察家　</Text></p>
                        <p style={{marginBottom: '5px'}}><Text>本書介紹大雪山國家森林遊樂區各種賞蕨路線，並詳盡介紹區內各種蕨類植物，藉由本書可提供民眾對區內蕨類植 </Text></p>        
                        <p style={{marginBottom: '5px'}}><Text>物有進一步的認識，體驗大雪山不一樣......more</Text></p>   
                    </Col>
                </Row>
                <Divider />
                <Row>
                    <Col flex="300px">
                        <img width={300} src='https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/053/70/0010537033.jpg&v=4f4e019c&w=348&h=348'></img>
                        <div style={{margin:'10px 0px 5px 60px'}}>
                            <IconText icon={StarOutlined} text="1" key="list-vertical-star-o"/>　|　
                            <IconText icon={LikeOutlined} text="1" key="list-vertical-like-o"/>　|　
                            <IconText icon={MessageOutlined} text="0" key="list-vertical-message"/> 
                        </div>  
                    </Col>
                    <Col flex="auto"  style={{marginTop:22}}>
                        <Title level={4}><u>棲蘭山蕨類生態解說手冊</u></Title>
                        <p style={{marginBottom: '5px'}}><Text type="secondary">中文書 , 陳子英、林哲榮、李坤益 , 行政院國軍退除役輔導委員會 , 出版日期: 2011-12-01</Text></p>        
                        <p><Text code>　植物　</Text><Text code>　蕨類　</Text><Text code>　自然　</Text><Text code>　觀察家　</Text></p>
                        <p style={{marginBottom: '5px'}}><Text>本著內容介紹有關棲蘭山蕨類植物的演化史、觀察方法、生長環境等之描述及各類蕨類植物科別種類附圖解說</Text></p>        
                        <p style={{marginBottom: '5px'}}><Text>一、棲蘭山地區之地理環境......more</Text></p>   
                    </Col>
                </Row>
                <Divider />
                <Row>
                    <Col flex="300px">
                        <img width={300} src='https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/084/59/0010845959_bc_01.jpg&v=5e204967&w=655&h=609'></img>
                        <div style={{margin:'10px 0px 5px 60px'}}>
                            <IconText icon={StarOutlined} text="1" key="list-vertical-star-o"/>　|　
                            <IconText icon={LikeOutlined} text="1" key="list-vertical-like-o"/>　|　
                            <IconText icon={MessageOutlined} text="0" key="list-vertical-message"/> 
                        </div>  
                    </Col>
                    <Col flex="auto">
                        <Title level={4}><u>蕨類觀察圖鑑1：基礎常見篇 </u></Title>
                        <p style={{marginBottom: '5px'}}><Text type="secondary">中文書 , 郭城孟 , 遠流 , 出版日期: 2020-01-17</Text></p>        
                        <p><Text code>　植物　</Text><Text code>　蕨類　</Text><Text code>　自然　</Text><Text code>　觀察家　</Text></p>
                        <p style={{marginBottom: '5px'}}><Text>★有系統、有方法、有要訣，從基礎到進階，是認識台灣蕨類世界最易上手的入門圖鑑 ◎輕鬆認識台灣35科超 </Text></p>        
                        <p style={{marginBottom: '5px'}}><Text>過300種較常見到與造形特殊的蕨類 ◎條理清晰、內容詳盡的文字說明 ◎含括完整植株與重要局部特徵的生態</Text></p>   
                        <p style={{marginBottom: '5px'}}><Text>照片 ◎重點歸納的生態特徵圖例 ◎多樣化的查詢方法 ◎透過蕨類看到台灣獨特的植物生態地景 最親切易查</Text></p> 
                        <p style={{marginBottom: '5px'}}><Text>的賞蕨圖鑑台灣雖是蕞爾小島，卻是......more</Text></p> 
                    </Col>
                </Row>
                <Divider />
                <Row>
                    <Col flex="300px">
                        <img width={300} src='https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/084/59/0010845962_bc_01.jpg&v=5e204965&w=655&h=609'></img>
                        <div style={{margin:'10px 0px 5px 60px'}}>
                            <IconText icon={StarOutlined} text="1" key="list-vertical-star-o"/>　|　
                            <IconText icon={LikeOutlined} text="1" key="list-vertical-like-o"/>　|　
                            <IconText icon={MessageOutlined} text="0" key="list-vertical-message"/> 
                        </div>  
                    </Col>
                    <Col flex="auto">
                        <Title level={4}><u>蕨類觀察圖鑑2：進階珍稀篇  </u></Title>
                        <p style={{marginBottom: '5px'}}><Text type="secondary">中文書 , 郭城孟 , 遠流 , 出版日期: 2020-01-17</Text></p>        
                        <p><Text code>　植物　</Text><Text code>　蕨類　</Text><Text code>　自然　</Text><Text code>　觀察家　</Text></p>
                        <p style={{marginBottom: '5px'}}><Text>★有系統、有方法、有要訣，從基礎到進階，是認識台灣蕨類世界最易上手的入門圖鑑 ◎輕鬆認識台灣超過300種</Text></p>        
                        <p style={{marginBottom: '5px'}}><Text>蕨類，包括許多珍貴稀有甚至瀕危的物種 ◎條理清晰、內容詳盡的文字說明 ◎含括完整植株與重要局部特徵的生 </Text></p>   
                        <p style={{marginBottom: '5px'}}><Text>態照片 ◎重點歸納的生態特徵圖例 ◎多樣化的查詢方法　◎透過蕨類看到台灣獨特的植物生態地景　最親切易查</Text></p> 
                        <p style={{marginBottom: '5px'}}><Text>的賞蕨圖鑑台灣雖是蕞爾小島，卻是......more</Text></p> 
                    </Col>
                </Row>
                <div style={{margin:'12pt 8pt 12pt 5pt' , float:'right'}}><Pagination defaultCurrent={1} total={50} /></div>
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
