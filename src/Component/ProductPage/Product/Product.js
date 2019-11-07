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
import { faTimes } from '@fortawesome/free-solid-svg-icons'

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
            width:40%;

            @media (max-width: 1024px){ 
                width:50% !important
            }

            @media (max-width: 768px){ 
                width:100% !important
            }

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
            width:30%;
            @media (max-width: 1024px){ 
                width:50% !important
            }

            @media (max-width: 768px){ 
                width:100% !important
            }
                        
            div:first-of-type{
                height:400px;

                img{
                    width:100%;
                    height:100%;
                    object-fit:contain;
                }
            }
            div:last-of-type{
                display:flex;
                justify-content:center;;

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
            width:30%;

            @media (max-width: 1024px){ 
            }

            @media (max-width: 768px){ 
                width:100% !important;
                margin-top:30px;
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

    aside{
        position: fixed;
        width:100%;
        height:100%;
        background:rgba(0,0,0,.8);
        top:0px;
        left:0px;
        display:none;
        visibility: hidden;
        justify-content:center;
        align-items:center;
        transition:all .4s ;
        z-index:90000000;

        svg{
            color:#FFF;
            position: absolute;
            top:15px;
            right:30px;
        }

        img{
            max-width:80%;
            max-height:80%;
            object-fit:contain;
            z-index:90000001;
        }
    }
`
class ProductItems extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imgSrc : "https://k.nooncdn.com/t_desktop-thumbnail-v2/v1541138794/N18810846A_1.jpg",
            img : [
                {src: "https://k.nooncdn.com/t_desktop-thumbnail-v2/v1541138794/N18810846A_1.jpg", alt:"product"},
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

    stopZomming = (e) => {
        if(e.target.tagName.toLowerCase() === 'aside'){
            e.target.style.display = 'none'
            e.target.style.visibility = 'hidden'
        }
    }

    exitZomming = () => {
        const aside = document.getElementById('imgViewer');
        aside.style.display = 'none'
        aside.style.visibility = 'hidden'
    }

    startZomming = () => {
        const aside = document.getElementById('imgViewer');
        aside.style.display = 'flex'
        aside.style.visibility = 'visible'
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
                                        <img src={this.state.imgSrc} onClick={this.startZomming}/>
                                    </div>
                                    <div>
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
                    
                        <aside id="imgViewer" onClick={(e) => this.stopZomming(e)} >
                            <FontAwesomeIcon icon={faTimes} size='1x' onClick={this.exitZomming}></FontAwesomeIcon>
                            <img src={this.state.imgSrc}/>
                        </aside>
                    </Row>
                </Container>
            </Product>
        )
    }
}
export default ProductItems;