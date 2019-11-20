import React from 'react';
import "./HighCata.css"

import { Container, Row, Col } from 'react-bootstrap'


class HighCata extends React.Component {
    render(){
        return(
            <div style={{direction:this.props.language === 'en' ? 'ltr' : 'rtl',
            textAlign : this.props.language === "en" ? 'left' : "right"}} className="high">
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
            </div>
        )
    }
}

export default HighCata;