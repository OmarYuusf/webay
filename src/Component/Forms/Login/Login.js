import React from 'react';

// fontAwsome import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Icons
import { faUser } from  '@fortawesome/free-solid-svg-icons'
import { faUnlock } from  '@fortawesome/free-solid-svg-icons'

// Styled-Component
import styled from 'styled-components'

const Log = styled.div`
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

class Login extends React.Component {
    render() {
        return(
            <Log >
                <div className="form-group">
                    <h2>{this.props.language === 'ar' ? 'تسجيل الدخول' : 'Log in'}</h2>
                    <p>{this.props.language === 'ar' ? 'انها سريعة وسهلة' : "It's quick and easy."}</p>
                    <form>
                        <div className="inputs-group">
                            <input type="email" placeholder={this.props.language === 'ar' ? 'البريد الألكتروني' : 'EMAIL'}/>
                            <FontAwesomeIcon icon={faUser} style={{right:this.props.language === 'ar' ? '12px' : null, left:this.props.language === 'en' ? '12px' : null}}></FontAwesomeIcon>
                        </div>
                        <div className="inputs-group">
                            <input type="text" placeholder={this.props.language === 'ar' ? 'الرقم السري' : 'PASSWORD'}/>
                            <FontAwesomeIcon icon={faUnlock}  style={{right:this.props.language === 'ar' ? '12px' : null, left:this.props.language === 'en' ? '12px' : null}}></FontAwesomeIcon>
                        </div>
                        <div className="buttons-group">
                            <button onClick={this.props.changeLanguage}>
                                {this.props.language === 'ar' ? 'English' : 'عربي'}
                            </button>
                            <button>
                                {this.props.language === 'ar' ? 'تسجيل الدخول' : 'LOGIN'}
                            </button>
                        </div>
                        <div className="link-group">
                             {this.props.language === 'ar' ?(<p>عضو جديد؟ <a href="#"> تسجيل</a></p>)
                                                            : 
                                                            (<p>first time? <a href="#">SignUp</a></p>)}
                        </div>
                    </form>
                </div>
            </Log>
        )
    }
}

export default Login ;