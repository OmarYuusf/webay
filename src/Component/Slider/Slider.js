import React from 'react';

// Styled-Component
import styled from 'styled-components'

// Slider Import
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';

const Slide = styled.div`
  margin :50px 15px;

  .awssld__wrapper{
    height:65vh ;
    .awssld__content{
      img{
          object-fit:cover !important;

      }
    }
  }

  .awssld__bullets button{
    border-radius:0px !important;
    height:3px !important;
    background:#CCC;
  }

  .awssld__bullets--active{
    background:#03A9F4 !important;
    border:0px !important;
  }
`



const slider = (
  <AwesomeSlider cssModule={AwesomeSliderStyles}>
    <div data-src="https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?cs=srgb&dl=contemporary-dark-data-669996.jpg&fm=jpg"/>
    <div data-src="https://images.pexels.com/photos/1901388/pexels-photo-1901388.jpeg?cs=srgb&dl=blur-communication-connection-1901388.jpg&fm=jpg"/>
    <div data-src="https://images.pexels.com/photos/1128240/pexels-photo-1128240.jpeg?cs=srgb&dl=access-blur-connection-1128240.jpg&fm=jpg"/>
    <div data-src="https://images.pexels.com/photos/1128240/pexels-photo-1128240.jpeg?cs=srgb&dl=access-blur-connection-1128240.jpg&fm=jpg"/>
  </AwesomeSlider>
);



class Slider extends React.Component {

  render() {
    return(
      <Slide>
         {slider}
      </Slide>
    )
  }
}

export default Slider;