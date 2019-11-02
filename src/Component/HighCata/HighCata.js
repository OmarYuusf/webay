import React from 'react';

// Styled-Component
import styled from 'styled-components'

import { Container, Row, Col } from 'react-bootstrap'

const High = styled.div`
        margin-top:100px;
        
        @media (max-width: 600px){ 
            margin-top:80px;
        }

        @media (max-width: 425px){ 
            margin-top:30px;
        }

        .header-High{

            div{
                padding:0px;
                display:flex;
                justify-content:space-between;
                margin:20px 15px;
                border-bottom:1px solid rgba(0,0,0,.2);

                h5{
                    font-weight:800;

                    @media (max-width: 425px){ 
                        font-size:16px;
                    }   
                }

                p{
                    color: red;
                    @media (max-width: 768px){ 
                        font-size:10px;
                }   
                }
            }
        }

        .cata-High{
            margin-top:30px;

            @media (max-width: 768px){ 
                margin-top:0px;
            }   

            img{
                width:100% !important;
                height:100% !important;
            }

            > div{
                @media (max-width: 768px){ 
                    margin:15px 0px;
                }   
            }
        }
`

class HighCata extends React.Component {
    render(){
        return(
            <High style={{direction:this.props.language === 'en' ? 'ltr' : 'rtl',
            textAlign : this.props.language === "en" ? 'left' : "right"}}>
                <Container fluid={true}>
                    <Row className="header-High">
                        <Col>
                            <h5>المنتجات الاعلي تقييم</h5>
                            <p>خمس نجوم</p>
                        </Col>
                    </Row>
                    <Row className="cata-High">
                        <Col md={3} xs={6} sm={6}>
                            <img src="https://k.nooncdn.com/cms/pages/20190603/f0c8d487fcccd0503b335b826a99d9a0/ar_mb-cat-module-02.jpg" alt="products"/>
                        </Col>
                        <Col md={3} xs={6} sm={6}>
                            <img src="https://k.nooncdn.com/cms/pages/20190603/f0c8d487fcccd0503b335b826a99d9a0/ar_mb-cat-module-01.jpg" alt="products"/>
                        </Col>
                        <Col md={3} xs={6} sm={6}>
                            <img src="https://k.nooncdn.com/cms/pages/20190603/f0c8d487fcccd0503b335b826a99d9a0/ar_mb-cat-module-03.jpg" alt="products"/>
                        </Col>
                        <Col md={3} xs={6} sm={6}>
                            <img src="https://k.nooncdn.com/cms/pages/20190603/f0c8d487fcccd0503b335b826a99d9a0/ar_mb-cat-module-03.jpg" alt="products"/>
                        </Col>
                    </Row>
                    <Row className="cata-High">
                        <Col md={3} xs={6} sm={6}>
                            <img src="https://k.nooncdn.com/cms/pages/20190603/f0c8d487fcccd0503b335b826a99d9a0/ar_mb-cat-module-02.jpg" alt="products"/>
                        </Col>
                        <Col md={3} xs={6} sm={6}>
                            <img src="https://k.nooncdn.com/cms/pages/20190603/f0c8d487fcccd0503b335b826a99d9a0/ar_mb-cat-module-01.jpg" alt="products"/>
                        </Col>
                        <Col md={3} xs={6} sm={6}>
                            <img src="https://k.nooncdn.com/cms/pages/20190603/f0c8d487fcccd0503b335b826a99d9a0/ar_mb-cat-module-03.jpg" alt="products"/>
                        </Col>
                        <Col md={3} xs={6} sm={6}>
                            <img src="https://k.nooncdn.com/cms/pages/20190603/f0c8d487fcccd0503b335b826a99d9a0/ar_mb-cat-module-03.jpg" alt="products"/>
                        </Col>
                    </Row>
                </Container>
            </High>
        )
    }
}

export default HighCata;