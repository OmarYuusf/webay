import React from 'react';

// FontAwsome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faUndo } from '@fortawesome/free-solid-svg-icons'
import { faStoreAlt } from '@fortawesome/free-solid-svg-icons'
import { faTruckMoving } from '@fortawesome/free-solid-svg-icons'
import { faUserShield } from '@fortawesome/free-solid-svg-icons'


import ReactImageMagnify from 'react-image-magnify';

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

        @media (max-width: 1024px){ 
            flex-wrap:wrap;
        }

        .information{
            padding-left:10px;
            width:35%;
            margin-inline-end:15px;

            @media (max-width: 1024px){ 
                width:50% !important;
                margin-inline-end:0px;
            }

            @media (max-width: 768px){ 
                width:100% !important;
                order:2;
                margin-top:20px;
                margin-inline-end:0px;
            }

            div {
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

                    @media (max-width: 425px){ 
                        justify-content:flex-end;
                        flex-direction:column;
                    }


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

            form{   
                padding:15px 0px; 
                border-bottom:1px solid rgba(0,0,0,.1);
                h6{
                    font-size:10px;
                    color:#777;
                }

                > div{
                    display:flex;
                    
                    input{
                        width:100%;
                        margin:0px 5px;
                        background:#03A9F4;
                        border:0px;
                        font-size:13px;
                        color:#FFF;
                        padding:10px 0px;
                        box-shadow: 2px 2px 4px rgba(0,0,0,.15);
                        transition:all .4s ;

                        &:hover{
                            background:#1bb8ff;
                            box-shadow: 4px 4px 6px rgba(0,0,0,.15);
                        }
                    }
                }
            }
        }

        .imgs{
            width:35%;
            display:flex;
            margin-inline-end:15px;

            @media (max-width: 1024px){ 
                width:50% !important;
                margin-inline-end:0px;
            }

            @media (max-width: 768px){ 
                width:100% !important;
                order:1;;
                margin-inline-end:0px;
            }


            .containerImgs{
                display:flex;
                justify-content:flex-start;
                flex-direction:column;

                img{
                    width:60px;
                    height:60px;
                    box-shadow:1px 1px 3px rgba(0,0,0,.09);
                    object-fit:contain;
                    cursor: pointer;
                }
            }

            div:last-of-type{
                img{
                    height:450px !important;
                    object-fit:contain !important;
                }
            }
                        
            
        }
        .ship{
            width:30%;

            @media (max-width: 1024px){ 
            }

            @media (max-width: 768px){ 
                width:100% !important;
                order:3;
            }

            > div {
                margin:0px 10px;

                > div{
                    display:flex;
                    align-items:center;
                    margin:16px 0px;

                    svg{
                        margin-inline-end:10px;
                        color:#03A9F4;
                    }

                    p{
                        margin:0px;
                        font-size:11px;
                        color:#777
                    }
                }
            }

            > div:first-of-type{
                border-bottom:1px solid rgba(0,0,0,.1)
            }
        }
    }

`
class ProductItems extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imgSrc : "https://k.nooncdn.com/t_desktop-pdp-v1/v1570191588/N23423233A_1.jpg",
            img : [
                {src: "https://k.nooncdn.com/t_desktop-pdp-v1/v1570191588/N23423233A_1.jpg", alt:"product"},
                {src: "https://k.nooncdn.com/t_desktop-pdp-v1/v1556008059/N23423233A_2.jpg", alt:"product"},
                {src: "https://k.nooncdn.com/t_desktop-pdp-v1/v1570191589/N23423233A_3.jpg", alt:"product"},
                {src: "https://k.nooncdn.com/t_desktop-pdp-v1/v1570191590/N23423233A_4.jpg", alt:"product"},
                {src: "https://k.nooncdn.com/t_desktop-pdp-v1/v1570191590/N23423233A_6.jpg", alt:"product"},
                {src: "https://k.nooncdn.com/t_desktop-pdp-v1/v1570191590/N23423233A_7.jpg", alt:"product"}
            ],
            quantity:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
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
                <Container fluid={true}>
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
                            <div className="imgs">
                                    <div className="containerImgs">
                                        {this.state.img.map(imgs => {
                                            return(
                                                <img key={Math.random()}
                                                     src={imgs.src}
                                                     alt="product" 
                                                     onClick={(e) => this.handleChangeImg(e)} 
                                                     />
                                            )
                                        })}
                                    </div>
                                    <div>
                                        {/* <Magnifier src={this.state.imgSrc} width={500} /> */}
                                        <ReactImageMagnify {...{
                                            smallImage: {
                                                alt: 'product',
                                                isFluidWidth: true,
                                                src: this.state.imgSrc
                                            },
                                            largeImage: {
                                                src: this.state.imgSrc,
                                                style:{right:'0px !important'},
                                                width: 1200,
                                                height: 1200,
                                                sizes: '(min-width: 800px) 33.5vw, (min-width: 415px)'
                                            }
                                        }} />
                                    </div>
                                </div>
                                <div className="information">
                                    <div>
                                        <p className="owner">اسم الشركه</p>
                                        <h5 className="products-name">هاتف Y6 إصدار (2019) ثنائي الشريحة لون أزرق ياقوتي بذاكرة رام سعة 2 جيجابايت وذاكرة داخلية سعة 32 جيجابايت ويدعم تقنية 4G LTE</h5>
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
                                    <form>
                                        <h6>Quantity</h6>
                                        <div>
                                            <select>
                                                {
                                                    this.state.quantity.map(item => {
                                                        return(
                                                            <option key={Math.random()} value={item}>{item}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                            <input type="submit" value="ADD TO CART"/>
                                        </div>
                                    </form>
                                </div>

                                <div className="ship">
                                    <div>
                                        <div>
                                            <FontAwesomeIcon icon={faStar} size='xs'></FontAwesomeIcon>
                                            <p>ضمان لمدة عامين</p>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faUndo} size='xs'></FontAwesomeIcon>
                                            <p>تقدر دلوقتي ترجّع المنتجات بسهولة في العرض ده.</p>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faStoreAlt} size='xs'></FontAwesomeIcon>
                                            <p>  البائع ECS Distribution</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <FontAwesomeIcon icon={faTruckMoving} size='xs'></FontAwesomeIcon>
                                            <p>الشحن المجاني لما تشتري بـ 250ج.م أو أكتر</p>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faUndo} size='xs'></FontAwesomeIcon>
                                            <p>إرجاع مجاني وبسهولة للمنتجات اللي ينفع ترجع</p>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faUserShield} size='xs'></FontAwesomeIcon>
                                            <p>متقلقش على بياناتك دايماً في أمان</p>
                                        </div>
                                    </div>
                                </div>
                        </Col>
                    </Row>
                </Container>
            </Product>
        )
    }
}
export default ProductItems;