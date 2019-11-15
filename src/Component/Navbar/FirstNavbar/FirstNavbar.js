import React from 'react';

import "./FirstNavbar.scss"

// FontAwsome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// FontAwsome Icons
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import { faTruck } from '@fortawesome/free-solid-svg-icons'
import { faUserCheck } from '@fortawesome/free-solid-svg-icons'
import { faPercentage } from '@fortawesome/free-solid-svg-icons'


class FirstNavbar extends React.Component {

    render() {
        return(
            <div className="first-nav" style={{direction:this.props.language === 'en' ? "ltr" : "rtl"}}>
                <div className="nav-info" style={{direction:this.props.language === 'en' ? "ltr" : "rtl"}}>
                    <div>
                        <FontAwesomeIcon size="sm" icon={faTruck}></FontAwesomeIcon>
                        {this.props.language === 'en' ? (<p>charge for fr1ee first 400 ryal</p>) :(<p>توصيل مجاني عالي المنتجات فوق 400 ريال</p>)}
                    </div>
                    <div>
                        <FontAwesomeIcon size="sm" icon={faUserCheck}></FontAwesomeIcon>
                        {this.props.language === 'en' ? (<p>charge for fr2ee first 400 ryal</p>): (<p>ارجاع مجانى بسهولة</p>)}  
                    </div>
                    <div>
                        <FontAwesomeIcon size="sm" icon={faPercentage}></FontAwesomeIcon>
                        {this.props.language === 'en' ? (<p>charge for f3ree first 400 ryal</p>) : (<p>افضل العروض</p>)}
                    </div>
                </div>
                <div className="languages">
                    <span>
                        <FontAwesomeIcon icon={faGlobeAmericas}></FontAwesomeIcon>
                        {this.props.language === "en" ? (<p>Langauge</p>) : (<p>اللغه</p>)}
                    </span>
                    <span>
                        <a href="/#" onClick={this.props.changeLanguage}>{this.props.language === "en" ? 'العربيه' : 'English'}</a>
                    </span>
                </div>
            </div>
        )
    }
}

export default FirstNavbar;