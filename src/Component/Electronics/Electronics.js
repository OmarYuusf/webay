import React from 'react';
import "./Electronics.css"

import ElectronicsSlider from './ElectronicsSlider/ElectronicsSlider'

// Styled-Component
import styled from 'styled-components'

import { Container, Row, Col } from 'react-bootstrap'

const Seller = styled.div`

`

class Electronics extends React.Component {

    render(){

        return(
            <div style={{direction:this.props.language === 'en' ? 'ltr' : 'rtl',
            textAlign : this.props.language === "en" ? 'left' : "right"}} className="seller">
                <Container fluid={true}>
                    <Row className="header">
                        <Col style={{direction:this.props.language === 'en' ? 'ltr' : 'rtl',
                            textAlign : this.props.language === "en" ? 'left' : "right"}}>

                            <h2>منتجات اقل من ٤٩٩ ريال</h2>
                        </Col>
                    </Row>
                    <ElectronicsSlider  language={this.props.language}/>
                </Container>
            </div>
        )
    }
}

export default Electronics;