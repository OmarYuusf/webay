import React from 'react';


// FontAwsome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// FontAwsome Icons
import { faList, faFilter } from '@fortawesome/free-solid-svg-icons'
import { faBorderAll } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

// Styled-Component
import styled from 'styled-components'

import { Accordion, Card, Container, Row, Form } from 'react-bootstrap'

const Cent = styled.div`
    margin-top:80px;
    display:flex;

    
    @media (max-width: 768px){
        margin-top:40px;
    }

    .sideBar{
        width:15%;
        margin:0px 15px;

        @media (max-width: 1024px){ 
            width:23%;
            margin:0px 5px;
        }

        @media (max-width: 600px){ 
            position:fixed;
            width:100%;
            bottom:-100%;

        }

        > div {

            h4{
                border-bottom:1px solid #333;
                margin:0px;
                padding:10px 0px ;
                font-size:21px;

                @media (max-width: 768px){ 
                font-size:16px;
                }
            }

            table{
                width:100%;
                margin-top:10px;    
                tr{
                    display:flex;
                    justify-content:space-between;
                    margin:8px 0px ;
                    color:#777;
                    font-size:14px;

                    td{
                        @media (max-width: 768px){ 
                        font-size:11px;
                        }
                    }
                }
            }
        }
    }

    .sideBar-Mobile{
        @media (min-width: 601px){ 
            display:none;
        }

        transition:all .3s ;
        display:block;
        margin:0px;
        position:fixed;
        bottom:0px;
        left:0px;
        width:100%;
        background:#212121;

        > div {
            padding:6px;

            td{
                display:flex;
                align-items:center;
            }

            input{
                margin-inline-end:6px;
            }
        }

        h4{
            color:#eee;

        }
    }
}

    .head{
        width:85%;
        margin:0px 15px;

        @media (max-width: 1024px){ 
            margin:0px 5px;
        }

        @media (max-width:600px){ 
            width:100%;
        }

        h6{
            margin:0px;
        }

        .filter-sort{
            width:100%;
            display:flex;
            justify-content:space-between;
            align-items:center;
            
            @media (max-width: 768px){
                flex-direction:column
            }

            > div:first-of-type{

                @media (max-width: 768px){
                    margin:15px;
                }

                span{
                    font-weight:800
                }
            }

            > div:last-of-type{
                display:flex;
                align-items:center;

                > span{
                    margin:0px 18px;

                    @media (max-width: 600px){ 
                        margin:0px 5px;
                    }

                    @media (max-width: 1024px){ 
                        margin:0px 5px;
                    }

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

        .filter-product{
            @media (min-width: 600px){ 
                display:none;
            }
            .icon{
                position:fixed;
                width:40px;
                height:40px;
                bottom:15px;
                right:10px;
                border-radius:50%;
                background:#03a9f4;
                display:flex;
                justify-content:center;
                align-items:center;

                svg{
                    color:#fff
                }
            }
        }
    }

    .products{
        margin-top:25px;
        width:100%;
        display:grid;
        grid-template-columns:1fr 1fr 1fr 1fr 1fr;

        @media (max-width: 1144px){ 
            grid-template-columns:1fr 1fr 1fr 1fr ;
        }

        @media (max-width: 1024px){ 
            grid-template-columns:1fr 1fr 1fr ;
        }

        @media (max-width: 768px){ 
            grid-template-columns:1fr 1fr;
        }
        
        @media (max-width: 600px){ 
            grid-template-columns:1fr 1fr;
        }

            > div{
                margin:8px;
                cursor: pointer;

                .container-img{
                    display:flex;
                    justify-content:center;
                    align-items:center;

                    img{
                        height:250px;

                        @media (max-width: 1024px){ 
                            height:180px;
                        }
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
        grid-template-columns:1fr !important;
        margin-top:40px;
        .product {
            width:100%;
            display:flex;
            border-bottom:1px solid rgba(0,0,0,.1) ;
            padding:10px 0px;
            
            .container-img{
                img{
                    height:150px;
                }
            }
            
            .container-body{
                padding:8px 0px;

                .owner{
                    margin-bottom:4px;
                    font-size:13px;
                    color:#777;
                }

                h6{
                    width:60%;
                    font-size:13px;

                }

                .price{
                    width:60%;
                    display:flex;
                    margin-top:8px;
                    display:flex;
                    align-items:center;

                    .real-price{
                        color:#03A9F4;
                        font-size:21px;
                        font-weight:800;
                    }

                    .fake-price{
                        font-size:12px;
                        color:#777;
                        margin-inline-start:10px;
                        text-decoration:line-through
                    }   
                }

                .discount{
                    background:rgba(0,255,43,.3);
                    font-size:12px;
                    padding:3px 15px;
                }
            }
            
            .container-buttons{
                flex:1;
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:center;

                button{
                    font-size:12px;
                    display:block;
                    width:220px;
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
    
`

class Center extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            classes : ["sideBar"],
            ProductsDirection: ["products"],
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

    handleFilter = () => {
        this.state.classes.length > 1 ? this.setState({classes: ["sideBar"]}) : this.setState({classes: ["sideBar", "sideBar-Mobile"]})
    }

    handleView = () => {
        this.state.ProductsDirection.length > 1 ? this.setState({ProductsDirection: ["products"],toggleView:!this.state.toggleView}) : this.setState({ProductsDirection: ["products", "list-view"],toggleView:!this.state.toggleView});
    }
    render() {
        return(
            <Cent style={{direction:this.props.language === 'en' ? "ltr" : "rtl",
                        textAlign:this.props.language === 'en' ? "left" : "right"}}>
                
                <div className={this.state.classes.join(' ')}>
                    <div>
                        <h4>
                            الفئه   
                        </h4>
                        <table>
                            <tbody>
                                <tr>
                                    <td>القسم</td>
                                    <td>(رقم هنا)</td>
                                </tr>
                                <tr>
                                    <td>القسم</td>
                                    <td>(رقم هنا)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h4>
                         الماركه   
                        </h4>
                        <table>
                            <tbody>
                                <tr>
                                    <td><input type="checkbox" /> القسم </td>
                                    <td>(رقم هنا)</td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /> القسم </td>
                                    <td>(رقم هنا)</td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /> القسم </td>
                                    <td>(رقم هنا)</td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /> القسم </td>
                                    <td>(رقم هنا)</td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /> القسم </td>
                                    <td>(رقم هنا)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
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

                                {window.innerWidth < 600 ? null 
                                : [<label>جنب بعض</label>,
                                <span onClick={this.handleView} >
                                    {this.state.toggleView === true ? (<FontAwesomeIcon icon={faBorderAll}></FontAwesomeIcon>)
                                                                     : <FontAwesomeIcon icon={faList}></FontAwesomeIcon>}
                                </span>]
                                }
                            </span>
                        </div>
                    </div>

                    <div className="filter-product">
                        <div className="icon" onClick={this.handleFilter}>
                            <FontAwesomeIcon icon={faFilter} size="xs"></FontAwesomeIcon>
                        </div>
                    </div>

                    <div className={this.state.ProductsDirection.join(' ')}>
                        <div className="product">
                            <div className="container-img">
                                <img src="https://k.nooncdn.com/t_desktop-pdp-v1/v1569837374/N30427673A_1.jpg" alt="product"/>
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
                                <img src="https://k.nooncdn.com/t_desktop-thumbnail-v2/v1554877481/N23046819A_1.jpg" alt="product"/>
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
                                <img src="https://k.nooncdn.com/t_desktop-thumbnail-v2/v1554877481/N23046819A_1.jpg" alt="product"/>
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
                                <img src="https://k.nooncdn.com/t_desktop-thumbnail-v2/v1554877481/N23046819A_1.jpg" alt="product"/>
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
                                <img src="https://k.nooncdn.com/t_desktop-thumbnail-v2/v1554877481/N23046819A_1.jpg" alt="product"/>
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
                                <img src="https://k.nooncdn.com/t_desktop-thumbnail-v2/v1554877481/N23046819A_1.jpg" alt="product"/>
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
                                <img src="https://k.nooncdn.com/t_desktop-thumbnail-v2/v1554877481/N23046819A_1.jpg" alt="product"/>
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
                                <img src="https://k.nooncdn.com/t_desktop-thumbnail-v2/v1554877481/N23046819A_1.jpg" alt="product"/>
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
                                <img src="https://k.nooncdn.com/t_desktop-thumbnail-v2/v1554877481/N23046819A_1.jpg" alt="product"/>
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
                                <img src="https://k.nooncdn.com/t_desktop-thumbnail-v2/v1554877481/N23046819A_1.jpg" alt="product"/>
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
                                <img src="https://k.nooncdn.com/t_desktop-thumbnail-v2/v1554877481/N23046819A_1.jpg" alt="product"/>
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
                                <img src="https://k.nooncdn.com/t_desktop-thumbnail-v2/v1554877481/N23046819A_1.jpg" alt="product"/>
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
                                <img src="https://k.nooncdn.com/t_desktop-thumbnail-v2/v1554877481/N23046819A_1.jpg" alt="product"/>
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
                                <img src="https://k.nooncdn.com/t_desktop-thumbnail-v2/v1554877481/N23046819A_1.jpg" alt="product"/>
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
                                <img src="https://k.nooncdn.com/t_desktop-thumbnail-v2/v1554877481/N23046819A_1.jpg" alt="product"/>
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
            </Cent>
        )
    }
}

export default Center;