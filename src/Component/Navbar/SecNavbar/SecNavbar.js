import React from 'react';

import "./SecNavbar.css"

// FontAwsome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// FontAwsome Icons
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'


class SecNavbar extends React.Component {
    render() {
        return(
            <div  style={{direction:this.props.language === 'en' ? "rtl" : "ltr"}} className="nav">
                <div className="cartsAndLogIn">
                    <span>
                        <FontAwesomeIcon className="searchIcon" icon={faShoppingCart} size="lg"></FontAwesomeIcon>
                        {this.props.language === 'en' ? (<p>Cart</p>) : (<p>عربة التسوق</p>)}
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faUser} size="lg"></FontAwesomeIcon>
                        {this.props.language === 'en' ?  (<a href="/#">Sign in or Sign up</a>) :(<a href="/#">تسجيل الدخول أو الاشتراك</a>)}
                    </span>
                </div>
                <div className="SearchBoxAndLogo" style={{direction:this.props.language === 'en' ? "ltr" : "rtl",
                                                         textAlign:this.props.language === 'en' ? "left" : "right"}}>
                    <h1>لوجو هنا</h1>                                         
                    <div>
                        <span>
                            <input type="text" placeholder={this.props.language === 'en' ? "What are you looking for ?" : 'ما الذى تبحث عنه ؟'}/>
                            <FontAwesomeIcon icon={faSearch} style={{left:this.props.language === "ar" ? '15px' : null , right:this.props.language === "en" ? '15px' :null}}></FontAwesomeIcon>
                            {/* ---------------- Search Error ----------  */}
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default SecNavbar;