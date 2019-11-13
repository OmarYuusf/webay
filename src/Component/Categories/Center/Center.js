import React from 'react';


// FontAwsome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// FontAwsome Icons
import { faList } from '@fortawesome/free-solid-svg-icons'
import { faBorderAll } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

// Styled-Component
import styled from 'styled-components'

import { Accordion, Card, Container, Row, Form } from 'react-bootstrap'

const Cent = styled.div`
    margin-top:80px;
    display:flex;

    .sideBar{
        width:15%;
        margin:0px 15px;

        .accordion{
            .card{
                box-shadow:0px 0px 0px;

                .card-header{
                    padding:3px 0px;
                    font-size:14px;
                    font-weight:800;

                }
                    
                .card-body{
                    padding:12px 5px;
                }
            }
        }

        .accordion:first-of-type{
            .card-body{
                > div{
                    display:flex;   
                    justify-content:space-between;
                    align-items:center;
                    margin:5px 0px;

                    p{
                        margin:0px;
                        display:flex;
                        font-size:12px;
                        color:#777;
                    }
                }
            }
        }

        .accordion:nth-child(2){
            .card-body{
                form{

                    > div{
                        display:flex;   
                        justify-content:space-between;
                        align-items:center;
                        font-size:12px;
                        color:#777;
                        margin:5px 0px;

                        > span{
                            display:flex;  
                            justify-content:space-between;
                            align-items:center;

                            input{

                            }

                            label{
                                margin:0px;
                                margin-inline-start:5px;
                            }
                        }

                        p{
                            margin:0px;
                        }
                    }
                }
            }
        }

        .accordion:last-of-type{
            .card-body{
                form{
                    div{
                        display:flex;
                        justify-content:space-between;
                        margin:5px 0px;
                        font-size:12px;
                        align-items:center;

                        label{
                            color:#777;
                        }

                    }

                    div:last-of-type{
                        justify-content:flex-end;

                        input{
                            width:100%;
                            border:0px;
                            color:#f1f1f1;
                            background:#03A9F4;
                            padding:5px 15px;
                            margin:10px 0px;
                            transition:all .3s;
                            &:hover{
                                box-shadow:4px 4px 6px rgb(0,0,0,.1)
                            }
                        }
                    }
                }
            }
        }
    }
}

    .head{
        width:85%;
        margin:15px;

        h6{
            margin:0px;
        }

        .filter-sort{
            width:100%;
            display:flex;
            justify-content:space-between;

            > div:first-of-type{
                span{
                    font-weight:800
                }
            }

            > div:last-of-type{
                display:flex;
                align-items:center;

                > span{
                    margin:0px 18px;

                    label{
                        margin-inline-end:10px;
                        color:#777;
                        font-size:14px;
                    }

                    select{
                        border:1px solid #212121;                        
                        cursor: pointer;
                        font-size:12px;
                    }

                    option{
                        font-size:12px;

                    }

                    span{
                        border:1px solid #212121;
                        padding:0px 8px;
                        cursor: pointer;
                    }
                }
            }
        }
    }

    .products{
        margin-top:25px;
        width:100%;
        flex-wrap:wrap;

        .products-row{
            width:100%;
            display:flex;

            > div{
                width:20%;
                margin:8px;
                cursor: pointer;

                @media (max-width: 1440px){ 
                    font-size:14px
                }

                .container-img{
                    display:flex;
                    justify-content:center;
                    align-items:center;

                    img{
                        height:250px;
                        object-fit:contain
                    }
                }

                .container-body{
                    padding:5px 3px;

                    h6{
                        font-size:12px;
                        color:#777;
                    }

                    .price{
                        display:flex;
                        align-items:center;
                        margin-top:8px;

                        .real-price{
                            margin:0px;
                            font-weight:900;
                            color:#212121;
                            margin-inline-end:8px;
                        }

                        .fake-price{
                            margin:0px;
                            text-decoration:line-through;
                            color:#999;
                            font-size:10px;
                        }
                    }

                    .discount{
                        margin-top:5px;
                        font-size:10px;
                        padding:3px 10px;
                        background:rgba(0,255,43,.3);
                    }
                }
            }
            
        }

        .list-view{
            flex-wrap:wrap;

            .product {
                width:100%;
                display:flex;
                border-bottom:1px solid rgba(0,0,0,.1);

                .container-img{
                    flex:1;
                    img{
                        height:150px;
                    }
                }
                
                .container-body{
                    flex:6;
                    .owner{
                        margin:0px;
                        color:#222;
                        font-size:14px;

                    }
                }
                
                .container-buttons{
                    flex:2;
                    display:flex;
                    flex-direction:column;
                    justify-content:center;
                    align-items:center;

                    button{
                        font-size:12px;
                        display:block;
                        width:80%;
                        padding:6px 0px;
                        border:0px;
                        margin:6px 0px;
                        background:#03A9F4;
                        color:#fff;

                        svg{
                            margin-inline-start:6px;
                        }
                    }

                    button:last-of-type{
                        background:transparent;
                        border:1px solid #03A9F4;
                        color:#03A9F4;
                    }
                }
            }
        }
    }
`

class Center extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            toggleView : false,
            product: [
                {   owner:'أرسيتون', 
                    imgLink:"https://k.nooncdn.com/t_desktop-thumbnail-v2/v1554877481/N23046819A_1.jpg", 
                    descrption: "ديلونجي Multifunctional Coffee Machine 1450W ECAM650.55MS أسود/ فضي رقم الموديل: ECAM650.55MS", 
                    realPrice:2150.00, 
                    fakePrice:2220.00 , 
                    discount:15
                },
                {   owner:'أرسيتون', 
                    imgLink:"https://k.nooncdn.com/t_desktop-thumbnail-v2/v1554877481/N23046819A_1.jpg", 
                    descrption: "ديلونجي Multifunctional Coffee Machine 1450W ECAM650.55MS أسود/ فضي رقم الموديل: ECAM650.55MS", 
                    realPrice:2150.00, 
                    fakePrice:2220.00 , 
                    discount:15
                }
            ]
        }
    }

    handleView = () => {
        this.setState({
            toggleView:!this.state.toggleView
        })
    }
    render() {
        return(
            <Cent style={{direction:this.props.language === 'en' ? "ltr" : "rtl",
                        textAlign:this.props.language === 'en' ? "left" : "right"}}>
                
                <div className="sideBar">
                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                الفئه
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <div>
                                    <p>القسم</p>
                                    <p>(<span>رقم هنا</span>)</p>
                                </div>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                الماركه
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Form>
                                    <div>
                                        <span>
                                            <input type="checkbox" id="samsung"/>
                                            <label for="samsung">اسم الماركه</label>
                                        </span>
                                        <p>(<span>رقم هنا</span>)</p>
                                    </div>
                                    <div>
                                        <span>
                                            <input type="checkbox" id=""/>
                                            <label for="">اسم الماركه</label>
                                        </span>
                                        <p>(<span>رقم هنا</span>)</p>
                                    </div>
                                    <div>
                                        <span>
                                            <input type="checkbox" id=""/>
                                            <label for="">اسم الماركه</label>
                                        </span>
                                        <p>(<span>رقم هنا</span>)</p>
                                    </div>
                                    <div>
                                        <span>
                                            <input type="checkbox" id=""/>
                                            <label for="">اسم الماركه</label>
                                        </span>
                                        <p>(<span>رقم هنا</span>)</p>
                                    </div>
                                </Form>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                               السعر
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <form>
                                    <div>
                                        <label>من</label>
                                        <input type="number"/>
                                    </div>
                                    <div>
                                        <label>الي</label>
                                        <input type="number"/>
                                    </div>
                                    <div>
                                        <input type="submit" value="بحث"/>
                                    </div>
                                </form>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
                <div className="head">
                    <div className="filter-sort">
                        <div>
                            <h6>لقينا 1152 نتيجة لـ <span>Kitchen Appliance</span></h6>
                        </div>
                        <div>
                            <span>
                                <label>ترتيب حسب</label>
                                <select>
                                    <option>الأكثر انتشارا</option>
                                    <option>السعر من الأعلي الي الأقل</option>
                                    <option>السعر من الأقل الي الأعلي</option>
                                </select>
                            </span>
                            <span>
                                <label>عرض</label>
                                <select>
                                    <option>50 في الصفحه</option>
                                    <option>100 في الصفحه</option>
                                    <option>150 في الصفحه</option>
                                </select>
                            </span>
                            <span>
                                <label>جنب بعض</label>
                                <span>
                                    {this.state.toggleView === true ? (<FontAwesomeIcon onClick={this.handleView} icon={faBorderAll}></FontAwesomeIcon>)
                                                                     : <FontAwesomeIcon onClick={this.handleView} icon={faList}></FontAwesomeIcon>}
                                </span>
                            </span>
                        </div>
                    </div>
                        <div className="products">
                            <div className={`products-row ${this.state.toggleView === true ? 'list-view' : null }`}>
                                    <div className="product">
                                        <div className="container-img">
                                            <img src="https://k.nooncdn.com/t_desktop-thumbnail-v2/v1554877481/N23046819A_1.jpg"/>
                                        </div>
                                        <div className="container-body">
                                            <p className="owner" style={{display: this.state.toggleView === false ? 'none' : 'block'}}>أريستون</p>
                                            <h6>ديلونجي Multifunctional Coffee Machine 1450W ECAM650.55MS أسود/ فضي رقم الموديل: ECAM650.55MS</h6>
                                            <span className="price">
                                                <p class="real-price">2150.00 جنيه</p>
                                                <p class="fake-price">2220.00 جنيه</p>
                                            </span>
                                            <span class="discount">
                                                خصم 15%
                                            </span>
                                        </div>
                                        <div className="container-buttons"  style={{display: this.state.toggleView === false ? 'none' : 'flex'}}>
                                            <button> اضافه إلي عربة التسوق<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
                                            <button>إاضافه إالي منتجاتك المفضلة<FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></button>
                                        </div>
                                    </div>
                                    <div className="product">
                                        <div className="container-img">
                                            <img src="https://k.nooncdn.com/t_desktop-thumbnail-v2/v1554877481/N23046819A_1.jpg"/>
                                        </div>
                                        <div className="container-body">
                                            <p className="owner" style={{display: this.state.toggleView === false ? 'none' : 'block'}}>أريستون</p>
                                            <h6>ديلونجي Multifunctional Coffee Machine 1450W ECAM650.55MS أسود/ فضي رقم الموديل: ECAM650.55MS</h6>
                                            <span className="price">
                                                <p class="real-price">2150.00 جنيه</p>
                                                <p class="fake-price">2220.00 جنيه</p>
                                            </span>
                                            <span class="discount">
                                                خصم 15%
                                            </span>
                                        </div>
                                        <div className="container-buttons"  style={{display: this.state.toggleView === false ? 'none' : 'flex'}}>
                                            <button> اضافه إلي عربة التسوق<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
                                            <button>إاضافه إالي منتجاتك المفضلة<FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></button>
                                        </div>
                                    </div>
                                    <div className="product">
                                        <div className="container-img">
                                            <img src="https://k.nooncdn.com/t_desktop-thumbnail-v2/v1554877481/N23046819A_1.jpg"/>
                                        </div>
                                        <div className="container-body">
                                            <p className="owner" style={{display: this.state.toggleView === false ? 'none' : 'block'}}>أريستون</p>
                                            <h6>ديلونجي Multifunctional Coffee Machine 1450W ECAM650.55MS أسود/ فضي رقم الموديل: ECAM650.55MS</h6>
                                            <span className="price">
                                                <p class="real-price">2150.00 جنيه</p>
                                                <p class="fake-price">2220.00 جنيه</p>
                                            </span>
                                            <span class="discount">
                                                خصم 15%
                                            </span>
                                        </div>
                                        <div className="container-buttons"  style={{display: this.state.toggleView === false ? 'none' : 'flex'}}>
                                            <button> اضافه إلي عربة التسوق<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
                                            <button>إاضافه إالي منتجاتك المفضلة<FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></button>
                                        </div>
                                    </div>
                                    <div className="product">
                                        <div className="container-img">
                                            <img src="https://k.nooncdn.com/t_desktop-thumbnail-v2/v1554877481/N23046819A_1.jpg"/>
                                        </div>
                                        <div className="container-body">
                                            <p className="owner" style={{display: this.state.toggleView === false ? 'none' : 'block'}}>أريستون</p>
                                            <h6>ديلونجي Multifunctional Coffee Machine 1450W ECAM650.55MS أسود/ فضي رقم الموديل: ECAM650.55MS</h6>
                                            <span className="price">
                                                <p class="real-price">2150.00 جنيه</p>
                                                <p class="fake-price">2220.00 جنيه</p>
                                            </span>
                                            <span class="discount">
                                                خصم 15%
                                            </span>
                                        </div>
                                        <div className="container-buttons"  style={{display: this.state.toggleView === false ? 'none' : 'flex'}}>
                                            <button> اضافه إلي عربة التسوق<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
                                            <button>إاضافه إالي منتجاتك المفضلة<FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></button>
                                        </div>
                                    </div>
                                    <div className="product">
                                        <div className="container-img">
                                            <img src="https://k.nooncdn.com/t_desktop-thumbnail-v2/v1554877481/N23046819A_1.jpg"/>
                                        </div>
                                        <div className="container-body">
                                            <p className="owner" style={{display: this.state.toggleView === false ? 'none' : 'block'}}>أريستون</p>
                                            <h6>ديلونجي Multifunctional Coffee Machine 1450W ECAM650.55MS أسود/ فضي رقم الموديل: ECAM650.55MS</h6>
                                            <span className="price">
                                                <p class="real-price">2150.00 جنيه</p>
                                                <p class="fake-price">2220.00 جنيه</p>
                                            </span>
                                            <span class="discount">
                                                خصم 15%
                                            </span>
                                        </div>
                                        <div className="container-buttons"  style={{display: this.state.toggleView === false ? 'none' : 'flex'}}>
                                            <button> اضافه إلي عربة التسوق<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
                                            <button>إاضافه إالي منتجاتك المفضلة<FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></button>
                                        </div>
                                    </div>
                                </div>
                            <div className={`products-row ${this.state.toggleView === true ? 'list-view' : null }`}>
                                    <div className="product">
                                        <div className="container-img">
                                            <img src="https://k.nooncdn.com/t_desktop-thumbnail-v2/v1554877481/N23046819A_1.jpg"/>
                                        </div>
                                        <div className="container-body">
                                            <p className="owner" style={{display: this.state.toggleView === false ? 'none' : 'block'}}>أريستون</p>
                                            <h6>ديلونجي Multifunctional Coffee Machine 1450W ECAM650.55MS أسود/ فضي رقم الموديل: ECAM650.55MS</h6>
                                            <span className="price">
                                                <p class="real-price">2150.00 جنيه</p>
                                                <p class="fake-price">2220.00 جنيه</p>
                                            </span>
                                            <span class="discount">
                                                خصم 15%
                                            </span>
                                        </div>
                                        <div className="container-buttons"  style={{display: this.state.toggleView === false ? 'none' : 'flex'}}>
                                            <button> اضافه إلي عربة التسوق<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
                                            <button>إاضافه إالي منتجاتك المفضلة<FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></button>
                                        </div>
                                    </div>
                                    <div className="product">
                                        <div className="container-img">
                                            <img src="https://k.nooncdn.com/t_desktop-thumbnail-v2/v1554877481/N23046819A_1.jpg"/>
                                        </div>
                                        <div className="container-body">
                                            <p className="owner" style={{display: this.state.toggleView === false ? 'none' : 'block'}}>أريستون</p>
                                            <h6>ديلونجي Multifunctional Coffee Machine 1450W ECAM650.55MS أسود/ فضي رقم الموديل: ECAM650.55MS</h6>
                                            <span className="price">
                                                <p class="real-price">2150.00 جنيه</p>
                                                <p class="fake-price">2220.00 جنيه</p>
                                            </span>
                                            <span class="discount">
                                                خصم 15%
                                            </span>
                                        </div>
                                        <div className="container-buttons"  style={{display: this.state.toggleView === false ? 'none' : 'flex'}}>
                                            <button> اضافه إلي عربة التسوق<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
                                            <button>إاضافه إالي منتجاتك المفضلة<FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></button>
                                        </div>
                                    </div>
                                    <div className="product">
                                        <div className="container-img">
                                            <img src="https://k.nooncdn.com/t_desktop-thumbnail-v2/v1554877481/N23046819A_1.jpg"/>
                                        </div>
                                        <div className="container-body">
                                            <p className="owner" style={{display: this.state.toggleView === false ? 'none' : 'block'}}>أريستون</p>
                                            <h6>ديلونجي Multifunctional Coffee Machine 1450W ECAM650.55MS أسود/ فضي رقم الموديل: ECAM650.55MS</h6>
                                            <span className="price">
                                                <p class="real-price">2150.00 جنيه</p>
                                                <p class="fake-price">2220.00 جنيه</p>
                                            </span>
                                            <span class="discount">
                                                خصم 15%
                                            </span>
                                        </div>
                                        <div className="container-buttons"  style={{display: this.state.toggleView === false ? 'none' : 'flex'}}>
                                            <button> اضافه إلي عربة التسوق<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
                                            <button>إاضافه إالي منتجاتك المفضلة<FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></button>
                                        </div>
                                    </div>
                                    <div className="product">
                                        <div className="container-img">
                                            <img src="https://k.nooncdn.com/t_desktop-thumbnail-v2/v1554877481/N23046819A_1.jpg"/>
                                        </div>
                                        <div className="container-body">
                                            <p className="owner" style={{display: this.state.toggleView === false ? 'none' : 'block'}}>أريستون</p>
                                            <h6>ديلونجي Multifunctional Coffee Machine 1450W ECAM650.55MS أسود/ فضي رقم الموديل: ECAM650.55MS</h6>
                                            <span className="price">
                                                <p class="real-price">2150.00 جنيه</p>
                                                <p class="fake-price">2220.00 جنيه</p>
                                            </span>
                                            <span class="discount">
                                                خصم 15%
                                            </span>
                                        </div>
                                        <div className="container-buttons"  style={{display: this.state.toggleView === false ? 'none' : 'flex'}}>
                                            <button> اضافه إلي عربة التسوق<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
                                            <button>إاضافه إالي منتجاتك المفضلة<FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></button>
                                        </div>
                                    </div>
                                    <div className="product">
                                        <div className="container-img">
                                            <img src="https://k.nooncdn.com/t_desktop-thumbnail-v2/v1554877481/N23046819A_1.jpg"/>
                                        </div>
                                        <div className="container-body">
                                            <p className="owner" style={{display: this.state.toggleView === false ? 'none' : 'block'}}>أريستون</p>
                                            <h6>ديلونجي Multifunctional Coffee Machine 1450W ECAM650.55MS أسود/ فضي رقم الموديل: ECAM650.55MS</h6>
                                            <span className="price">
                                                <p class="real-price">2150.00 جنيه</p>
                                                <p class="fake-price">2220.00 جنيه</p>
                                            </span>
                                            <span class="discount">
                                                خصم 15%
                                            </span>
                                        </div>
                                        <div className="container-buttons"  style={{display: this.state.toggleView === false ? 'none' : 'flex'}}>
                                            <button> اضافه إلي عربة التسوق<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
                                            <button>إاضافه إالي منتجاتك المفضلة<FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></button>
                                        </div>
                                    </div>
                                </div>
                            <div className={`products-row ${this.state.toggleView === true ? 'list-view' : null }`}>
                                <div className="product">
                                    <div className="container-img">
                                        <img src="https://k.nooncdn.com/t_desktop-thumbnail-v2/v1554877481/N23046819A_1.jpg"/>
                                    </div>
                                    <div className="container-body">
                                        <p className="owner" style={{display: this.state.toggleView === false ? 'none' : 'block'}}>أريستون</p>
                                        <h6>ديلونجي Multifunctional Coffee Machine 1450W ECAM650.55MS أسود/ فضي رقم الموديل: ECAM650.55MS</h6>
                                        <span className="price">
                                            <p class="real-price">2150.00 جنيه</p>
                                            <p class="fake-price">2220.00 جنيه</p>
                                        </span>
                                        <span class="discount">
                                            خصم 15%
                                        </span>
                                    </div>
                                    <div className="container-buttons"  style={{display: this.state.toggleView === false ? 'none' : 'flex'}}>
                                        <button> اضافه إلي عربة التسوق<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
                                        <button>إاضافه إالي منتجاتك المفضلة<FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></button>
                                    </div>
                                </div>
                                <div className="product">
                                    <div className="container-img">
                                        <img src="https://k.nooncdn.com/t_desktop-thumbnail-v2/v1554877481/N23046819A_1.jpg"/>
                                    </div>
                                    <div className="container-body">
                                        <p className="owner" style={{display: this.state.toggleView === false ? 'none' : 'block'}}>أريستون</p>
                                        <h6>ديلونجي Multifunctional Coffee Machine 1450W ECAM650.55MS أسود/ فضي رقم الموديل: ECAM650.55MS</h6>
                                        <span className="price">
                                            <p class="real-price">2150.00 جنيه</p>
                                            <p class="fake-price">2220.00 جنيه</p>
                                        </span>
                                        <span class="discount">
                                            خصم 15%
                                        </span>
                                    </div>
                                    <div className="container-buttons"  style={{display: this.state.toggleView === false ? 'none' : 'flex'}}>
                                        <button> اضافه إلي عربة التسوق<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
                                        <button>إاضافه إالي منتجاتك المفضلة<FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></button>
                                    </div>
                                </div>
                                <div className="product">
                                    <div className="container-img">
                                        <img src="https://k.nooncdn.com/t_desktop-thumbnail-v2/v1554877481/N23046819A_1.jpg"/>
                                    </div>
                                    <div className="container-body">
                                        <p className="owner" style={{display: this.state.toggleView === false ? 'none' : 'block'}}>أريستون</p>
                                        <h6>ديلونجي Multifunctional Coffee Machine 1450W ECAM650.55MS أسود/ فضي رقم الموديل: ECAM650.55MS</h6>
                                        <span className="price">
                                            <p class="real-price">2150.00 جنيه</p>
                                            <p class="fake-price">2220.00 جنيه</p>
                                        </span>
                                        <span class="discount">
                                            خصم 15%
                                        </span>
                                    </div>
                                    <div className="container-buttons"  style={{display: this.state.toggleView === false ? 'none' : 'flex'}}>
                                        <button> اضافه إلي عربة التسوق<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
                                        <button>إاضافه إالي منتجاتك المفضلة<FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></button>
                                    </div>
                                </div>
                                <div className="product">
                                    <div className="container-img">
                                        <img src="https://k.nooncdn.com/t_desktop-thumbnail-v2/v1554877481/N23046819A_1.jpg"/>
                                    </div>
                                    <div className="container-body">
                                        <p className="owner" style={{display: this.state.toggleView === false ? 'none' : 'block'}}>أريستون</p>
                                        <h6>ديلونجي Multifunctional Coffee Machine 1450W ECAM650.55MS أسود/ فضي رقم الموديل: ECAM650.55MS</h6>
                                        <span className="price">
                                            <p class="real-price">2150.00 جنيه</p>
                                            <p class="fake-price">2220.00 جنيه</p>
                                        </span>
                                        <span class="discount">
                                            خصم 15%
                                        </span>
                                    </div>
                                    <div className="container-buttons"  style={{display: this.state.toggleView === false ? 'none' : 'flex'}}>
                                        <button> اضافه إلي عربة التسوق<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
                                        <button>إاضافه إالي منتجاتك المفضلة<FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></button>
                                    </div>
                                </div>
                                <div className="product">
                                    <div className="container-img">
                                        <img src="https://k.nooncdn.com/t_desktop-thumbnail-v2/v1554877481/N23046819A_1.jpg"/>
                                    </div>
                                    <div className="container-body">
                                        <p className="owner" style={{display: this.state.toggleView === false ? 'none' : 'block'}}>أريستون</p>
                                        <h6>ديلونجي Multifunctional Coffee Machine 1450W ECAM650.55MS أسود/ فضي رقم الموديل: ECAM650.55MS</h6>
                                        <span className="price">
                                            <p class="real-price">2150.00 جنيه</p>
                                            <p class="fake-price">2220.00 جنيه</p>
                                        </span>
                                        <span class="discount">
                                            خصم 15%
                                        </span>
                                    </div>
                                    <div className="container-buttons"  style={{display: this.state.toggleView === false ? 'none' : 'flex'}}>
                                        <button> اضافه إلي عربة التسوق<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
                                        <button>إاضافه إالي منتجاتك المفضلة<FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </Cent>
        )
    }
}

export default Center;