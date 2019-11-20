import React from 'react';
import "./Login.css"

// fontAwsome import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Icons
import { faUser } from  '@fortawesome/free-solid-svg-icons'
import { faUnlock } from  '@fortawesome/free-solid-svg-icons'

// Styled-Component
import styled from 'styled-components'

const Log = styled.div`
    
`

class Login extends React.Component {

    stopAction = (e) => {
        e.preventDefault();
    }

    render() {
        return(
            <div className="log">
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
                                {this.props.language === 'ar' ? 'دخول' : 'LOGIN'}
                            </button>
                        </div>
                        <div className="link-group">
                             {this.props.language === 'ar' ?(<p>عضو جديد؟ <a href="/#" onClick={this.props.HandleAction}>انشاء حساب جديد</a></p>)
                                                            : 
                                                            (<p>first time? <a href="/#"onClick={this.stopAction}>SignUp</a></p>)}
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login ;