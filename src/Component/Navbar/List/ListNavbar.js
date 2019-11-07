import React from 'react';

// Styled-Component
import styled from 'styled-components'

// FontAwsome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// FontAwsome Icons
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

//Component Style
const ContainerList = styled.div`
        position: relative;

        .container-list{
            padding:0px 15px;
            box-shadow:2px 2px 6px rgba(0,0,0,.1);

            > ul{
                display:flex;
                list-style:none;
                margin:0px;
                padding:0px;

                > li {
                    height:50px;
                    padding:0px 25px;
                    display:flex;
                    align-items:center;

                    @media (max-width: 1440px){ 
                        padding:0px 25px;
                    }

                    @media (max-width: 1024px){ 
                        padding:0px 8px;
                    }

                    @media (max-width: 768px){ 
                        padding:0px 4px;
                    }

                    a{
                        font-size:13px;
                        font-weight:800;
                        color:#212121;
                        text-decoration:none;

                        &:hover {
                            .list-show {
                                background:#000 !important
                            }
                        }

                        @media (max-width: 1440px){ 
                            font-size:13px;
                        }

                        @media (max-width: 1024px){ 
                            font-size:10px;
                        }

                        @media (max-width: 768px){ 
                            font-size:8px;
                        }

                        @media (max-width: 480px){ 
                            font-size:6px;
                        }
                    }
                } 

                > li:first-of-type{
                    position: relative;

                    &:hover{

                        .dropdown{
                            display:block
                        }
                        
                    }
                    
                    a{
                        color:rgb(3, 169, 244);
                        font-size:14px;

                        @media (max-width: 1024px){ 
                            font-size:12px;
                        }

                        @media (max-width: 768px){ 
                            font-size:9px;
                        }

                    }

                    .fa-angle-down{
                        margin-inline-start:20px;
                        color:rgb(3, 169, 244);

                        @media (max-width: 768px){
                            margin-inline-start:15px;
                            margin-inline-end:10px;
                            font-size:9px;
                        }
                    }

                    .dropdown{
                        position: absolute;
                        background:#f1f1f1;
                        box-shadow:3px 3px 10px rgba(0,0,0,.1);
                        top:0px;
                        width:600px;
                        padding:10px;
                        padding-bottom:25px;
                        border:1px solid rgba(0,0,0,.1);
                        border-radius:4px;
                        display:none;
                        z-index:999999999;

                        .dropdown-header{
                            display:flex;
                                                        
                            h4{
                                margin:0px;
                                font-weight:800;
                                opacity:.4
                            }

                            p{
                                margin:0px;
                            }

                            > span:last-of-type{
                                border-bottom: 1px solid rgba(0,0,0,.1);
                                padding:10px 0px;
                                font-weight:800;

                                &:hover{
                                    color:rgb(3, 169, 244)
                                }   
                            }

                            > span:first-of-type{
                                display:flex;
                                align-items:center;

                                .fa-angle-down{
                                    margin-inline-start:40px;
                                    opacity:.4;
                                    color:#000
                                }
                            }

                            > span{
                                flex:1 ;
                            }
                        }
                        
                        .dropdown-center{
                            display:flex;

                            span{
                                flex:1;
                                margin-top:15px;

                                ul{
                                    padding:0px;
                                    margin:0px;
                                    list-style:none;
                                    
                                    li{
                                        margin: 10px 3px;
                                        a{
                                            color:#212121;
                                            font-weight:400;
                                        }
                                    }
                                }
                            }

                            span:first-of-type{
                                ul{

                                    a{
                                        &:hover{
                                            font-weight:800;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        .list-show{
            width:80%;
            position: absolute;
            left:50%;
            top:100%;
            background:#f1f1f1;
            transform:translateX(-50%);
            display:flex;
            box-shadow:3px 3px 5px rgba(0,0,0,.1);
            padding:25px;
            z-index:99999999;

            @media (max-width: 768px){ 
                width:95%;
            }

            @media (max-width: 600px){ 
                width:100%;
            }

            > div{
                margin:0px 5px;

                h5{
                    margin:0px;
                    border-bottom:1px solid rgba(0,0,0,.1);
                    padding-bottom:10px;
                    font-size:14px;

                    @media (max-width: 768px){ 
                        font-size:13px;
                    }
                }
            }

            > div:first-of-type{
                flex:1;
                
                ul{
                    list-style:none;
                    padding:0px;
                    margin:0px;
                    margin-top:6px;

                    li {
                        padding:6px 0px;
                        padding-inline-start:5px;

                        a{
                            font-size:13px;
                            color:#555;
                            text-decoration:none;

                            &:hover{
                                color:rgb(3, 169, 244)
                            }

                            @media (max-width: 768px){
                                font-size:9px;
                            }
                        }
                    }
                }
            }

            > div:nth-child(2){
                flex:2;

                > div{
                    display:flex;
                    flex-wrap:wrap;
                    margin-top:18px;

                    span{
                        width:45%;
                        height: 100px;
                        margin:calc(5% / 4);
                        box-shadow:1px 1px 2px rgba(0,0,0,.1);
                        background:#f7f7f7;
                        display:flex;
                        justify-content:center;
                        align-items:center;

                        @media (max-width: 768px){ 
                            height:70px;
                        }
                        
                    }
                }
            }

            > div:last-of-type{
                flex:2;

                
                img{
                    width:100%;
                    height:100%;
                    object-fit:contain;
                }
            }
        }
`

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
            <ContainerList>
                <div  className="container-list" style={{direction:this.props.language === 'en' ? 'ltr' : 'rtl',
                             textAlign : this.props.language === "en" ? 'left' : "right"}}>
                    <ul>
                        <li>
                            <a href="#">{this.props.language === 'en' ? "ALL CATEGORIES" : 'جميع الفئات'}</a>  
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
                                                        <a href="#" onMouseEnter={(e) => this.textChanger(e)}>{this.props.language === 'en' ? (cata.name.en) : (cata.name.ar) }</a>
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
                                                    <a href="#">{sub}</a>
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
                                    <a href="#">{this.props.language === 'en' ? (cata.name.en) : (cata.name.ar) }</a>  
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
                                        <a href="#">{sub}</a>
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
                        <img src="https://via.placeholder.com/400.png/09f/fffC/O https://placeholder.com/#How_To_Set_Image_Size"/>
                    </div>
                </div>
            </ContainerList>
        )
    }
}

export default ListNavbar;