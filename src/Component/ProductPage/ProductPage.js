import React from 'react' ;

import Navbar from '../Navbar/Navbar'
import MobileNavbar from '../Mobile-Navbar/Mobile-Navbar'
import Product from './Product/Product'
// import ProductInformation from './productInformation/ProductInformation'
// footer import
import Footer from '../Footer/Footer'

// Styled-Component
import styled from 'styled-components'

import { Container, Row, Col } from 'react-bootstrap'

const ProductsContainer = styled.div`

`

class ProductPage extends React.Component {
    render() {
        return(
            <ProductsContainer style={{direction:this.props.language === 'en' ? "ltr" : "rtl",
                                        textAlign:this.props.language === 'en' ? "left" : "right"}}>
                {this.props.width <= 600 ? (
                    <MobileNavbar language={this.props.language} changeLanguage={this.props.changeLanguage}/>
                ):(
                    <Navbar language={this.props.language} changeLanguage={this.props.changeLanguage}/>
                )}
                <Product />
                {/* <ProductInformation /> */}
                <Footer />
            </ProductsContainer>
        )
    }
}

export default ProductPage ;