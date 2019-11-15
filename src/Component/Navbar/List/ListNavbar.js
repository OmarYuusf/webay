import React from 'react';

import "./ListNavbar.scss"

// FontAwsome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// FontAwsome Icons
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'


class ListNavbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cateRecives : [],
            subRecives : [],
            dropRecives : [],
            hover:false,
            nameChange : '',
            categories : [
                {
                    name: {
                        ar: "1قسم جديد",
                        en: "Cat 2"
                        
                      },
                    _id: "ewee32111432",
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
                    _id: "ewee32443232",
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
                    _id: "ewee3772432",
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
                    _id: "ewee3432432",
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
                    _id: "ewee3214124432",
                    subStra:{
                        ar:['قسم 2', 'قسم 3123', 'قسم123 4', 'قسم 512312', 'قسم 6123'],
                        en: ['english 5 1', 'english 5 2', 'english 5 3', 'english 5 4', 'english 5 5', 'english 5 6', 'english 5 7', ]
                    }
                },            {
                    name: {
                        ar: "6قسم جديد",
                        en: "Cat 7"
                      },
                    _id: "ewee32123432",
                    subStra:{
                        ar:['قسم 2', 'قسم 3123', 'asdfasdfas 4', 'قسم 51asdf2312', 'قسم 6123'],
                        en: ['english 1 1', 'english 1 2', 'english 1 3', 'english 1 4', 'english 1 5', 'english 1 6', 'english 1 7', ]
                    }
                },{
                    name: {
                        ar: "7قسم جديد",
                        en: "Cat 8"
                      },
                    _id: "ewe123e32432",
                    subStra:{
                        ar:['قسم 2', 'قسم 3123', 'قسم123 4asdf', 'قسم 512312', 'قسم 61234weqr3'],
                        en: ['english 1 1', 'english 1 2', 'english 1 3', 'english 1 4', 'english 1 5', 'english 1 6', 'english 1 7', ]
                    }
                }
            ]
        }
    }

    textChanger = (e) => {
        this.setState({
            nameChange:e.target.innerHTML
        })

        const dropDownShowSubList = this.state.categories.findIndex(cata => {
            if(cata.name.ar  == e.target.innerHTML){
                return cata._id 
            }else if(cata.name.en == e.target.innerHTML){
                return cata._id
            }
        })
        
        this.props.language === 'en' ? 
        this.setState({
            dropRecives : this.state.categories[dropDownShowSubList].subStra.en
                }) : this.setState({
            dropRecives : this.state.categories[dropDownShowSubList].subStra.ar,
        })


    }
    
    subCheck = (e) => {
        const subList = this.state.categories.findIndex(cart => {
            if(e.target.textContent == cart.name.ar  ){
                return cart._id 
            }else if(e.target.textContent == cart.name.en ){
                return cart._id
            }
        })

        this.setState({
            subRecives: this.props.language === "en" ? this.state.categories[subList].subStra.en : this.state.categories[subList].subStra.ar,
        })

    }

    isOpen = () => {
        this.setState({
            hover:true
        })
    }

    isClosed = () => {
        this.setState({
            hover:false
        })
    }


    render() {
        return(
            <div className="container-list">
                <div  className="container-list" style={{direction:this.props.language === 'en' ? 'ltr' : 'rtl',
                             textAlign : this.props.language === "en" ? 'left' : "right"}}>
                    <ul>
                        <li>
                            <a href="/#">{this.props.language === 'en' ? "ALL CATEGORIES" : 'جميع الفئات'}</a>  
                            <FontAwesomeIcon icon={faAngleDown} size="xs"></FontAwesomeIcon>
                            <div className="dropdown">
                                <div className="dropdown-header">
                                    <span>
                                        <h4>{this.props.language === 'en' ? "ALL CATEGORIES" : 'جميع الفئات'}</h4>
                                        <FontAwesomeIcon icon={faAngleDown} size="xs"></FontAwesomeIcon>
                                    </span>
                                    <span>
                                        <p>{this.state.nameChange}</p>
                                    </span>
                                </div>
                                <div className="dropdown-center">
                                    <span>
                                        <ul>
                                            {this.state.categories.map(cata => {
                                                return(
                                                    <li key={cata._id}>
                                                        <a href="/#" onMouseEnter={(e) => this.textChanger(e)}>{this.props.language === 'en' ? (cata.name.en) : (cata.name.ar) }</a>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </span>
                                    <span>
                                        <ul>
                                        {this.state.dropRecives.map(sub => {
                                            return(
                                                <li key={Math.random()}>
                                                    <a href="/#">{sub}</a>
                                                </li>
                                            )
                                        })}
                                        </ul>
                                    </span>
                                </div>
                            </div>
                        </li>
                        {this.state.categories.map(cata => {
                            return(
                                <li key={cata._id} onMouseMove={this.isOpen} onMouseLeave={this.isClosed} onMouseEnter={(e) => this.subCheck(e)}>
                                    <a href="/#">{this.props.language === 'en' ? (cata.name.en) : (cata.name.ar) }</a>  
                                </li>
                                
                            )
                        })}
                        
                    </ul>
                </div>
                <div className="list-show" onMouseEnter={this.isOpen} onMouseLeave={this.isClosed}
                    style={{direction:this.props.language === 'en' ? 'ltr' : 'rtl',
                        textAlign : this.props.language === "en" ? 'left' : "right",
                        display:this.state.hover === false ? 'none' : 'flex',
                    }}
                    >
                    <div>
                        <h5>{this.props.language === 'en' ? "CATEGORIES" : 'فئات المنتجات'}</h5>
                        <ul>

                            {this.state.subRecives.map(sub => {
                                return(
                                    <li key={Math.random()}>
                                        <a href="/#">{sub}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div>
                        <h5>{this.props.language === 'en' ? "Most Popular" : 'أفضل الماركات'}</h5>
                        <div>
                            <span>LOGO</span>
                            <span>LOGO</span>
                            <span>LOGO</span>
                            <span>LOGO</span>
                            <span>LOGO</span>
                            <span>LOGO</span>
                        </div>
                    </div>
                    <div>
                        <img src="https://via.placeholder.com/400.png/09f/fffC/O https://placeholder.com/#How_To_Set_Image_Size" alt="products"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListNavbar;