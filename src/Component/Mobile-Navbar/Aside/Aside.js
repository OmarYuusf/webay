import React from 'react';

// Styled-Component
import styled from 'styled-components'

// FontAwsome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// FontAwsome Icons
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Slide = styled.div`
        position:fixed;
        width:100vw;
        height:100vh;
        background:#fff;
        z-index:9999;
        top:0px;
        left:0% ;
        transition:all .4s ; 
        overflow:scroll;
        z-index:999999999;
        padding-bottom:45px;

        .header-slide{
            border:1px solid rgba(0,0,0,.1);
            padding-bottom:10px;    
            
            > div{
                display:flex;
                padding:5px 12px;
            }
            
            .nav-slide{
                justify-content:space-between;

                a{
                    text-decoration:none;
                    color:#000;
                }
                
                h3{
                    margin:4px 0px
                }

                .fa-times{
                    margin-top:15px;
                }
            }

            .buttons-group{
                display:flex;
                justify-content:space-around;
                margin-top:18px;

                > div {
                    width:25%;
                    display:flex;
                    align-items:center;
                    flex-direction:column;
                    font-size:11px;

                    span{
                        font-size:13px;
                        background:#03A9F4;
                        padding:7px 12px;
                        border-radius:5px;
                        color:#FFF;
                        ;
                    }
                }
            }
        }

        .center-slide {
            padding:5px 12px;
            padding-bottom:0px;


            .center-primary{
                position: relative;

                > p{
                    font-size:11px;
                    font-weight:800;
                    color:#333
                }

                ul{
                    padding:0px;
                    margin:0px;

                    li {
                        border-bottom:1px solid rgba(0,0,0,.1);
                        a{
                            display:flex;
                            justify-content:space-between;
                            align-items:center;
                            color:#212121;
                            text-decoration:none;
                            height:50px;
                            font-size:13px;

                            .fa-chevron-left{
                                color:#555;
                            }
                        
                        }
                    }
                }
            }
        }

        .center-sub{

            p{
                display:flex;
                align-items:center;
                color:#555;

                .fa-chevron-right,.fa-chevron-left{
                    margin-inline-end: 8px;
                }
            }

            ul{
                    padding:0px;
                    margin:0px;

                    li {
                        padding:11px 0px;
                        border-bottom:1px solid rgba(0,0,0,.1);

                        a{
                            display:block;
                            display:flex;
                            justify-content:space-between;
                            align-items:center;
                            color:#212121;
                            text-decoration:none;

                            .fa-chevron-left{
                                color:#555;
                            }
                            
                            p{
                                margin:0px;
                                font-size:14px;
                                font-weight:400;

                            };
                        }
                    }
                }
        }

        .center-footer{
            display:flex;
            height:45px;
            position: fixed;
            bottom:0px;
            right:0px;
            width:100%;
            transition:all .4s;


            > div{
                display:flex;
                flex:1;
                background:#f1f1f1;
                border:1px solid rgba(0,0,0,.1);
                padding:0px 10px;

                a{  
                    width:100%;
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    text-decoration:none;
                    color:#212121;
                    font-size:11px
                }
            }
        }
`

class Aside extends React.Component {
    constructor(props) {
        super(props) ;

        this.state = {
            categoriesRecives: [],
            categories : [
                {
                    name: {
                        ar: "1قسم جديد",
                        en: "Cat 2"
                        
                      },
                    _id: "ewee32432",
                    subStra:{
                        ar:['قس12312م 2', 'قسم 3123', 'قس123123م123 4', 'قسم 512312', 'قسم 6123'],
                        en: ['english 1 1', 'english 1 2', 'english 1 3', 'english 1 4', 'english 1 5', 'english 1 6', 'english 1 7', ]
                    }
                },
                {
                    name: {
                        ar: "2قسم جديد",
                        en: "Cat 3"
                      },
                    _id: "eweeqwe32432",
                    subStra:{
                        ar:['قسم 2', 'قسم342645 3123', 'قسم123 124324', 'قسم 512312', 'ق543سم 6123'],
                        en: ['english 2 1', 'english 2 2', 'english 2 3', 'english 12 4', 'english 2 5', 'english 2 6', 'english 2 7', ]
                    }
                },
                {
                    name: {
                        ar: "3قسم جديد",
                        en: "Cat 4"
                      },
                    _id: "ewee32432432",
                    subStra:{
                        ar:['قسم 2adsf', 'قسم asdf3123', 'قسم123asdf 4', 'قسم 51sadf2312', 'قسم 612adsf3'],
                        en: ['english 3 1', 'english 3 2', 'english 3 3', 'english 3 4', 'english 3 5', 'english 3 6', 'english 3 7', ]
                    }
                },
                {
                    name: {
                        ar: "3قسم جديد",
                        en: "Cat 4"
                      },
                    _id: "ewee326452432",
                    subStra:{
                        ar:['قسم 2adsf', 'قسم asdf3123', 'قسم123asdf 4', 'قسم 51sadf2312', 'قسم 612adsf3'],
                        en: ['english 3 1', 'english 3 2', 'english 3 3', 'english 3 4', 'english 3 5', 'english 3 6', 'english 3 7', ]
                    }
                },
                {
                    name: {
                        ar: "3قسم جديد",
                        en: "Cat 4"
                      },
                    _id: "ewee3241237832",
                    subStra:{
                        ar:['قسم 2adsf', 'قسم asdf3123', 'قسم123asdf 4', 'قسم 51sadf2312', 'قسم 612adsf3'],
                        en: ['english 3 1', 'english 3 2', 'english 3 3', 'english 3 4', 'english 3 5', 'english 3 6', 'english 3 7', ]
                    }
                },
                {
                    name: {
                        ar: "3قسم جديد",
                        en: "Cat 4"
                      },
                    _id: "ewee32465832",
                    subStra:{
                        ar:['قسم 2adsf', 'قسم asdf3123', 'قسم123asdf 4', 'قسم 51sadf2312', 'قسم 612adsf3'],
                        en: ['english 3 1', 'english 3 2', 'english 3 3', 'english 3 4', 'english 3 5', 'english 3 6', 'english 3 7', ]
                    }
                },
                {
                    name: {
                        ar: "3قسم جديد",
                        en: "Cat 4"
                      },
                    _id: "ewee31212432",
                    subStra:{
                        ar:['قسم 2adsf', 'قسم asdf3123', 'قسم123asdf 4', 'قسم 51sadf2312', 'قسم 612adsf3'],
                        en: ['english 3 1', 'english 3 2', 'english 3 3', 'english 3 4', 'english 3 5', 'english 3 6', 'english 3 7', ]
                    }
                },
                {
                    name: {
                        ar: "3قسم جديد",
                        en: "Cat 4"
                      },
                    _id: "ewee3241231332",
                    subStra:{
                        ar:['قسم 2adsf', 'قسم asdf3123', 'قسم123asdf 4', 'قسم 51sadf2312', 'قسم 612adsf3'],
                        en: ['english 3 1', 'english 3 2', 'english 3 3', 'english 3 4', 'english 3 5', 'english 3 6', 'english 3 7', ]
                    }
                },
                {
                    name: {
                        ar: "4قسم جديد",
                        en: "Cat 5"
                      },
                    _id: "ewee32434352",
                    subStra:{
                        ar:['قسم 2', 'قسم 312asdf3', 'قسم12asdf3 4', 'قسم 51sdaf2312', 'قسadsfم 6123'],
                        en: ['english 4 1', 'english 4 2', 'english 4 3', 'english 4 4', 'english 4 5', 'english 4 6', 'english 4 7', ]
                    }
                },
                {
                    name: {
                        ar: "5قسم جديد",
                        en: "Cat 6"
                      },
                    _id: "ewee334562432",
                    subStra:{
                        ar:['قسم 2', 'قسم 3123', 'قسم123 4', 'قسم 512312', 'قسم 6123'],
                        en: ['english 5 1', 'english 5 2', 'english 5 3', 'english 5 4', 'english 5 5', 'english 5 6', 'english 5 7', ]
                    }
                },            {
                    name: {
                        ar: "6قسم جديد",
                        en: "Cat 7"
                      },
                    _id: "ewedfe32432",
                    subStra:{
                        ar:['قسم 2', 'قسم 3123', 'asdfasdfas 4', 'قسم 51asdf2312', 'قسم 6123'],
                        en: ['english 1 1', 'english 1 2', 'english 1 3', 'english 1 4', 'english 1 5', 'english 1 6', 'english 1 7', ]
                    }
                },{
                    name: {
                        ar: "7قسم جديد",
                        en: "Cat 8"
                      },
                    _id: "ewee32dfgh432",
                    subStra:{
                        ar:['قسم 2', 'قسم 3123', 'قسم123 4asdf', 'قسم 512312', 'قسم 61234weqr3'],
                        en: ['english 1 1', 'english 1 2', 'english 1 3', 'english 1 4', 'english 1 5', 'english 1 6', 'english 1 7', ]
                    }
                },{
                    name: {
                        ar: "6قسم جديد",
                        en: "Cat 7"
                      },
                    _id: "ewee3fhdf2432",
                    subStra:{
                        ar:['قسم 2', 'قسم 3123', 'asdfasdfas 4', 'قسم 51asdf2312', 'قسم 6123'],
                        en: ['english 1 1', 'english 1 2', 'english 1 3', 'english 1 4', 'english 1 5', 'english 1 6', 'english 1 7', ]
                    }
                },{
                    name: {
                        ar: "6قسم جديد",
                        en: "Cat 7"
                      },
                    _id: "ewjghfee32432",
                    subStra:{
                        ar:['قسم 2', 'قسم 3123', 'asdfasdfas 4', 'قسم 51asdf2312', 'قسم 6123'],
                        en: ['english 1 1', 'english 1 2', 'english 1 3', 'english 1 4', 'english 1 5', 'english 1 6', 'english 1 7', ]
                    }
                },{
                    name: {
                        ar: "6قسم جديد",
                        en: "Cat 7"
                      },
                    _id: "werq",
                    subStra:{
                        ar:['قسم 2', 'قسم 3123', 'asdfasdfas 4', 'قسم 51asdf2312', 'قسم 6123'],
                        en: ['english 1 1', 'english 1 2', 'english 1 3', 'english 1 4', 'english 1 5', 'english 1 6', 'english 1 7', ]
                    }
                },
            ],
            toggleSub:false
        }
    }

    handleSubSlide = (e) => {
        e.preventDefault();

        const subList = this.state.categories.findIndex(cart => {
            if(e.target.textContent === cart.name.ar  ){
                return cart._id 
            }else if(e.target.textContent === cart.name.en ){
                return cart._id
            }
        })

        this.setState({
            categoriesRecives: this.props.language === "en" ? this.state.categories[subList].subStra.en : this.state.categories[subList].subStra.ar,
            toggleSub:!this.state.toggleSub
        })
    }

    deleteSub = () => {
        this.setState({
            toggleSub:false
        })
    }

    render (){
        return(
            <Slide style={{direction:this.props.language === 'en' ? "ltr" : "rtl",
                            textAlign:this.props.language === 'en' ? "left" : "right",
                            left:this.props.statue === false ? '100%' : '0%'}}>
                <div className="header-slide">
                    <div className="nav-slide">
                        <div>
                            <a href="/#">{this.props.language === 'en' ? 'Logo Here' : 'لوجو هنا'}</a>
                            <h3>{this.props.language === 'en' ? 'Hi, We are Name' : "اهلا بيك, احنا اسم"}</h3>
                        </div>
                        <div onClick={this.props.action}>
                            <FontAwesomeIcon icon={faTimes} size='lg'></FontAwesomeIcon>
                        </div>
                    </div>

                    <div className="buttons-group">
                        <div>
                            <span>
                                <FontAwesomeIcon icon={faHome} size='md'></FontAwesomeIcon>
                            </span>
                            {this.props.language === 'en' ? 'Home' : 'الرئيسية'}
                            
                        </div>
                        <div>
                            <span>
                                <FontAwesomeIcon icon={faUserPlus} size='md'></FontAwesomeIcon>
                            </span>
                            {this.props.language === 'en' ? 'Sign up' : 'اشترك'}
                            
                        </div>
                        <div>
                            <span>
                                <FontAwesomeIcon icon={faUser} size='md'></FontAwesomeIcon>
                            </span>
                            {this.props.language === 'en' ? 'Log in' : 'تسجيل الدخول'}
                            
                        </div>
                        <div>
                            <span>
                                <FontAwesomeIcon icon={faShoppingCart} size='md'></FontAwesomeIcon>
                            </span>
                            {this.props.language === 'en' ? 'Cart' : 'عربه التسوق'}
                            
                        </div>
                    </div>
                </div>
                <div className="center-slide">
                    <div className="center-primary">
                        {this.props.language === 'en' ? (<p style={{display:this.state.toggleSub === true ? 'none' : 'block'}}>All CATEGORIES</p>) : (<p style={{display:this.state.toggleSub === true ? 'none' : 'block'}}>كل الفئات</p>)}
                        <ul>
                            {this.state.categories.map(cata => {
                                return(
                                    <li key={Math.random()} style={{display: this.state.toggleSub === true ? 'none' : 'block'}}>
                                        
                                        <a href="/#" onClick={(e) => this.handleSubSlide(e)}>
                                            {this.props.language === 'en' ? (cata.name.en) : (cata.name.ar)}
                                            {this.props.language === 'en' ?(<FontAwesomeIcon icon={faChevronRight} size='xs'></FontAwesomeIcon>) :
                                                                            (<FontAwesomeIcon icon={faChevronLeft} size='xs'></FontAwesomeIcon>)}
                                        </a>
                                    </li>
                                    )
                                })}
                        </ul>
                    </div>
                    <div className="center-sub">
                    {this.props.language === 'en' ? 
                        (<p  onClick={this.deleteSub} style={{display:this.state.toggleSub === false ? 'none' : 'block'}}> 
                            <FontAwesomeIcon icon={faChevronLeft} size='xs'></FontAwesomeIcon>
                            Back to Main Menu
                        </p>) 
                            :
                        (<p onClick={this.deleteSub}  style={{display:this.state.toggleSub === false ? 'none' : 'block'}}>
                            <FontAwesomeIcon icon={faChevronRight} size='xs'></FontAwesomeIcon>
                            الرجوع إلي القائمة الرئيسية
                        </p>)}
                            <ul style={{display:this.state.toggleSub === false ? 'none' : 'block'}}>
                                {this.state.categoriesRecives.map(cata => {
                                    return(
                                        <li key={Math.random()}>
                                            <a href="/#">
                                                <p>{cata}</p>
                                                {this.props.language === 'en' ?(<FontAwesomeIcon icon={faChevronRight} size='xs'></FontAwesomeIcon>) :
                                                                                (<FontAwesomeIcon icon={faChevronLeft} size='xs'></FontAwesomeIcon>)}
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>     
                    </div>
                </div>
                <div className="center-footer" style={{right:this.props.statue === false ? '-100%' : '0px'}}>
                        <div>
                            <a href="/#" onClick={this.props.changeLanguage}>

                                {this.props.language === 'en' ? 
                                    ([<span>اللغه</span>,<span>العربيه</span>]) : ([<span>Language</span>,<span>English</span>])}
                            </a>
                        </div>
                        <div>
                            <a href="/#">
                                <FontAwesomeIcon icon={faPhoneAlt} size='xs'></FontAwesomeIcon>
                                Contact
                            </a>
                        </div>
                    </div>
            </Slide>
        )
    }
}

export default Aside ; 