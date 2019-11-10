import React from 'react';

// Styled-Component
import styled from 'styled-components'

import { Accordion, Card, Container, Row } from 'react-bootstrap'

const Head = styled.div`
    display:flex;

    .sideBar{
        width:15%;

        h3{
            margin:30px 5px;
            font-weight:800;
            font-size:19px;
        }

        .accordion{
            margin:15px;
            background:transparent;

            

            .card{
                background:transparent;
                box-shadow:0px 0px 0px;
                border:1px solid rgba(0,0,0,.1);
                border-radius:10px;
                margin:10px 0px;

                .card-header{
                    box-shadow:0px;
                    padding:5px 8px;
                    font-size:14px;
                }

                .collapsing {
                    -webkit-transition: none;
                    transition: none;
                    display: none;
                }

                .collapse{
                    background:transparent;
                    
                    .card-body{
                        padding:0px;

                        ul{
                            margin:0px;
                            padding:5px 8px;
                            list-style:none;
                            
                            li{
                                padding:2px 0px;
                                a{
                                    font-size:12px;
                                    color:#777;

                                    &:hover{
                                        color:#03A9F4;

                                    }
                                }
                            }
                        }
                    }
                }

                .collapse.show{
                    background:#f1f1f1;
                }
            }
        }
    }

    .head{
        width:85%;

        .slider{
            width:100%;
            margin:15px;

            img{
                width:100%;
            }
        }

        .products{
            display:flex;
            margin:15px;

            > div {
                margin:5px;

                img{
                    width:100%;
                }
            }
        }
    }

`

class Header extends React.Component {
    render() {
        return(
            <Head style={{direction:this.props.language === 'en' ? "ltr" : "rtl",
                        textAlign:this.props.language === 'en' ? "left" : "right"}}>
                
                <div className="sideBar">
                    <h3>الاقسام المميزة</h3>
                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                اسم القسم
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <ul>
                                    <li><a href="#">نوع القسم</a></li>
                                    <li><a href="#">نوع القسم</a></li>
                                    <li><a href="#">نوع القسم</a></li>
                                    <li><a href="#">نوع القسم</a></li>
                                    <li><a href="#">نوع القسم</a></li>
                                    <li><a href="#">نوع القسم</a></li>
                                </ul>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                            اسم القسم
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <ul>
                                    <li><a href="#">نوع القسم</a></li>
                                    <li><a href="#">نوع القسم</a></li>
                                    <li><a href="#">نوع القسم</a></li>
                                    <li><a href="#">نوع القسم</a></li>
                                    <li><a href="#">نوع القسم</a></li>
                                    <li><a href="#">نوع القسم</a></li>
                                </ul>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="2">
                            اسم القسم
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                <ul>
                                    <li><a href="#">نوع القسم</a></li>
                                    <li><a href="#">نوع القسم</a></li>
                                    <li><a href="#">نوع القسم</a></li>
                                    <li><a href="#">نوع القسم</a></li>
                                    <li><a href="#">نوع القسم</a></li>
                                    <li><a href="#">نوع القسم</a></li>
                                </ul>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="3">
                            اسم القسم
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="3">
                            <Card.Body>
                                <ul>
                                    <li><a href="#">نوع القسم</a></li>
                                    <li><a href="#">نوع القسم</a></li>
                                    <li><a href="#">نوع القسم</a></li>
                                    <li><a href="#">نوع القسم</a></li>
                                    <li><a href="#">نوع القسم</a></li>
                                    <li><a href="#">نوع القسم</a></li>
                                </ul>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="4">
                            اسم القسم
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="4">
                            <Card.Body>
                                <ul>
                                    <li><a href="#">نوع القسم</a></li>
                                    <li><a href="#">نوع القسم</a></li>
                                    <li><a href="#">نوع القسم</a></li>
                                    <li><a href="#">نوع القسم</a></li>
                                    <li><a href="#">نوع القسم</a></li>
                                    <li><a href="#">نوع القسم</a></li>
                                </ul>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="5">
                            اسم القسم
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="5">
                            <Card.Body>
                                <ul>
                                    <li><a href="#">نوع القسم</a></li>
                                    <li><a href="#">نوع القسم</a></li>
                                    <li><a href="#">نوع القسم</a></li>
                                    <li><a href="#">نوع القسم</a></li>
                                    <li><a href="#">نوع القسم</a></li>
                                    <li><a href="#">نوع القسم</a></li>
                                </ul>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
                <div className="head">
                    <Container fluid={true}>
                        <Row>
                            <div className="slider">
                                <img src="https://k.nooncdn.com/cms/pages/20191108/e8c6709b1ea3f591782c09f1a230fa96/en_slider-01.png" />
                            </div>
                            <div className="products">
                                <div className="product">
                                    <img src="https://k.nooncdn.com/cms/pages/20190603/f0c8d487fcccd0503b335b826a99d9a0/ar_mb-cat-module-03.jpg"/>
                                </div>
                                <div className="product">
                                    <img src="https://k.nooncdn.com/cms/pages/20190603/f0c8d487fcccd0503b335b826a99d9a0/ar_mb-cat-module-02.jpg"/>
                                </div>
                                <div className="product">
                                    <img src="https://k.nooncdn.com/cms/pages/20190603/f0c8d487fcccd0503b335b826a99d9a0/ar_mb-cat-module-01.jpg"/>
                                </div>
                                <div className="product">
                                    <img src="https://k.nooncdn.com/cms/pages/20190603/f0c8d487fcccd0503b335b826a99d9a0/ar_mb-cat-module-03.jpg"/>
                                </div>
                            </div>
                        </Row>
                    </Container>
                </div>
            </Head>
        )
    }
}

export default Header;