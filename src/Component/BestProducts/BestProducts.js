import React from 'react';
import BestProductsSlider from './BestProductsSlider/BestProductsSlider'
import "./BestProducts.css"

import { Container, Row, Col } from 'react-bootstrap'

class BestProducts extends React.Component {

    render(){

        return(
            <div style={{direction:this.props.language === 'en' ? 'ltr' : 'rtl',
            textAlign : this.props.language === "en" ? 'left' : "right"}} className="seller">
                <Container fluid={true}>
                    <Row className="header">
                        <Col style={{direction:this.props.language === 'en' ? 'ltr' : 'rtl',
                            textAlign : this.props.language === "en" ? 'left' : "right"}}>
                            <h2>احدث المنتجات</h2>
                        </Col>
                    </Row>
                    <BestProductsSlider language={this.props.language}/>
                </Container>
            </div>
        )
    }
}

export default BestProducts;