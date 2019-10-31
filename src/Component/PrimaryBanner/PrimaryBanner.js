import React from 'react';

// Styled-Component
import styled from 'styled-components';

import { Container, Row, Col } from 'react-bootstrap';

const Banner = styled.div`
    margin-top:40px;

    .row{
        
        > div{
            padding:0px;
            img{
                width:100%;
            }
        }
    }
`

class PrimaryBanner extends React.Component {
    render(){
        return(
            <Banner>
                <Container fluid={false}>
                    <Row>
                        <Col>
                            <img src="https://k.nooncdn.com/cms/pages/20191027/f973cc63b56090f3c915c86759648522/en_banner-01.gif"/>
                        </Col>
                    </Row>
                </Container>
            </Banner>
        )
    }
}

export default PrimaryBanner;