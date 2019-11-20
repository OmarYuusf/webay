import React from 'react';
import "./pro.css"
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
            <div className="product">
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
                                                srcSet: this.state.imgSrc,
                                                style:{right:'0px !important'},
                                                width: 500,
                                                height: 2000,
                                                className:"hello"
                                            }
                                        }} />
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
                    </Row>
                </Container>
            </div>
        )
    }
}
export default ProductItems;