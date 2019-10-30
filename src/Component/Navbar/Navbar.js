import React from 'react';


// // Navbar Component import 
import FirstNavbar from './FirstNavbar/FirstNavbar';
import SecNavbar from './SecNavbar/SecNavbar';
import ListNavbar from './List/ListNavbar'


class Navbar extends React.Component {
    render() {
        return(
            <nav>
                <div>
                    <FirstNavbar language={this.props.language} changeLanguage={this.props.changeLanguage}/>
                </div>
                <div>
                    <SecNavbar language={this.props.language}/>
                </div>
                <div>
                    <ListNavbar language={this.props.language}/>
                </div>
            </nav>
        )
    }
}

export default Navbar;