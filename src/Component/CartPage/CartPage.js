import React from 'react';

// components import 
import Navbar from '../Navbar/Navbar'
import MobileNavbar from '../Mobile-Navbar/Mobile-Navbar'
import Footer from '../Footer/Footer'
import ProductsAdded from './ProductsAdded/ProductsAdded'
import ProductsPrice from './ProductsPrice/ProductsPrice'

import { Container, Row, Col} from 'react-bootstrap'

// Styled-Component
import styled from 'styled-components'

const Cart = styled.div`
    
    .containerCart{
        margin-top:25px;

        .row{
            > div{
                
            }
        }
    }

`

class CartPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            ProductsInCart : [
                {
                    imgSrc:'https://k.nooncdn.com/t_desktop-pdp-v1/v1564553385/N28835972A_1.jpg',
                    owner:'اسم الشركه',
                    productName:'32-Inch HD 768P LED TV Black',
                    price:399.55
                },
                {
                    imgSrc:'https://k.nooncdn.com/t_desktop-pdp-v1/v1564553385/N28835972A_1.jpg',
                    owner:'اسم الشركه',
                    productName:'32-Inch HD 768P LED TV Black',
                    price:12550.00
                },
                {
                    imgSrc:'https://k.nooncdn.com/t_desktop-pdp-v1/v1564553385/N28835972A_1.jpg',
                    owner:'اسم الشركه',
                    productName:'32-Inch HD 768P LED TV Black',
                    price:7000.00
                },
                {
                    imgSrc:'https://k.nooncdn.com/t_desktop-pdp-v1/v1564553385/N28835972A_1.jpg',
                    owner:'اسم الشركه',
                    productName:'32-Inch HD 768P LED TV Black',
                    price:500.00
                }
            ]
        }
    }


    render(){
        return(
            <Cart style={{direction:this.props.language === 'en' ? "ltr" : "rtl",
                    textAlign:this.props.language === 'en' ? "left" : "right"}}>

                {this.props.width <= 600 ? (
                    <MobileNavbar language={this.props.language} changeLanguage={this.props.changeLanguage}/>
                ):(
                    <Navbar language={this.props.language} changeLanguage={this.props.changeLanguage}/>
                )}
                
                <Container fluid={false} className="containerCart">
                    <Row>
                        <Col md={8}>
                            <ProductsAdded ProductsInCart={this.state.ProductsInCart}/>
                        </Col>
                        <Col md={4}>
                            <ProductsPrice ProductsInCart={this.state.ProductsInCart}/>
                        </Col>
                    </Row>
                </Container>

                <Footer />
            </Cart>
            
        )
    }
}

export default CartPage;