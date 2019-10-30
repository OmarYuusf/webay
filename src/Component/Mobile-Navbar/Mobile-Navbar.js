import React from 'react';

// // Navbar Component import 
import OneSlide from './OneSlide/OneSlide';
import Aside from './Aside/Aside';



class MobileNavbar extends React.Component {
    constructor(props) {
        super(props);

        this.handler = this.handler.bind(this);

        this.state = {
            slide: true
        }
    }

    handler(){
        this.setState({
            slide: !this.state.slide
        })
        console.log(this.state.slide)
    }

    render (){
        return(
            <nav>
                <div>
                    <OneSlide language={this.props.language} slide={this.state.slide} action={this.handler}/>
                </div>
                <aside>
                    <Aside language={this.props.language} 
                           action={this.handler} 
                           statue={this.state.slide} 
                           changeLanguage={this.props.changeLanguage} />
                </aside>

            </nav>
        )
    }
}

export default MobileNavbar ; 