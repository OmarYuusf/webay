import React from 'react';


// fontAwsome import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Icons
import { faEnvelope } from  '@fortawesome/free-solid-svg-icons'
import { faUnlock } from  '@fortawesome/free-solid-svg-icons'
import { faMobileAlt } from  '@fortawesome/free-solid-svg-icons'

// Styled-Component
import styled from 'styled-components'

const Sign = styled.div`
padding:15px;
    width:100%;
    height:100%;
    position: relative;;

    .form-group{
        margin-top:80px;

        h2{
            font-weight:800;
        }

        p{
            color:#333;

        }

        form{
            margin-top:50px;

            .container-inputs-group{
                display:flex;

                .inputs-group-name:first-of-type{
                    margin-inline-end:18px;
                }

                .inputs-group-name{
                    width:50%;

                    input{
                        width:100%;
                        border:0px;
                        background:#F1F1F1;
                        padding:15px 0px;
                        outline-color:rgba(0,0,0,.1);
                        padding-inline-start:12px;
                        font-size:14px;
                    }
                }

            }   
            

            .inputs-group{
                margin:25px 0px;
                position: relative;
                input{
                    width:100%;
                    border:0px;
                    background:#F1F1F1;
                    padding:15px 0px;
                    outline-color:rgba(0,0,0,.1);
                    padding-inline-start:48px;
                    font-size:14px;
                }

                svg{
                    position:absolute;
                    right:12px;
                    top:50%;
                    transform:translateY(-50%);
                    color:#777
                }
            }

            .buttons-group{
                display:flex;
                justify-content:flex-end;
                padding:10px 0px;

                button{
                    margin:0px 10px;
                    font-size:14px;
                }

                button:first-of-type{
                    background:transparent;
                    border:1px solid #03A9F4;
                    padding:8px 15px;

                }

                button:last-of-type{
                    background:#03A9F4;
                    width:150px;
                    color:#F1F1F1;
                    border:0px;
                    box-shadow:2px 2px 2px rgba(0,0,0,.2);
                    margin-inline-end:0px;
                }
            }

            .link-group{
                text-align:center;
                position:absolute;
                bottom:0px;
                left:50%;
                transform:translateX(-50%);

                p{
                    font-size:13px
                }
            }
        }
    }
`

class Signup extends React.Component {
    render() {
        return(
            <Sign >
                <div className="form-group">
                    <h2>{this.props.language === 'ar' ? 'تسجيل ' : 'Sign up'}</h2>
                    <p>{this.props.language === 'ar' ? 'انها سريعة وسهلة' : "It's quick and easy."}</p>
                    <form>
                        <div className="container-inputs-group">
                            <div className="inputs-group-name">
                                <input type="email" placeholder={this.props.language === 'ar' ? 'الأسم بالكامل' : 'FULL NAME'}/>
                            </div>
                            <div className="inputs-group-name">
                                <input type="email" placeholder={this.props.language === 'ar' ? 'الأسم' : 'NAME'}/>
                            </div>
                        </div>
                        <div className="inputs-group">
                            <input type="email" placeholder={this.props.language === 'ar' ? 'البريد الألكتروني' : 'EMAIL'}/>
                            <FontAwesomeIcon icon={faEnvelope} style={{right:this.props.language === 'ar' ? '12px' : null, left:this.props.language === 'en' ? '12px' : null}}></FontAwesomeIcon>
                        </div>
                        <div className="inputs-group">
                            <input type="email" placeholder={this.props.language === 'ar' ? 'الرقم السري' : 'PASSWORD'}/>
                            <FontAwesomeIcon icon={faUnlock} style={{right:this.props.language === 'ar' ? '12px' : null, left:this.props.language === 'en' ? '12px' : null}}></FontAwesomeIcon>
                        </div>
                        <div className="inputs-group">
                            <input type="number" placeholder={this.props.language === 'ar' ? 'رقم الهاتف' : 'PHONE NUMBER'}/>
                            <FontAwesomeIcon icon={faMobileAlt}style={{right:this.props.language === 'ar' ? '12px' : null, left:this.props.language === 'en' ? '12px' : null}}></FontAwesomeIcon>
                        </div>
                        <div className="buttons-group">
                            <button onClick={this.props.changeLanguage}>
                                {this.props.language === 'ar' ? 'English' : 'العربيه'}
                            </button>
                            <button>
                                {this.props.language === 'ar' ? 'تسجيل' : 'SIGN UP'}
                            </button>
                        </div>
                        <div className="link-group">
                             {this.props.language === 'ar' ? (<p>لديك بالفعل حساب؟ <a href="/#">اضغط هنا</a></p>) :  (<p>already have an account? <a href="/#">Press here</a></p>)}
                        </div>
                    </form>
                </div>
            </Sign>
        )
    }
}

export default Signup ;