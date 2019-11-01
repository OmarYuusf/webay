import React from 'react';

// react-slick Import
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Styled-Component
import styled from 'styled-components';

import { Container, Row, Col } from 'react-bootstrap';

const SecSlider = styled.div`

    .container-fluid{
        padding:0px !important ;
    }

    .slick-slider{
            margin-top:60px;

            @media (max-width: 425px){ 
                margin-top:10px;
            }
            
            .slick-arrow{
                background:#FFF;
                opacity:1;
                height:50px;
                color:#212121;
                box-shadow:2px 2px 6px rgba(0,0,0,0.1);
                border-radius:6px;
                display:none !important;
                

                &::before{
                    display: inline-block;
                    vertical-align: middle;
                    font-weight: 900;
                    color:#000;
                    font-size:13px;
                }

            }

            .slick-dots{
                overflow:hidden;
                display:flex !important;
                flex-wrap:nowrap !important;
                justify-content:center;
            }

            .slick-slide{
                
                > div{
                    background:#FFF;
                    margin:12px;
                    border-radius:2px;
                    box-shadow:1px 1px 5px rgb(0,0,0,.15);

                    div{
                        margin:0px;
                    }
                }

                .header{
                    display:flex;
                    justify-content:center;
                    align-items:center;

                    img{
                        width:75%;
                    }
                }

                .information{
                    border-top:1px solid rgba(0,0,0,.1);
                    padding:8px 5px;

                    .head{

                        p{
                        margin:0px;
                        }

                        p:first-of-type{
                            font-size:12px;
                            color:#555
                        }

                        p:nth-child(2){
                            font-weight:800;
                            font-size:14px
                        }

                        p:last-of-type{
                            font-size:12px;
                            margin-top:10px;
                            color:#555
                        }
                    }

                    .center{
                        display:flex;
                        justify-content:space-between;
                        margin:15px 0px;
                        align-items:center;

                        > span{
                            display:flex;
                            flex-direction:row;
                            font-size:13px;
                            align-items:center;
                        }

                        .real-price{
                            font-weight:600;

                        }

                        .fake-price{
                            font-size:11px;
                            color:#555;
                            text-decoration:line-through;
                            margin-inline-start:10px;
                        }

                    }

                    .footer{
                        display:flex;
                        justify-content:space-around;

                        .discount{
                            background:rgba(0,255,43,.3);
                            font-size:12px;
                            border-radius:15px;
                            padding:5px 8px;
                            display:flex;
                            justify-content:space-around;
                            align-items:center;
                            box-shadow:1px 1px 3px rgba(0,0,0,0.15);
                        }

                        button{
                            border-radius:15px;
                            border:0px;
                            background:#03A9F4;
                            color:#FFF;
                            font-size:12px;
                            padding:5px 15px;
                            transition:all .2s ;
                            box-shadow:1px 1px 3px rgba(0,0,0,0.15);

                            &:hover{
                                box-shadow:2px 2px 6px rgba(0,0,0,0.15);
                            }
                        }
                    }
                }
            }
        }  
`

class LeastProducts extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 1,
            initialSlide: 0,

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
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
        return(
            <SecSlider>
                <Container fluid={true}>
                    <Row className="cata">
                        <Col style={{direction:this.props.language === 'en' ? 'ltr !important' : 'rtl !important',
            textAlign : this.props.language === "en" ? 'left !important' : "right !important"}}>
                            <Slider {...settings}>
                            <div>
                                <div className="header">
                                    <img src="https://k.nooncdn.com/t_desktop-thumbnail-v2/v1541138794/N18810846A_1.jpg" alt='product'/>
                                </div>
                                <div className="information">
                                    <div className="head">
                                        <p>أبل</p>
                                        <p>ايفون 11 برو ماكس</p>
                                        <p> بخاصية فيس تايم لون فضي سعة 512 جيجابايت يدعم تقنية 4G LTE - بالمواصفات الدولية</p>
                                    </div>
                                    <div className="center">
                                        <span className="All-price">
                                            <span className="real-price">
                                                20.000 جنيه
                                            </span>
                                            <span className="fake-price">
                                                23.000 جنيه
                                            </span>
                                        </span>
                                    </div>
                                    <div className="footer">
                                        <span className="discount">
                                            خصم %15
                                        </span>
                                        <button>عروض</button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="header">
                                    <img src="https://k.nooncdn.com/t_desktop-thumbnail-v2/v1541138794/N18810846A_1.jpg" alt='product'/>
                                </div>
                                <div className="information">
                                    <div className="head">
                                        <p>أبل</p>
                                        <p>ايفون 11 برو ماكس</p>
                                        <p> بخاصية فيس تايم لون فضي سعة 512 جيجابايت يدعم تقنية 4G LTE - بالمواصفات الدولية</p>
                                    </div>
                                    <div className="center">
                                        <span className="All-price">
                                            <span className="real-price">
                                                20.000 جنيه
                                            </span>
                                            <span className="fake-price">
                                                23.000 جنيه
                                            </span>
                                        </span>
                                    </div>
                                    <div className="footer">
                                        <span className="discount">
                                            خصم %15
                                        </span>
                                        <button>عروض</button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="header">
                                    <img src="https://k.nooncdn.com/t_desktop-thumbnail-v2/v1541138794/N18810846A_1.jpg" alt='product'/>
                                </div>
                                <div className="information">
                                    <div className="head">
                                        <p>أبل</p>
                                        <p>ايفون 11 برو ماكس</p>
                                        <p> بخاصية فيس تايم لون فضي سعة 512 جيجابايت يدعم تقنية 4G LTE - بالمواصفات الدولية</p>
                                    </div>
                                    <div className="center">
                                        <span className="All-price">
                                            <span className="real-price">
                                                20.000 جنيه
                                            </span>
                                            <span className="fake-price">
                                                23.000 جنيه
                                            </span>
                                        </span>
                                    </div>
                                    <div className="footer">
                                        <span className="discount">
                                            خصم %15
                                        </span>
                                        <button>عروض</button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="header">
                                    <img src="https://k.nooncdn.com/t_desktop-thumbnail-v2/v1541138794/N18810846A_1.jpg" alt='product'/>
                                </div>
                                <div className="information">
                                    <div className="head">
                                        <p>أبل</p>
                                        <p>ايفون 11 برو ماكس</p>
                                        <p> بخاصية فيس تايم لون فضي سعة 512 جيجابايت يدعم تقنية 4G LTE - بالمواصفات الدولية</p>
                                    </div>
                                    <div className="center">
                                        <span className="All-price">
                                            <span className="real-price">
                                                20.000 جنيه
                                            </span>
                                            <span className="fake-price">
                                                23.000 جنيه
                                            </span>
                                        </span>
                                    </div>
                                    <div className="footer">
                                        <span className="discount">
                                            خصم %15
                                        </span>
                                        <button>عروض</button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="header">
                                    <img src="https://k.nooncdn.com/t_desktop-thumbnail-v2/v1541138794/N18810846A_1.jpg" alt='product'/>
                                </div>
                                <div className="information">
                                    <div className="head">
                                        <p>أبل</p>
                                        <p>ايفون 11 برو ماكس</p>
                                        <p> بخاصية فيس تايم لون فضي سعة 512 جيجابايت يدعم تقنية 4G LTE - بالمواصفات الدولية</p>
                                    </div>
                                    <div className="center">
                                        <span className="All-price">
                                            <span className="real-price">
                                                20.000 جنيه
                                            </span>
                                            <span className="fake-price">
                                                23.000 جنيه
                                            </span>
                                        </span>
                                    </div>
                                    <div className="footer">
                                        <span className="discount">
                                            خصم %15
                                        </span>
                                        <button>عروض</button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="header">
                                    <img src="https://k.nooncdn.com/t_desktop-thumbnail-v2/v1541138794/N18810846A_1.jpg" alt='product'/>
                                </div>
                                <div className="information">
                                    <div className="head">
                                        <p>أبل</p>
                                        <p>ايفون 11 برو ماكس</p>
                                        <p> بخاصية فيس تايم لون فضي سعة 512 جيجابايت يدعم تقنية 4G LTE - بالمواصفات الدولية</p>
                                    </div>
                                    <div className="center">
                                        <span className="All-price">
                                            <span className="real-price">
                                                20.000 جنيه
                                            </span>
                                            <span className="fake-price">
                                                23.000 جنيه
                                            </span>
                                        </span>
                                    </div>
                                    <div className="footer">
                                        <span className="discount">
                                            خصم %15
                                        </span>
                                        <button>عروض</button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="header">
                                    <img src="https://k.nooncdn.com/t_desktop-thumbnail-v2/v1541138794/N18810846A_1.jpg" alt='product'/>
                                </div>
                                <div className="information">
                                    <div className="head">
                                        <p>أبل</p>
                                        <p>ايفون 11 برو ماكس</p>
                                        <p> بخاصية فيس تايم لون فضي سعة 512 جيجابايت يدعم تقنية 4G LTE - بالمواصفات الدولية</p>
                                    </div>
                                    <div className="center">
                                        <span className="All-price">
                                            <span className="real-price">
                                                20.000 جنيه
                                            </span>
                                            <span className="fake-price">
                                                23.000 جنيه
                                            </span>
                                        </span>
                                    </div>
                                    <div className="footer">
                                        <span className="discount">
                                            خصم %15
                                        </span>
                                        <button>عروض</button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="header">
                                    <img src="https://k.nooncdn.com/t_desktop-thumbnail-v2/v1541138794/N18810846A_1.jpg" alt='product'/>
                                </div>
                                <div className="information">
                                    <div className="head">
                                        <p>أبل</p>
                                        <p>ايفون 11 برو ماكس</p>
                                        <p> بخاصية فيس تايم لون فضي سعة 512 جيجابايت يدعم تقنية 4G LTE - بالمواصفات الدولية</p>
                                    </div>
                                    <div className="center">
                                        <span className="All-price">
                                            <span className="real-price">
                                                20.000 جنيه
                                            </span>
                                            <span className="fake-price">
                                                23.000 جنيه
                                            </span>
                                        </span>
                                    </div>
                                    <div className="footer">
                                        <span className="discount">
                                            خصم %15
                                        </span>
                                        <button>عروض</button>
                                    </div>
                                </div>
                            </div>
                            </Slider>
                        </Col>
                    </Row>
                </Container>
            </SecSlider>
        )
    }
}

export default LeastProducts;