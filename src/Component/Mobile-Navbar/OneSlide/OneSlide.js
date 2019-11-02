import React from 'react';

// Styled-Component
import styled from 'styled-components'

// FontAwsome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// FontAwsome Icons
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faAlignRight } from '@fortawesome/free-solid-svg-icons'
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Slide = styled.div`
    color:#FFF;
    display:flex;
    background:rgb(3, 169, 244);
    justify-content:space-between;
    padding:18px 15px;
    position:relative;

    > div {
        display:flex;

        .fa-shopping-cart{
            margin-inline-end:15px;
        }

        .fa-align-right{
            margin-inline-start:15px;
        }

        .fa-align-left{
            margin-inline-start:15px;
        }

        a{
            color:#FFF;
            text-decoration:none;
        }
    }

    aside{
        position:absolute;
        width:100%;
        height:100%;
        top:100%;
        background:#FFF;
        visibility:hidden;
        left:0px;
        z-index:-1;
        transition:all .2s;
        z-index:99999999;
        
        span{
            display:block;
            position:relative;
            overflow:hidden;

            input{
                width:95%;
                border:0px;
                padding:18px 0px;
                padding-inline-start:5%;
                display:block;
                margin:auto;
                border-bottom:1px solid #999;
            }

            .fa-search{
                position:absolute;
                top:34%;
                left:18px;
                z-index:2;
                color:#999;
            }
        }
    }
`

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
            <Slide style={{direction:this.props.language === 'en' ? "ltr" : "rtl"}}>
                <div>
                    <div>
                        <FontAwesomeIcon className="searchIcon" icon={faShoppingCart} size="md"></FontAwesomeIcon>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faSearch}  size="md" onClick={this.searchChange}></FontAwesomeIcon>
                    </div>
                </div>
                <div>
                    <div>
                        <a href="#">{this.props.language === 'en' ? 'Logo' : " هنا لوجو"}</a>
                    </div>
                    <div onClick={this.props.action}>
                        {this.props.language === "en" ? 
                        (<FontAwesomeIcon size="md" icon={faAlignRight}></FontAwesomeIcon>) : (<FontAwesomeIcon size="md" icon={faAlignLeft}></FontAwesomeIcon>)}
                    </div>
                </div>
                <aside style={{top: this.state.search === false ? '0px' : '100%',
                                visibility: this.state.search === false ? "hidden" : "visible"}}>
                    <span>
                        <FontAwesomeIcon icon={faSearch}  size="sm"></FontAwesomeIcon>
                        <input type="text"  
                        placeholder={this.props.language === 'en' ? "What are you looking for ?" : 'ما الذى تبحث عنه ؟'}
                        style={{textAlign: this.props.language === 'en' ? "left": "right"}}/>
                    </span>
                </aside>
            </Slide>
        )
    }
}

export default OneSlide ; 