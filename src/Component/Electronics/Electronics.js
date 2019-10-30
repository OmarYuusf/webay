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
        margin-top:100px;
        
        .header{
            div{
                display:flex;
                justify-content:space-between;
                background:#FFF;
                margin:0px 15px;
                padding:0px 8px;
                border-radius:4px;

                p,h5{
                    margin:25px 0px;
                }

                h5{
                    font-weight:800;

                }

                p{
                    color:#555;
                    font-size:14px;
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
                            <p>جميع الفئات</p>
                            <h5>الألكترونيات</h5>
                        </Col>
                    </Row>
                    <ElectronicsSlider />
                </Container>
            </Seller>
        )
    }
}

export default Electronics;