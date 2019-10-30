import React from 'react';

// Styled-Component
import styled from 'styled-components'

// FontAwsome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// FontAwsome Icons
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import { faTruck } from '@fortawesome/free-solid-svg-icons'
import { faUserCheck } from '@fortawesome/free-solid-svg-icons'
import { faPercentage } from '@fortawesome/free-solid-svg-icons'


// Component Style 
const FirstNav = styled.div`
    display:flex;
    justify-content: space-between;
    background:rgb(3, 169, 244);
    direction:rtl;
    padding:10px 15px;
    font-size:14px;
    color:#FFF;

    .nav-info{
        display:flex;

        div{
            display:flex;
            align-items:center;

            p{
                margin:0px;
                margin-inline-end:14px;
                margin-inline-start:6px;

                @media (max-width: 1440px){ 
                    font-size:14px
                    }

                @media (max-width: 1024px){ 
                    font-size:10px;
                    margin-inline-end:8px;
                    margin-inline-start:5px;
                }

                @media (max-width: 768px){ 
                    font-size:8px;
                    margin-inline-end:5px;
                    margin-inline-start:4px;
                }
                
            }

            .fa-truck{
                    @media (max-width: 1024px){ 
                        font-size:12px
                    }

                    @media (max-width: 768px){ 
                        font-size:8px
                    }
                }

                .fa-user-check{
                    @media (max-width: 1024px){ 
                        font-size:12px
                    }

                    @media (max-width: 768px){ 
                        font-size:8px
                    }
                }
                .fa-percentage{
                    @media (max-width: 1024px){ 
                        font-size:12px;
                    }

                    @media (max-width: 768px){ 
                        font-size:8px;

                    }
                }
        }
    }

    .languages{
        display:flex;

        span:first-of-type{
            display:flex;
            align-items:center;

            
            .fa-globe-americas{
                @media (max-width: 1024px){ 
                    font-size:12px;
                }

                @media (max-width: 768px){ 
                    font-size:9px;
                    display:none
                }
            }
                        
            p{
                margin:0px;
                margin-inline-start:5px;

                @media (max-width: 1440px){ 
                    font-size:14px
                    }

                @media (max-width: 1024px){ 
                    font-size:10px
                }

                @media (max-width: 768px){ 
                    display:none
                }
            }
        }
        span{
            display:flex;
            align-items:center;
            a{
                margin-inline-start:10px;

                @media (max-width: 1440px){ 
                    font-size:14px
                    }

                @media (max-width: 1024px){ 
                    font-size:10px
                }

                @media (max-width: 768px){ 
                    font-size:9px
                }
            }
        }
    }

`

class FirstNavbar extends React.Component {

    render() {
        return(
            <FirstNav className="first-nav" style={{direction:this.props.language === 'en' ? "ltr" : "rtl"}}>
                <div className="nav-info" style={{direction:this.props.language === 'en' ? "ltr" : "rtl"}}>
                    <div>
                        <FontAwesomeIcon size="lg" icon={faTruck}></FontAwesomeIcon>
                        {this.props.language === 'en' ? (<p>charge for fr1ee first 400 ryal</p>) :(<p>توصيل مجاني عالي المنتجات فوق 400 ريال</p>)}
                    </div>
                    <div>
                        <FontAwesomeIcon size="lg" icon={faUserCheck}></FontAwesomeIcon>
                        {this.props.language === 'en' ? (<p>charge for fr2ee first 400 ryal</p>): (<p>ارجاع مجانى بسهولة</p>)}  
                    </div>
                    <div>
                        <FontAwesomeIcon size="lg" icon={faPercentage}></FontAwesomeIcon>
                        {this.props.language === 'en' ? (<p>charge for f3ree first 400 ryal</p>) : (<p>افضل العروض</p>)}
                    </div>
                </div>
                <div className="languages">
                    <span>
                        <FontAwesomeIcon icon={faGlobeAmericas}></FontAwesomeIcon>
                        {this.props.language === "en" ? (<p>Langauge</p>) : (<p>اللغه</p>)}
                    </span>
                    <span>
                        <a href="#" onClick={this.props.changeLanguage}>{this.props.language === "en" ? 'العربيه' : 'English'}</a>
                    </span>
                </div>
            </FirstNav>
        )
    }
}

export default FirstNavbar;