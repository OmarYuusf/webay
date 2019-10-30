import React from 'react';

// Styled-Component
import styled from 'styled-components';

import { Container, Row, Col } from 'react-bootstrap';

const Banner = styled.div`
    margin-top:150px;

    .row{
        
        > div{
            
            img{
                width:100%;

            }
        }
    }

    .row:last-of-type{
        margin-top:20px;
    }
`

class Banners extends React.Component {
    render(){
        return(
            <Banner>
                <Container fluid={true}>
                    <Row>
                        <Col>
                            <img src="https://k.nooncdn.com/cms/pages/20191025/ec000906164415019cbcf0fb54f96b4a/en_hp-banner-03.gif"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <img src="https://k.nooncdn.com/cms/pages/20191027/f973cc63b56090f3c915c86759648522/en_banner-01.gif"/>
                        </Col>
                        <Col md={6}>
                            <img src="https://k.nooncdn.com/cms/pages/20191027/6d05dd25406041314ad6b56487c4bd07/en_hp-banner_01.gif"/>
                        </Col>
                    </Row>
                </Container>
            </Banner>
        )
    }
}

export default Banners;