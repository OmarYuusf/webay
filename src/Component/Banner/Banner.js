import React from 'react';

// Styled-Component
import styled from 'styled-components';

import { Container, Row, Col } from 'react-bootstrap';

const BannerInCenter = styled.div`
    margin-top:80px;

            img{
                width:100%;
            }

    .row:last-of-type{
        
    }
`

class Ban extends React.Component {
    render(){
        return(
            <BannerInCenter>
                <Container fluid={true}>
                    <Row>
                        <Col>
                            <img src="https://k.nooncdn.com/cms/pages/20191025/ec000906164415019cbcf0fb54f96b4a/en_hp-banner-03.gif"/>
                        </Col>
                    </Row>
                </Container>
            </BannerInCenter>
        )
    }
}

export default Ban;