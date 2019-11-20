import React from 'react';
import "./Banner.css"

// Styled-Component
import styled from 'styled-components';

import { Container, Row, Col } from 'react-bootstrap';

class Ban extends React.Component {
    render(){
        return(
            <div className="banner">
                <img src="https://k.nooncdn.com/cms/pages/20191104/7f8f2fca1bd43529bc2d3ab36078a7cb/ar_hero-03.png"/>
            </div>
        )
    }
}

export default Ban;