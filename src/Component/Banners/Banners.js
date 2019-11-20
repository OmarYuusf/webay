import React from 'react';
import "./Banners.css"

import { Container, Row, Col } from 'react-bootstrap';

class Banners extends React.Component {
    render(){
        return(
            <div className="banners">
                <Container fluid={true}>
                    <Row>
                        <Col>
                            <img src="https://k.nooncdn.com/cms/pages/20191025/ec000906164415019cbcf0fb54f96b4a/en_hp-banner-03.gif" alt="Banners"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <img src="https://k.nooncdn.com/cms/pages/20191027/f973cc63b56090f3c915c86759648522/en_banner-01.gif" alt="Banners"/>
                        </Col>
                        <Col md={6}>
                            <img src="https://k.nooncdn.com/cms/pages/20191027/6d05dd25406041314ad6b56487c4bd07/en_hp-banner_01.gif" alt="Banners"/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Banners;