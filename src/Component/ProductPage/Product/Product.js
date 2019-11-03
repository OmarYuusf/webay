import React from 'react';

// FontAwsome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

// Styled-Component
import styled from 'styled-components'

import { Container, Row, Col } from 'react-bootstrap'

const Product = styled.div`
    margin-top:20px;

    .header{
        font-size:11px;

        a{
            color:#515151;
            text-decoration:underline
        }

        a:not(:last-of-type){
            color:blue;
        }

        .fa-chevron-right,.fa-chevron-left{
            margin:0px 10px;
            color:#515151;
        }
    }

    .product{
        margin-top:35px;
        display:flex;

        .information{
            flex:2;
            padding-left:10px;  

            > div:not(:last-of-type) {
                border-bottom:1px solid rgba(0,0,0,.1);
            }

            > div:first-of-type{
                padding:18px 0px;
                padding-top:0px;

                .owner{
                    font-size:14px;
                    color:#515151;
                    margin:0px;
                }
                .products-name{
                    font-weight:800;
                    margin:10px 0px;
                    margin-bottom:4px;
                    color:#212121
                }
                .model-number{
                    font-size:11px;
                    color:#515151;
                    margin:0px;
                }

                > div{
                    p{
                        margin:0px;
                    }
                }

                .old-price{
                    margin-top:15px;
                    display:flex;
                    font-size:14px;

                    p:first-of-type{
                        color:#888;
                        margin-inline-end:6px;
                    }
                    p:last-of-type{
                        text-decoration:line-through;
                        color:#888
                    }
                }
                .new-price{
                    display:flex;
                    font-size:14px;
                    align-items:center;
                    justify-content:space-between;

                    > span {
                        display:flex;
                        align-items:center ;

                        p:first-of-type{
                            color:#888;
                            margin-inline-end:6px;
                        }
                        p:last-of-type{
                            font-size:32px;
                            font-weight:800;
                            color:#03A9F4
                        }
                    }
                    .discount{
                    background:#05ff056b;
                    display:inline;
                    border-radius:15px;
                    font-size:13px;
                    padding:5px 15px;
                    }
                }
                
            }

            div:nth-child(2){
                padding:18px 0px;

                h6{
                    font-weight:800;
                    color:#212121
                }

                ul {
                    margin:0px; 
                    padding-inline-start:18px;

                    li{
                        color:#888;
                        font-size:13px;
                    }
                }
            }

            div:last-of-type{
                padding:18px 0px;

                h6{
                    font-weight:800;
                    color:#212121;
                    margin-bottom:20px;
                }

                span{
                    display:flex;

                    p{
                        font-size:12px;
                    }

                    p:first-of-type{
                        margin-inline-end:30px;
                        color:#999
                    }

                    p:last-of-type{
                        color:#777;
                        font-weight:600;
                    }
                }
            }
        }

        .imgs{
            flex:2;

                        
            div:first-of-type{
                height:300px;

                img{
                    width:100%;
                    height:100%;
                    object-fit:contain;
                }
            }
            div:last-of-type{
                display:flex;
                justify-content:space-around;
                img{
                    width:60px;
                    height:60px;
                    box-shadow:1px 1px 3px rgba(0,0,0,.15);
                    object-fit:contain;
                    cursor: pointer;
                }
            }
        }
        .ship{
            flex:1;
        }
    }
`
class ProductItems extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imgSrc : "https://k.nooncdn.com/t_desktop-pdp-v1/v1554958476/N22690810A_1.jpg",
            img : [
                {src: "https://k.nooncdn.com/t_desktop-pdp-v1/v1554958476/N22690810A_1.jpg", alt:"product"},
                {src: "https://k.nooncdn.com/t_desktop-pdp-v1/v1554958477/N22690810A_2.jpg", alt:"product"},
                {src: "https://k.nooncdn.com/t_desktop-pdp-v1/v1554958476/N22690810A_3.jpg", alt:"product"},
                {src: "https://k.nooncdn.com/t_desktop-pdp-v1/v1554958477/N22690810A_4.jpg", alt:"product"},
                {src: "https://k.nooncdn.com/t_desktop-pdp-v1/v1554958476/N22690810A_1.jpg", alt:"product"}
            ]
        }
    }

    handleChangeImg = (e) => {
        this.setState({
            imgSrc: e.target.src
        })
    }

    render() {
        return(
            <Product>
                <Container>
                    <Row>
                        <Col xs={12} className="header">
                            <a href='#'>الرئيسية</a> 
                            {this.props.language === 'en' ?(<FontAwesomeIcon icon={faChevronRight} size='xs'></FontAwesomeIcon>) :
                                                            (<FontAwesomeIcon icon={faChevronLeft} size='xs'></FontAwesomeIcon>)}
                            <a href='#'>اسم القسم</a> 
                            {this.props.language === 'en' ?(<FontAwesomeIcon icon={faChevronRight} size='xs'></FontAwesomeIcon>) :
                                                            (<FontAwesomeIcon icon={faChevronLeft} size='xs'></FontAwesomeIcon>)}
                            <a href='#'>اسم المنتج</a> 
                        </Col>

                        <Col xs={12} className="product">
                            <div className="information">
                                <div>
                                    <p className="owner">اسم الشركه</p>
                                    <h5 className="products-name">DataTraveler 104 Flash Drive أسود 16 غيغابايت</h5>
                                    <p className="model-number">اسم الموديل</p>
                                    <div className="old-price">
                                        <p>  السعر القديم:</p>
                                        <p>  223 جنيه</p>
                                    </div>
                                    <div className="new-price">
                                        <span>
                                            <p>  السعر الجديد: </p>
                                            <p>   223 جنيه</p>
                                        </span>
                                        <p className="discount">خصم 15%</p>
                                    </div>
                                    
                                </div>
                                <div>
                                    <h6>مميزات المنتج</h6>
                                    <ul>
                                        <li>Pocket sized for easy transportability.</li>
                                        <li>Features a stylish black casing with a sliding cap design.</li>
                                        <li>It is supported by a wide array of devices thanks to the USB 2.0 interface</li>
                                    </ul>
                                </div>
                                <div>
                                    <h6>المواصفات</h6>
                                    <span>
                                        <p>الحجم</p>
                                        <p>84 جرام</p>
                                    </span>
                                    <span>
                                        <p>الطول</p>
                                        <p>120</p>
                                    </span>
                                    <span>
                                        <p>اللون</p>
                                        <p>اسود</p>
                                    </span>
                                </div>
                            </div>
                            <div className="imgs">
                                <div>
                                    <img src={this.state.imgSrc}/>
                                </div>
                                <div>
                                    {this.state.img.map(imgs => {
                                        return(
                                            <img key={Math.random()} src={imgs.src} alt="product" onClick={(e) => this.handleChangeImg(e)}/>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="ship">
                                {/* <div>
                                    <div>    
                                        <svg height="15px" viewBox="0 0 512 512" width="15px" xmlns="http://www.w3.org/2000/svg"><path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0" fill="#2196f3"/><path d="m385.75 201.75-138.667969 138.664062c-4.160156 4.160157-9.621093 6.253907-15.082031 6.253907s-10.921875-2.09375-15.082031-6.253907l-69.332031-69.332031c-8.34375-8.339843-8.34375-21.824219 0-30.164062 8.339843-8.34375 21.820312-8.34375 30.164062 0l54.25 54.25 123.585938-123.582031c8.339843-8.34375 21.820312-8.34375 30.164062 0 8.339844 8.339843 8.339844 21.820312 0 30.164062zm0 0" fill="#fafafa"/></svg>
                                        <p>ضمان لمدة عامين</p>
                                    </div>
                                    <div>
                                        <svg height="15px" viewBox="0 0 512 512" width="15px" xmlns="http://www.w3.org/2000/svg"><path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0" fill="#2196f3"/><path d="m385.75 201.75-138.667969 138.664062c-4.160156 4.160157-9.621093 6.253907-15.082031 6.253907s-10.921875-2.09375-15.082031-6.253907l-69.332031-69.332031c-8.34375-8.339843-8.34375-21.824219 0-30.164062 8.339843-8.34375 21.820312-8.34375 30.164062 0l54.25 54.25 123.585938-123.582031c8.339843-8.34375 21.820312-8.34375 30.164062 0 8.339844 8.339843 8.339844 21.820312 0 30.164062zm0 0" fill="#fafafa"/></svg>
                                        <p>تقدر دلوقتي ترجّع المنتجات بسهولة في العرض ده.</p>
                                    </div>
                                    <div>
                                        <svg height="15px" viewBox="0 0 512 512" width="15px" xmlns="http://www.w3.org/2000/svg"><path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0" fill="#2196f3"/><path d="m385.75 201.75-138.667969 138.664062c-4.160156 4.160157-9.621093 6.253907-15.082031 6.253907s-10.921875-2.09375-15.082031-6.253907l-69.332031-69.332031c-8.34375-8.339843-8.34375-21.824219 0-30.164062 8.339843-8.34375 21.820312-8.34375 30.164062 0l54.25 54.25 123.585938-123.582031c8.339843-8.34375 21.820312-8.34375 30.164062 0 8.339844 8.339843 8.339844 21.820312 0 30.164062zm0 0" fill="#fafafa"/></svg>
                                        <p>البائع ECS Distribution</p>
                                    </div>
                                </div>
                                <div>

                                </div> */}
                                a
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Product>
        )
    }
}

export default ProductItems;