import React from 'react';

// Styled-Component
import styled from 'styled-components'

// FontAwsome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// FontAwsome Icons
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'


//Component Style
const Nav = styled.div`
    background:#03A9F4;
    display:flex;
    padding:10px 15px;
    padding-bottom:20px;
    font-size:14px;

    a{
        color:#FFF
    }

    .cartsAndLogIn{
        flex:1;
        color:#FFF;
        display:flex;
        align-items:center;

        a{

            margin-inline-start:6px;

                @media (max-width: 1440px){ 
                     font-size:14px;
                    }

                @media (max-width: 1024px){ 
                    font-size:10px;
                }

                @media (max-width: 768px){ 
                    font-size:8px;
                    display:none;
                }
        }

        .fa-shopping-cart{
            position:relative;

                @media (max-width: 2560px){ 
                display:inline;
                }

                @media (max-width: 1024px){
                    display:inline;
                }

                @media (max-width: 768px){ 
                    font-size:12px
                }

                @media (max-width: 425px){
                    display:inline;
                    font-size:14px
                }
        }

        .fa-user{
            margin-inline-end:8px;

                @media (max-width: 2560px){ 
                display:none;
                }

                @media (max-width: 1024px){
                    display:none;
                }

                @media (max-width: 768px){ 
                    display:inline;
                    font-size:12px
                }

                @media (max-width: 425px){
                    display:inline;
                    font-size:14px
                }
        }

        span{
            display:flex;
            align-items:center;
            position:relative;

             p {
                @media (max-width: 1440px){ 
                     font-size:14px;
                    }

                @media (max-width: 1024px){ 
                    font-size:10px;
                }

                @media (max-width: 768px){ 
                    font-size:8px;
                    display:none
                }
            }
        }

        span:first-of-type{
            margin-inline-end:12px;

            @media (max-width: 768px){ 
                margin-inline-end:16px;
                }

            p{
                margin:0px;
                margin-inline-start:6px;
            }
        }
    }

    .SearchBoxAndLogo{
        flex:2;
        display:flex;
        align-items:center;

        @media (max-width: 768px){ 
            justify-content:flex-start;
            flex:3;
            }

        h1{
            margin:0px; 
            margin-inline-end:25px;

            @media (max-width: 1024px){
                margin-inline-end:25px;
                font-size:19px !important;
            }

            @media (max-width: 768px){ 
                margin-inline-end:5px;
                font-size:16px !important;

            }

            @media (max-width: 425px){ 
                margin-inline-end:0px;
                font-size:16px !important;
            }
        }

        div{
            
            span{
                position: relative;
                input{
                    width:650px;
                    padding:10px 10px;
                    border-radius:30px;
                    border:0px;
                    transition:all .2s ;
                    outline:none;
                    font-size:13px;

                    @media (max-width: 1440px){ 
                     width:500px;
                    }

                    @media (max-width: 1024px){ 
                     width:350px;
                    }

                    @media (max-width: 768px){ 
                        width:200px;
                        padding:8px 6px;
                        font-size:8px;
                    }

                    :focus{
                        box-shadow:4px 4px 3px rgba(0,0,0,.15);
                    }
                }

                .fa-search{
                    position:absolute;
                    top:30%;
                    left:${props => props.language === 'en' ? '' : '15px'} ;
                     /* ---------------- Search Error ----------  */

                     @media (max-width: 768px){ 
                        font-size:10px;
                        top:40%;
                        left:10px;
                    }
                }
            }
        }
    }
`

class SecNavbar extends React.Component {
    render() {
        return(
            <Nav  style={{direction:this.props.language === 'en' ? "rtl" : "ltr"}}>
                <div className="cartsAndLogIn">
                    <span>
                        <FontAwesomeIcon className="searchIcon" icon={faShoppingCart} size="lg"></FontAwesomeIcon>
                        {this.props.language === 'en' ? (<p>Cart</p>) : (<p>عربة التسوق</p>)}
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faUser} size="lg"></FontAwesomeIcon>
                        {this.props.language === 'en' ?  (<a href="#">Sign in or Sign up</a>) :(<a href="#">تسجيل الدخول أو الاشتراك</a>)}
                    </span>
                </div>
                <div className="SearchBoxAndLogo" style={{direction:this.props.language === 'en' ? "ltr" : "rtl",
                                                         textAlign:this.props.language === 'en' ? "left" : "right"}}>
                    <h1>لوجو هنا</h1>                                         
                    <div>
                        <span>
                            <input type="text" placeholder={this.props.language === 'en' ? "What are you looking for ?" : 'ما الذى تبحث عنه ؟'}/>
                            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                            {/* ---------------- Search Error ----------  */}
                        </span>
                    </div>
                </div>
            </Nav>
        )
    }
}

export default SecNavbar;