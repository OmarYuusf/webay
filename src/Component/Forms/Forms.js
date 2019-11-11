import React from 'react';

// components Import
import Login from './Login/Login'
import Signup from './Signup/Signup'

// fontAwsome import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Styled-Component
import styled from 'styled-components'

const Form = styled.div`
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;

        .Container-forms{
            width:75%;
            height:80%;
            margin:auto;
            display:flex;
            box-shadow:2px 2px rgba(0,0,0,.1);
            border-top:1px solid rgba(0,0,0,.1);

            .form{
                width:67%
            }

            .info{
                width:33%;
                background:linear-gradient(141deg, #03A9F4 0%, #0B76A5 75%);
                justify-content:flex-start;
                align-items:center;
                display:flex;

                > div {
                    display:flex;
                    flex-direction:column;
                    padding-inline-start:10px;
                    color:#FFF;
                    width:100%;
                    text-align:center;

                    h1{
                        font-weight:800;
                    }

                    p{
                        color:#eee;
                        font-size:13px;
                    }

                    button{
                        border:1px solid #fff;
                        padding:4px 20px;
                        font-size:13px;
                        background:transparent;
                        color:#FFF;
                        align-self:center;
                        transition:all .3s;

                        &:hover{
                            transform:translateY(2px)
                        }
                    }
                }
            }
        }

        .side{
            position:fixed;
            left:0px;
            top:0px;

            span:first-of-type{
                position:absolute;
                top:0px;
                left:0px;
                width:30px;
                height:70px;
                background:rgb(3, 169, 244);
                z-index:3;
            }
            span:nth-child(2){
                position:absolute;
                top:0px;
                left:0px;
                width:50px;
                height:90px;
                background:rgb(3, 169, 244, 0.6);
                z-index:2;
            }
            span:last-of-type{
                position:absolute;
                top:0px;
                left:0px;
                width:70px;
                height:120px;
                background:rgb(3, 169, 244, 0.2);
                z-index:1;
            }
        }
`

class Forms extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            form : false    
        }
    }
    

    Toggle = () => {
        this.setState({
            form: !this.state.form
        })
        console.log(this.state.form)
    }

    render() {
        return(
            <Form style={{direction:this.props.language === 'en' ? "ltr" : "rtl",
                        textAlign:this.props.language === 'en' ? "left" : "right"}}>

                <div className="Container-forms">
                    <div className="form">
                        {this.state.form === true ? (<Login language={this.props.language} changeLanguage={this.props.changeLanguage}/>) 
                                                    : 
                                                    (<Signup language={this.props.language} changeLanguage={this.props.changeLanguage}/>) }
                    </div>
                    <div className="info">
                        <div>
                            <h1>{this.props.language === 'ar' ? 'مرحبا صديقي' : 'HELLO FRIEND'}</h1>
                            <p>{this.props.language === 'ar' ? 'ادخل بياناتك الشخصية وابدأ الشراء معنا' : 'Please, Enter your personal details and start journey with us'}</p>
                            <button onClick={() => this.Toggle()}>{this.state.form === false ? 'تسجيل الدخول' : 'انشاء حساب جديد'}</button>
                        </div>
                    </div>
                </div>
                <div className="side">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </Form>
        )
    }
}

export default Forms ;