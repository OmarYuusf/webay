import React from 'react';
import "./Header.css"

import { Accordion, Card, Container, Row } from 'react-bootstrap'


class Header extends React.Component {
    render() {
        return(
            <div style={{direction:this.props.language === 'en' ? "ltr" : "rtl",
                        textAlign:this.props.language === 'en' ? "left" : "right"}} className="head">
                
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
                                    <li><a href="/#">نوع القسم</a></li>
                                    <li><a href="/#">نوع القسم</a></li>
                                    <li><a href="/#">نوع القسم</a></li>
                                    <li><a href="/#">نوع القسم</a></li>
                                    <li><a href="/#">نوع القسم</a></li>
                                    <li><a href="/#">نوع القسم</a></li>
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
                                    <li><a href="/#">نوع القسم</a></li>
                                    <li><a href="/#">نوع القسم</a></li>
                                    <li><a href="/#">نوع القسم</a></li>
                                    <li><a href="/#">نوع القسم</a></li>
                                    <li><a href="/#">نوع القسم</a></li>
                                    <li><a href="/#">نوع القسم</a></li>
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
                                    <li><a href="/#">نوع القسم</a></li>
                                    <li><a href="/#">نوع القسم</a></li>
                                    <li><a href="/#">نوع القسم</a></li>
                                    <li><a href="/#">نوع القسم</a></li>
                                    <li><a href="/#">نوع القسم</a></li>
                                    <li><a href="/#">نوع القسم</a></li>
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
                                    <li><a href="/#">نوع القسم</a></li>
                                    <li><a href="/#">نوع القسم</a></li>
                                    <li><a href="/#">نوع القسم</a></li>
                                    <li><a href="/#">نوع القسم</a></li>
                                    <li><a href="/#">نوع القسم</a></li>
                                    <li><a href="/#">نوع القسم</a></li>
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
                                    <li><a href="/#">نوع القسم</a></li>
                                    <li><a href="/#">نوع القسم</a></li>
                                    <li><a href="/#">نوع القسم</a></li>
                                    <li><a href="/#">نوع القسم</a></li>
                                    <li><a href="/#">نوع القسم</a></li>
                                    <li><a href="/#">نوع القسم</a></li>
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
                                    <li><a href="/#">نوع القسم</a></li>
                                    <li><a href="/#">نوع القسم</a></li>
                                    <li><a href="/#">نوع القسم</a></li>
                                    <li><a href="/#">نوع القسم</a></li>
                                    <li><a href="/#">نوع القسم</a></li>
                                    <li><a href="/#">نوع القسم</a></li>
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
            </div>
        )
    }
}

export default Header;