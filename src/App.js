import React, { Component } from "react";
import "./App.css";

// Styled-Component
import styled from 'styled-components'


// Navbar Component import 
import Navbar from './Component/Navbar/Navbar';
import MobileNavbar from './Component/Mobile-Navbar/Mobile-Navbar'

// HeaderSlider Component Import 
import Slider from './Component/Slider/Slider'

// PrimaryBanner Component Import 
import PrimaryBanner from "./Component/PrimaryBanner/PrimaryBanner";

// HighCatagorie Component Import 
import HighCata from "./Component/HighCata/HighCata";

// BestSeller Component Import 
import BestProducts from "./Component/BestProducts/BestProducts";

// BestSeller Component Import 
import BestSeller from "./Component/BestSeller/BestSeller";

// Banners Component Import 
import Banners from "./Component/Banners/Banners";

// Banners Component Import 
import Ban from "./Component/Banner/Banner";

// Banners Component Import 
import Electronics from "./Component/Electronics/Electronics";

// Banners Component Import 
import Mobiles from "./Component/Mobiles/Mobiles";

// Footer Component Import 
import Footer from "./Component/Footer/Footer";

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      language  : 'ar',
      width: window.innerWidth
    }
  }

  

  changeLanguage = (e) => {
    e.preventDefault();

    this.setState({
      language : this.state.language === 'en' ? "ar" : 'en'
    })

  }

  render(){
    return(
    <div className="App" >
      <div className="Navbar-container">  
        {this.state.width <= 425 ? 
          (
          <div className="navbar-mob">
            <MobileNavbar language={this.state.language} changeLanguage={(e) => this.changeLanguage(e)}/>
          </div>
          ):
          <div className="navbar-pc">
            <Navbar language={this.state.language} changeLanguage={(e) => this.changeLanguage(e)}/>
          </div>}
      </div>
      <div className="Slider">
        <Slider language={this.state.language}/>
      </div>
      <div className="Primary-banner">
          <PrimaryBanner language={this.state.language}/>
      </div>
      <div className="HighCata">
        <HighCata language={this.state.language}/>
      </div>
      <div className="BestProducts">
          <BestProducts language={this.state.language}/>
      </div>
      <div className="Banners">
          <Banners />
      </div>
      <div className="BestSeller">
          <BestSeller language={this.state.language}/>
      </div>
      <div className="Banner">
          <Ban />
      </div>
      <div className="Electronics">
          <Electronics language={this.state.language}/>
      </div>
      <div className="Mobiles">
          <Mobiles language={this.state.language}/>
      </div>
      <div className="Footer">
          <Footer language={this.state.language} />
      </div>
    </div>
    )
  }
}

export default App;