import React from 'react';

// Styled-Component
import styled from 'styled-components'

import { Container, Row, Col } from 'react-bootstrap'

const High = styled.div`
        margin-top:100px;

        .header-High{

            div{
                padding:0px;
                display:flex;
                justify-content:space-between;
                margin:20px 15px;
                border-bottom:1px solid rgba(0,0,0,.2);

                h5{
                    font-weight:800;
                }

                p{
                    color: red
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
            <High>
                <Container fluid={true}>
                    <Row className="header-High">
                        <Col>
                            <p>خمس نجوم</p>
                            <h5>المنتجات الاعلي تقييم</h5>
                        </Col>
                    </Row>
                    <Row className="cata-High">
                        <Col md={3} xs={6} sm={6}>
                            <img src="https://k.nooncdn.com/cms/pages/20190603/f0c8d487fcccd0503b335b826a99d9a0/ar_mb-cat-module-02.jpg" />
                        </Col>
                        <Col md={3} xs={6} sm={6}>
                            <img src="https://k.nooncdn.com/cms/pages/20190603/f0c8d487fcccd0503b335b826a99d9a0/ar_mb-cat-module-01.jpg" />
                        </Col>
                        <Col md={3} xs={6} sm={6}>
                            <img src="https://k.nooncdn.com/cms/pages/20190603/f0c8d487fcccd0503b335b826a99d9a0/ar_mb-cat-module-03.jpg" />
                        </Col>
                        <Col md={3} xs={6} sm={6}>
                            <img src="https://k.nooncdn.com/cms/pages/20190603/f0c8d487fcccd0503b335b826a99d9a0/ar_mb-cat-module-03.jpg" />
                        </Col>
                    </Row>
                    <Row className="cata-High">
                        <Col md={3} xs={6} sm={6}>
                            <img src="https://k.nooncdn.com/cms/pages/20190603/f0c8d487fcccd0503b335b826a99d9a0/ar_mb-cat-module-02.jpg" />
                        </Col>
                        <Col md={3} xs={6} sm={6}>
                            <img src="https://k.nooncdn.com/cms/pages/20190603/f0c8d487fcccd0503b335b826a99d9a0/ar_mb-cat-module-01.jpg" />
                        </Col>
                        <Col md={3} xs={6} sm={6}>
                            <img src="https://k.nooncdn.com/cms/pages/20190603/f0c8d487fcccd0503b335b826a99d9a0/ar_mb-cat-module-03.jpg" />
                        </Col>
                        <Col md={3} xs={6} sm={6}>
                            <img src="https://k.nooncdn.com/cms/pages/20190603/f0c8d487fcccd0503b335b826a99d9a0/ar_mb-cat-module-03.jpg" />
                        </Col>
                    </Row>
                </Container>
            </High>
        )
    }
}

export default HighCata;