import React from 'react';
import "./Center.css"

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
            <div style={{direction:this.props.language === 'en' ? "ltr" : "rtl",
                        textAlign:this.props.language === 'en' ? "left" : "right"}} className="cent">
                
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
                <div className="head-center">
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
                                    <p className="real-price">2150.00 جنيه</p>
                                    <p className="fake-price">2220.00 جنيه</p>
                                </span>
                                <span className="discount">
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
                                    <p className="real-price">2150.00 جنيه</p>
                                    <p className="fake-price">2220.00 جنيه</p>
                                </span>
                                <span className="discount">
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
                                    <p className="real-price">2150.00 جنيه</p>
                                    <p className="fake-price">2220.00 جنيه</p>
                                </span>
                                <span className="discount">
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
                                    <p className="real-price">2150.00 جنيه</p>
                                    <p className="fake-price">2220.00 جنيه</p>
                                </span>
                                <span className="discount">
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
        )
    }
}

export default Center;