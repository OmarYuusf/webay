import React from 'react';

import "./OneSlide.css"

// FontAwsome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// FontAwsome Icons
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faAlignRight } from '@fortawesome/free-solid-svg-icons'
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

class OneSlide extends React.Component {
    constructor(props) {
        super(props) ;

        this.state = {
            search : false
        }
    }

    searchChange = () => {
        this.setState({
            search : !this.state.search
        })
    }
    render (){
        return(
            <div style={{direction:this.props.language === 'en' ? "ltr" : "rtl"}} className="slide">
                <div>
                    <div onClick={this.props.action}>
                        {this.props.language === "en" ? 
                        (<FontAwesomeIcon size="sm" icon={faAlignLeft}></FontAwesomeIcon>) : (<FontAwesomeIcon size="sm" icon={faAlignRight}></FontAwesomeIcon>)}
                    </div>
                    <div>
                        <a href="/#">{this.props.language === 'en' ? 'Logo' : " هنا لوجو"}</a>
                    </div>
                </div>
                <div>
                    <div>
                        <FontAwesomeIcon icon={faSearch}  size="sm" onClick={this.searchChange}></FontAwesomeIcon>
                    </div>
                    <div>
                        <FontAwesomeIcon className="searchIcon" icon={faShoppingCart} size="sm"></FontAwesomeIcon>
                    </div>
                </div>
                <aside style={{top: this.state.search === false ? '0px' : '100%',
                                visibility: this.state.search === false ? "hidden" : "visible"}}>
                    <span>
                        <FontAwesomeIcon icon={faSearch}  size="sm"  style={{left:this.props.language === "ar" ? '18px' : null , right:this.props.language === "en" ? '18px' :null}}></FontAwesomeIcon>
                        <input type="text"  
                        placeholder={this.props.language === 'en' ? "What are you looking for ?" : 'ما الذى تبحث عنه ؟'}
                        style={{textAlign: this.props.language === 'en' ? "left": "right"}}/>
                    </span>
                </aside>
            </div>
        )
    }
}

export default OneSlide ; 