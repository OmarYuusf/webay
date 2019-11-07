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

      .slick-next{
        right:0px;
      }

      .slick-prev{
        left:0px;
      }

      .slick-arrow{
        z-index:9999;

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
        <Container fluid={true}>
          <Slider {...settings} className="Hello">
            <div>
              <img src="https://k.nooncdn.com/cms/pages/20191030/2f4feb7fa928506673870a787265349b/ar_HP-01.png" alt="slider"/>
            </div>
            <div>
              <img src="https://k.nooncdn.com/cms/pages/20191031/1352b6cf2473d278b38f0787bb37d77e/ar_slider-03.gif" alt="slider"/>
            </div>
            <div>
              <img src="https://k.nooncdn.com/cms/pages/20191031/1352b6cf2473d278b38f0787bb37d77e/ar_slider-06.gif" alt="slider"/>
            </div>
            <div>
              <img src="https://k.nooncdn.com/cms/pages/20191101/ce4a911959bdb67d1ac41cbb013a7401/ar_slider-03.gif" alt="slider"/>
            </div>
          </Slider>
        </Container>
      </Slide>
    );
  }
}
