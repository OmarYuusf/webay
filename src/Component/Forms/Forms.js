import React from 'react';
import "./Forms.css"

// components Import
import Login from './Login/Login'
import Signup from './Signup/Signup'

// fontAwsome import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Styled-Component

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
    }

    HandleAction = (e) => {
        e.preventDefault();
        this.setState({
            form: !this.state.form
        })
    }

    render() {
        return(
            <div style={{direction:this.props.language === 'en' ? "ltr" : "rtl",
                        textAlign:this.props.language === 'en' ? "left" : "right"}} className="forms">

                <div className="Container-forms">
                    <div className="form">
                        {this.state.form === false ? (<Login language={this.props.language} changeLanguage={this.props.changeLanguage} HandleAction={this.HandleAction}/>) 
                                                    : 
                                                    (<Signup language={this.props.language} changeLanguage={this.props.changeLanguage}/>) }
                    </div>
                    <div className="info">
                        <div>
                            <h1>{this.props.language === 'ar' ? 'مرحبا صديقي' : 'HELLO FRIEND'}</h1>
                            <p>{this.props.language === 'ar' ? 'ادخل بياناتك الشخصية وابدأ الشراء معنا' : 'Please, Enter your personal details and start journey with us'}</p>
                            <button onClick={() => this.Toggle()}>{this.state.form === false ? 'انشاء حساب جديد' : 'تسجيل الدخول'}</button>
                        </div>
                    </div>
                </div>
                <div className="side">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        )
    }
}

export default Forms ;