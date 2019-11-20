import React from 'react';
import "./Footer.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// FontAwsome Icons
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from  '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import { Container, Row, Col } from 'react-bootstrap'


class Footer extends React.Component {
    render() {
        return(
            <div style={{direction:this.props.language === 'en' ? 'ltr' : 'rtl',
            textAlign : this.props.language === "en" ? 'left' : "right"}} className="foot">
                <Container>
                    <Row className="header">
                        <Col xs={12} md={6}>
                            <h4>احنا دايما موجودين في خدمتك</h4>
                        </Col>
                        <Col className="conect-footer" xs={12} md={6}>
                            <div>
                                <span>
                                    <FontAwesomeIcon size="sm" icon={faPhone}></FontAwesomeIcon>
                                </span>
                                <div>
                                    <p>الدعم علي التليفون</p>
                                    <p>010215548858</p>
                                </div>
                            </div>
                            <div>
                                <span>
                                    <FontAwesomeIcon size="sm" icon={faEnvelope}></FontAwesomeIcon>
                                </span>
                                <div>
                                    <p>الدعم علي التليفون</p>
                                    <p>010215548858</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h5>الإلكترونيات</h5>
                            <ul>
                                <li><a href="/#">اجهزة التابلت</a></li>
                                <li><a href="/#">اجهزة التابلت</a></li>
                                <li><a href="/#">اجهزة التابلت</a></li>
                                <li><a href="/#">اجهزة التابلت</a></li>
                                <li><a href="/#">اجهزة التابلت</a></li>
                                <li><a href="/#">اجهزة التابلت</a></li>
                                <li><a href="/#">اجهزة التابلت</a></li>
                            </ul>
                        </Col>
                        <Col>
                            <h5>الأزياء</h5>
                            <ul>
                                <li><a href="/#">اجهزة التابلت</a></li>
                                <li><a href="/#">اجهزة التابلت</a></li>
                                <li><a href="/#">اجهزة التابلت</a></li>
                                <li><a href="/#">اجهزة التابلت</a></li>
                                <li><a href="/#">اجهزة التابلت</a></li>
                                <li><a href="/#">اجهزة التابلت</a></li>
                                <li><a href="/#">اجهزة التابلت</a></li>
                            </ul>
                        </Col>
                        <Col>
                            <h5>المطبخ والأجهزة المنزلية</h5>
                            <ul>
                                <li><a href="/#">اجهزة التابلت</a></li>
                                <li><a href="/#">اجهزة التابلت</a></li>
                                <li><a href="/#">اجهزة التابلت</a></li>
                                <li><a href="/#">اجهزة التابلت</a></li>
                                <li><a href="/#">اجهزة التابلت</a></li>
                                <li><a href="/#">اجهزة التابلت</a></li>
                                <li><a href="/#">اجهزة التابلت</a></li>
                            </ul>
                        </Col>
                        <Col>
                            <h5>الجمال</h5>
                            <ul>
                                <li><a href="/#">اجهزة التابلت</a></li>
                                <li><a href="/#">اجهزة التابلت</a></li>
                                <li><a href="/#">اجهزة التابلت</a></li>
                                <li><a href="/#">اجهزة التابلت</a></li>
                                <li><a href="/#">اجهزة التابلت</a></li>
                                <li><a href="/#">اجهزة التابلت</a></li>
                                <li><a href="/#">اجهزة التابلت</a></li>
                            </ul>
                        </Col>
                        <Col>
                            <h5>الأطفال، البيبي والألعاب</h5>
                            <ul>
                                <li><a href="/#">اجهزة التابلت</a></li>
                                <li><a href="/#">اجهزة التابلت</a></li>
                                <li><a href="/#">اجهزة التابلت</a></li>
                                <li><a href="/#">اجهزة التابلت</a></li>
                                <li><a href="/#">اجهزة التابلت</a></li>
                                <li><a href="/#">اجهزة التابلت</a></li>
                                <li><a href="/#">اجهزة التابلت</a></li>
                            </ul>
                        </Col>
                        <Col>
                            <h5>أفضل الماركات</h5>
                            <ul>
                                <li><a href="/#">اجهزة التابلت</a></li>
                                <li><a href="/#">اجهزة التابلت</a></li>
                                <li><a href="/#">اجهزة التابلت</a></li>
                                <li><a href="/#">اجهزة التابلت</a></li>
                                <li><a href="/#">اجهزة التابلت</a></li>
                                <li><a href="/#">اجهزة التابلت</a></li>
                                <li><a href="/#">اجهزة التابلت</a></li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <h5>تواصل معانا عبر</h5>
                            <div>
                                <span>
                                    <a href="/#"><FontAwesomeIcon size="sm" icon={faFacebook}></FontAwesomeIcon></a>
                                </span>
                                <span>
                                    <a href="/#"><FontAwesomeIcon size="sm" icon={faTwitter}></FontAwesomeIcon></a>
                                </span>
                                <span>
                                    <a href="/#"><FontAwesomeIcon size="sm" icon={faInstagram}></FontAwesomeIcon></a>
                                </span>
                            </div>
                        </Col>
                        <Col xs={12}>
                            <h5>تواصل معانا عبر</h5>
                            <div>
                                <img src="https://www.google.com/intl/en/cast/about/static/images/download-badges/android-download.png" alt="Contact"/>
                                <img src="https://www.google.com/intl/en/cast/about/static/images/download-badges/ios-download.svg" alt="Contact"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Footer;
