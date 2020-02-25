import React from "react";
import "./BestProductsSlider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
// react-slick Import
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Styled-Component
import styled from "styled-components";

import { Container, Row, Col } from "react-bootstrap";

const SecSlider = styled.div``;

class BestProductsSlider extends React.Component {
  render() {
    const ArrowLeft = props => {
      const { onClick } = props;

      return (
        <button
          type="button"
          // {...props}
          onClick={onClick}
          className={(props.next, "newArrowNext newArrows")}
        >
          <FontAwesomeIcon icon={faArrowLeft}/>
        </button>
      );
    };
    const ArrowRight = props => {
      const { onClick } = props;

      return (
        <button
          type="button"
          // {...props}
          onClick={onClick}
          className={(props.next, "newArrowPrev newArrows")}
        >
          <FontAwesomeIcon icon={faArrowRight} size="md"/>
        </button>
      );
    };
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 2,
      initialSlide: 0,
      prevArrow: <ArrowLeft />,
      nextArrow: <ArrowRight />,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    };
    return (
      <div className="sec-slider">
        <Container fluid={true}>
          <Row className="cata">
            <Col
              style={{
                direction:
                  this.props.language === "en"
                    ? "ltr !important"
                    : "rtl !important",
                textAlign: this.props.language === "en" ? "left " : "right "
              }}
            >
              <Slider {...settings}>
                <div>
                  <div className="header">
                    <img
                      src="https://k.nooncdn.com/t_desktop-thumbnail-v2/v1541138794/N18810846A_1.jpg"
                      alt="product"
                    />
                  </div>
                  <div className="information">
                    <div className="head">
                      <p>أبل</p>
                      <p>ايفون 11 برو ماكس</p>
                      <p>
                        {" "}
                        بخاصية فيس تايم لون فضي سعة 512 جيجابايت يدعم تقنية 4G
                        LTE - بالمواصفات الدولية
                      </p>
                    </div>
                    <div className="center">
                      <p className="real-price">20.000 جنيه</p>
                      <p className="fake-price">23.000 جنيه</p>
                    </div>
                    <div className="footer">
                      <span className="discount">خصم %15</span>
                      <button>عروض</button>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="header">
                    <img
                      src="https://k.nooncdn.com/t_desktop-thumbnail-v2/v1541138794/N18810846A_1.jpg"
                      alt="product"
                    />
                  </div>
                  <div className="information">
                    <div className="head">
                      <p>أبل</p>
                      <p>ايفون 11 برو ماكس</p>
                      <p>
                        {" "}
                        بخاصية فيس تايم لون فضي سعة 512 جيجابايت يدعم تقنية 4G
                        LTE - بالمواصفات الدولية
                      </p>
                    </div>
                    <div className="center">
                      <p className="real-price">20.000 جنيه</p>
                      <p className="fake-price">23.000 جنيه</p>
                    </div>
                    <div className="footer">
                      <span className="discount">خصم %15</span>
                      <button>عروض</button>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="header">
                    <img
                      src="https://k.nooncdn.com/t_desktop-thumbnail-v2/v1541138794/N18810846A_1.jpg"
                      alt="product"
                    />
                  </div>
                  <div className="information">
                    <div className="head">
                      <p>أبل</p>
                      <p>ايفون 11 برو ماكس</p>
                      <p>
                        {" "}
                        بخاصية فيس تايم لون فضي سعة 512 جيجابايت يدعم تقنية 4G
                        LTE - بالمواصفات الدولية
                      </p>
                    </div>
                    <div className="center">
                      <p className="real-price">20.000 جنيه</p>
                      <p className="fake-price">23.000 جنيه</p>
                    </div>
                    <div className="footer">
                      <span className="discount">خصم %15</span>
                      <button>عروض</button>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="header">
                    <img
                      src="https://k.nooncdn.com/t_desktop-thumbnail-v2/v1541138794/N18810846A_1.jpg"
                      alt="product"
                    />
                  </div>
                  <div className="information">
                    <div className="head">
                      <p>أبل</p>
                      <p>ايفون 11 برو ماكس</p>
                      <p>
                        {" "}
                        بخاصية فيس تايم لون فضي سعة 512 جيجابايت يدعم تقنية 4G
                        LTE - بالمواصفات الدولية
                      </p>
                    </div>
                    <div className="center">
                      <p className="real-price">20.000 جنيه</p>
                      <p className="fake-price">23.000 جنيه</p>
                    </div>
                    <div className="footer">
                      <span className="discount">خصم %15</span>
                      <button>عروض</button>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="header">
                    <img
                      src="https://k.nooncdn.com/t_desktop-thumbnail-v2/v1541138794/N18810846A_1.jpg"
                      alt="product"
                    />
                  </div>
                  <div className="information">
                    <div className="head">
                      <p>أبل</p>
                      <p>ايفون 11 برو ماكس</p>
                      <p>
                        {" "}
                        بخاصية فيس تايم لون فضي سعة 512 جيجابايت يدعم تقنية 4G
                        LTE - بالمواصفات الدولية
                      </p>
                    </div>
                    <div className="center">
                      <p className="real-price">20.000 جنيه</p>
                      <p className="fake-price">23.000 جنيه</p>
                    </div>
                    <div className="footer">
                      <span className="discount">خصم %15</span>
                      <button>عروض</button>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="header">
                    <img
                      src="https://k.nooncdn.com/t_desktop-thumbnail-v2/v1541138794/N18810846A_1.jpg"
                      alt="product"
                    />
                  </div>
                  <div className="information">
                    <div className="head">
                      <p>أبل</p>
                      <p>ايفون 11 برو ماكس</p>
                      <p>
                        {" "}
                        بخاصية فيس تايم لون فضي سعة 512 جيجابايت يدعم تقنية 4G
                        LTE - بالمواصفات الدولية
                      </p>
                    </div>
                    <div className="center">
                      <p className="real-price">20.000 جنيه</p>
                      <p className="fake-price">23.000 جنيه</p>
                    </div>
                    <div className="footer">
                      <span className="discount">خصم %15</span>
                      <button>عروض</button>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="header">
                    <img
                      src="https://k.nooncdn.com/t_desktop-thumbnail-v2/v1541138794/N18810846A_1.jpg"
                      alt="product"
                    />
                  </div>
                  <div className="information">
                    <div className="head">
                      <p>أبل</p>
                      <p>ايفون 11 برو ماكس</p>
                      <p>
                        {" "}
                        بخاصية فيس تايم لون فضي سعة 512 جيجابايت يدعم تقنية 4G
                        LTE - بالمواصفات الدولية
                      </p>
                    </div>
                    <div className="center">
                      <p className="real-price">20.000 جنيه</p>
                      <p className="fake-price">23.000 جنيه</p>
                    </div>
                    <div className="footer">
                      <span className="discount">خصم %15</span>
                      <button>عروض</button>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="header">
                    <img
                      src="https://k.nooncdn.com/t_desktop-thumbnail-v2/v1541138794/N18810846A_1.jpg"
                      alt="product"
                    />
                  </div>
                  <div className="information">
                    <div className="head">
                      <p>أبل</p>
                      <p>ايفون 11 برو ماكس</p>
                      <p>
                        {" "}
                        بخاصية فيس تايم لون فضي سعة 512 جيجابايت يدعم تقنية 4G
                        LTE - بالمواصفات الدولية
                      </p>
                    </div>
                    <div className="center">
                      <p className="real-price">20.000 جنيه</p>
                      <p className="fake-price">23.000 جنيه</p>
                    </div>
                    <div className="footer">
                      <span className="discount">خصم %15</span>
                      <button>عروض</button>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="header">
                    <img
                      src="https://k.nooncdn.com/t_desktop-thumbnail-v2/v1541138794/N18810846A_1.jpg"
                      alt="product"
                    />
                  </div>
                  <div className="information">
                    <div className="head">
                      <p>أبل</p>
                      <p>ايفون 11 برو ماكس</p>
                      <p>
                        {" "}
                        بخاصية فيس تايم لون فضي سعة 512 جيجابايت يدعم تقنية 4G
                        LTE - بالمواصفات الدولية
                      </p>
                    </div>
                    <div className="center">
                      <p className="real-price">20.000 جنيه</p>
                      <p className="fake-price">23.000 جنيه</p>
                    </div>
                    <div className="footer">
                      <span className="discount">خصم %15</span>
                      <button>عروض</button>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="header">
                    <img
                      src="https://k.nooncdn.com/t_desktop-thumbnail-v2/v1541138794/N18810846A_1.jpg"
                      alt="product"
                    />
                  </div>
                  <div className="information">
                    <div className="head">
                      <p>أبل</p>
                      <p>ايفون 11 برو ماكس</p>
                      <p>
                        {" "}
                        بخاصية فيس تايم لون فضي سعة 512 جيجابايت يدعم تقنية 4G
                        LTE - بالمواصفات الدولية
                      </p>
                    </div>
                    <div className="center">
                      <p className="real-price">20.000 جنيه</p>
                      <p className="fake-price">23.000 جنيه</p>
                    </div>
                    <div className="footer">
                      <span className="discount">خصم %15</span>
                      <button>عروض</button>
                    </div>
                  </div>
                </div>
              </Slider>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default BestProductsSlider;
