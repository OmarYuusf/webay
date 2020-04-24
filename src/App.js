import React, { Component } from "react";
import "./App.css";
import axios from "axios";
// Navbar Component import
import Navbar from "./Component/Navbar/Navbar";
import MobileNavbar from "./Component/Mobile-Navbar/Mobile-Navbar";

// HeaderSlider Component Import
import Slider from "./Component/Slider/Slider";

// PrimaryBanner Component Import
import PrimaryBanner from "./Component/PrimaryBanner/PrimaryBanner";

// HighCatagorie Component Import
import HighCata from "./Component/HighCata/HighCata";

// BestProducts Component Import
import BestProducts from "./Component/BestProducts/BestProducts";

// // BestSeller Component Import
// import BestSeller from "./Component/BestSeller/BestSeller";

// Banners Component Import
import Banners from "./Component/Banners/Banners";

// Ban Component Import
import Ban from "./Component/Banner/Banner";

// // Electronics Component Import
// import Electronics from "./Component/Electronics/Electronics";

// // LeastProducts Component Import
// import LeastProducts from "./Component/LeastProducts/LeastProducts";

// Footer Component Import
import Footer from "./Component/Footer/Footer";

// // ProductPage Component Import
import ProductPage from "./Component/ProductPage/ProductPage";

// // category Component import
import Category from './Component/Categories/Categories'

// // Forms Component import
// import Forms from './Component/Forms/Forms'

// // CartPage Component import
// import CartPage from './Component/CartPage/CartPage'

import Profile from "./Component/Profile/Profile";
import Favorite from "./Component/Favorite/Favorite";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      language: "ar",
      width: window.innerWidth,
    };
  }

  changeLanguage = (e) => {
    e.preventDefault();

    this.setState({
      language: this.state.language === "en" ? "ar" : "en",
    });
  };
  render() {
    return (
      <div className="App" basename="/webay/">
        <div className="Navbar-container">
          {this.state.width <= 600 ? (
            <div className="navbar-mob">
              <MobileNavbar
                language={this.state.language}
                changeLanguage={(e) => this.changeLanguage(e)}
              />
            </div>
          ) : (
            <div className="navbar-pc">
              <Navbar
                language={this.state.language}
                changeLanguage={(e) => this.changeLanguage(e)}
              />
            </div>
          )}
        </div>
        {/* <Slider language={this.state.language} />
        <PrimaryBanner language={this.state.language} />
        <HighCata language={this.state.language} />
        <BestProducts language={this.state.language} />
        <Banners />
        {/* <BestSeller language={this.state.language} /> */}
        {/* <Ban /> */}
        {/* <Electronics language={this.state.language} />
        <LeastProducts language={this.state.language} /> */}
        <Profile
          language={this.state.language}
          changeLanguage={e => this.changeLanguage(e)}
        />
        <Favorite language={this.state.language} />
        <Footer language={this.state.language} />
        {/* <Category
          language={this.state.language}
          changeLanguage={(e) => this.changeLanguage(e)}
          width={this.state.width}
        /> */}
        {/* <ProductPage
          language={this.state.language}
          changeLanguage={e => this.changeLanguage(e)}
          width={this.state.width}
        />  */}

        {/* 
      <CartPage language={this.state.language} changeLanguage={(e) => this.changeLanguage(e)}/> />


      }
        {/* <Forms
          language={this.state.language}
          changeLanguage={e => this.changeLanguage(e)}
        /> */}
      </div>
    );
  }
}

export default App;
