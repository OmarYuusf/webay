import React from 'react';
import ElectronicsSlider from './ElectronicsSlider/ElectronicsSlider'





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
            <Seller style={{direction:this.props.language === 'en' ? 'ltr' : 'rtl',
            textAlign : this.props.language === "en" ? 'left' : "right"}}>
                <Container fluid={true}>
                    <Row className="header">
                        <Col>

                            <h2>منتجات اقل من ٤٩٩ ريال</h2>
                        </Col>
                    </Row>
                    <ElectronicsSlider  language={this.props.language}/>
                </Container>
            </Seller>
        )
    }
}

export default Electronics;