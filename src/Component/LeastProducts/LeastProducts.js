import React from 'react';
import "./LeastProducts.css"

import LeastProductsSlider from './LeastProductsSlider/LeastProductsSlider'

import { Container, Row, Col } from 'react-bootstrap'


class Mobiles extends React.Component {

    render(){

        return(
            <div style={{direction:this.props.language === 'en' ? 'ltr' : 'rtl',
            textAlign : this.props.language === "en" ? 'left' : "right"}} className="seller">
                <Container fluid={true}>
                    <Row className="header">
                        <Col style={{direction:this.props.language === 'en' ? 'ltr' : 'rtl',
                            textAlign : this.props.language === "en" ? 'left' : "right"}}>
                            <h2>منتجات اقل من ٩٩٩ ريال</h2>
                        </Col>
                    </Row>
                    <LeastProductsSlider  language={this.props.language}/>
                </Container>
            </div>
        )
    }
}

export default Mobiles;