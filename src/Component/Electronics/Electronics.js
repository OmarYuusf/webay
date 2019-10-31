import React from 'react';
import ElectronicsSlider from './ElectronicsSlider/ElectronicsSlider'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// react-slick Import
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

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

class Electronics extends React.Component {

    render(){

        return(
            <Seller>
                <Container fluid={true}>
                    <Row className="header">
                        <Col>

                            <h2>الألكترونيات</h2>
                        </Col>
                    </Row>
                    <ElectronicsSlider />
                </Container>
            </Seller>
        )
    }
}

export default Electronics;