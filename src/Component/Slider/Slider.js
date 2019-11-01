import React, { Component } from "react";

// Styled-Component
import styled from 'styled-components'

import { Container } from 'react-bootstrap';

import Slider from "react-slick";

const Slide = styled.div`
      margin:15px 0px;

      @media (max-width: 600px){ 
          margin:0px 0px !important;
      }

      .slick-arrow{
        
        &::before{
          color:#000;
        }

        @media (max-width: 600px){ 
            display:none !important;
        }
      }

      img{
        width:100%;
      }
`

export default class AdaptiveHeight extends Component {
  render() {
    var settings = {
      className: "",
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 5000
    };
    return (
      <Slide>
        <Container>
          <Slider {...settings} className="Hello">
            <div>
              <img src="https://k.nooncdn.com/cms/pages/20191025/ec000906164415019cbcf0fb54f96b4a/en_hp-banner-03.gif" alt="slider"/>
            </div>
            <div>
              <img src="https://k.nooncdn.com/cms/pages/20191027/f973cc63b56090f3c915c86759648522/en_banner-01.gif" alt="slider"/>
            </div>
            <div>
              <img src="https://k.nooncdn.com/cms/pages/20191025/ec000906164415019cbcf0fb54f96b4a/en_hp-banner-03.gif" alt="slider"/>
            </div>
            <div>
              <img src="https://k.nooncdn.com/cms/pages/20191027/f973cc63b56090f3c915c86759648522/en_banner-01.gif" alt="slider"/>
            </div>
          </Slider>
        </Container>
      </Slide>
    );
  }
}
