import React from 'react';
import "./PrimaryBanner.css"

import { Container, Row, Col } from 'react-bootstrap';


class PrimaryBanner extends React.Component {
    render(){
        return(
            <div className="banner">
                <Container fluid={true}>
                    <Row>
                        <Col>
                            <img src="https://k.nooncdn.com/cms/pages/20191027/f973cc63b56090f3c915c86759648522/en_banner-01.gif"/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default PrimaryBanner;