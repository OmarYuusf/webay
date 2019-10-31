import React from 'react';
import BestProductsSlider from './BestProductsSlider/BestProductsSlider'

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
                }
            }
        }

`

class BestProducts extends React.Component {

    render(){

        return(
            <Seller>
                <Container fluid={true}>
                    <Row className="header">
                        <Col>
                            <h2>احدث المنتجات</h2>
                        </Col>
                    </Row>
                    <BestProductsSlider />
                </Container>
            </Seller>
        )
    }
}

export default BestProducts;