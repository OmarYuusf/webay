import React from 'react';
import BestSellerSlider from './BestSellerSlider/BestSellerSlider'

// Styled-Component
import styled from 'styled-components'

import { Container, Row, Col } from 'react-bootstrap'

const Seller = styled.div`
        margin-top:40px;
        
        .header{
            div{
                text-align:right;
                background:#FFF;
                margin:0px 15px;
                padding:0px 8px;
                border-radius:4px;

                h2{
                    font-weight:900;
                    margin:25px 0px;

                    @media (max-width: 425px){ 
                        font-size:15px;
                    }
                }
            }
        }

`

class BestSeller extends React.Component {

    render(){

        return(
            <Seller style={{direction:this.props.language === 'en' ? 'ltr' : 'rtl',
            textAlign : this.props.language === "en" ? 'left' : "right"}}>
                <Container fluid={true}>
                    <Row className="header">
                        <Col>
                            <h2>الأفضل مبيعا</h2>
                        </Col>
                    </Row>
                    <BestSellerSlider  language={this.props.language}/>
                </Container>
            </Seller>
        )
    }
}

export default BestSeller;