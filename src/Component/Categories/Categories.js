import React from 'react';

// Components import
import Navbar from '../Navbar/Navbar'
import MobileNavbar from '../Mobile-Navbar/Mobile-Navbar'
import Footer from '../Footer/Footer'
import Header from './Header/Header'
import Center from './Center/Center'

// Styled-Component
import styled from 'styled-components'

const Category = styled.div`

`

class Categories extends React.Component {
    render() {
        return(
            <Category style={{direction:this.props.language === 'en' ? "ltr" : "rtl",
                        textAlign:this.props.language === 'en' ? "left" : "right"}}>

                {/* {this.props.width <= 600 ? (
                    <MobileNavbar language={this.props.language} changeLanguage={this.props.changeLanguage}/>
                ):(
                    <Navbar language={this.props.language} changeLanguage={this.props.changeLanguage}/>
                )} */}

                <Header language={this.props.language}/>
                <Center language={this.props.language}/>
                {/* <Footer /> */}
            </Category>
        )
    }
}

export default Categories;