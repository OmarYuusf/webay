import React from 'react';
import "./BestSeller.css"
import BestSellerSlider from './BestSellerSlider/BestSellerSlider'


import { Container, Row, Col } from 'react-bootstrap'


class BestSeller extends React.Component {

    render(){

        return(
            <div style={{direction:this.props.language === 'en' ? 'ltr' : 'rtl',
            textAlign : this.props.language === "en" ? 'left' : "right"}} className="best-seller">
                <Container fluid={true}>
                    <Row className="header">
                        <Col style={{direction:this.props.language === 'en' ? 'ltr' : 'rtl',
                            textAlign : this.props.language === "en" ? 'left' : "right"}}>
                            <h2>الأفضل مبيعا</h2>
                        </Col>
                    </Row>
                    <BestSellerSlider  language={this.props.language}/>
                </Container>
            </div>
        )
    }
}

export default BestSeller;