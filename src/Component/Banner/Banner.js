import React from 'react';

// Styled-Component
import styled from 'styled-components';

import { Container, Row, Col } from 'react-bootstrap';

const BannerInCenter = styled.div`
    margin-top:80px;
            img{
                width:100%;
                padding:0px 15px;
            }
            
    .row:last-of-type{
        
    }
`

class Ban extends React.Component {
    render(){
        return(
            <BannerInCenter>
                <img src="https://k.nooncdn.com/cms/pages/20191104/7f8f2fca1bd43529bc2d3ab36078a7cb/ar_hero-03.png"/>
            </BannerInCenter>
        )
    }
}

export default Ban;