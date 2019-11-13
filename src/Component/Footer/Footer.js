import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// FontAwsome Icons
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from  '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

// Styled-Component
import styled from 'styled-components'

import { Container, Row, Col } from 'react-bootstrap'

const Foot = styled.div`
    margin-top:120px;
    background:#f4f4f4;
    padding:50px 0px;

    h4{
        padding:35px 0px !important;
        font-size:17px;
        font-weight:800;
        margin:0px;

        @media (max-width: 600px){
            font-size:13px;
            padding:15px 0px !important;
            text-align:center;
        }
        
    }

    .row:first-of-type{
        border-top:1px solid rgba(0,0,0,.07);
        border-bottom:1px solid rgba(0,0,0,.07);
    }

    .conect-footer{
        display:flex;
        justify-content:space-around;

        > div{
            display:flex;
            align-items:center;

            span{
                padding:8px;
                margin:10px;
                color:#666;
            }

            p{
                margin:0px;
            }

            p:first-of-type{
                font-size:13px;
            }

            p:last-of-type{
                font-size:11px;
                color:#666
            }
        }
    }

    .row:nth-child(2){

        @media (max-width: 768px){ 
            display:none;
        }

        h5{
            font-size:14px;
            color:#000;
            margin:15px 0px;
            font-weight:800;
        }

        ul {
            padding:0px;


            li{
                padding:3px 0px;
                margin:3px 0px;
                list-style:none;

                a{
                    font-size:11px;
                    color:#666
                }
            }
        }
    }

    .row:last-of-type{
        display:none;
        @media (max-width: 768px){ 
            display:block;
        }

        h5{
            text-align:center;
            font-size:13px;
            font-weight:800;
            padding:15px 0px;
            margin:0px;
        }

        > div{

            > div{
                display:flex;
                justify-content:center;

                span{
                    margin:5px 10px;

                    a{
                        color:#666;
                    }
                }

                img{
                    width:100px;
                    margin:10px;
                }
            }
        }
    }
`

class Footer extends React.Component {
    render() {
        return(
            <Foot style={{direction:this.props.language === 'en' ? 'ltr' : 'rtl',
            textAlign : this.props.language === "en" ? 'left' : "right"}}>
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
            </Foot>
        )
    }
}

export default Footer;
