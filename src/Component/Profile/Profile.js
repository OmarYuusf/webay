import React from 'react';

import './Profile.css'

import {Container,
        Row,
        Col,
        Tab,
        Nav,
} from 'react-bootstrap'
import Taps from './Taps/Taps';
import Content from './Content/Content';

class Profile extends React.Component {
    render () {
        return(
            <div style={{direction:this.props.language === 'en' ? "ltr" : "rtl",
                	textAlign:this.props.language === 'en' ? "left" : "right"}} className="my-profile">
                
                <Container>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="user">
                            <Row>
                               <Taps /> 
                                <Content />
                            </Row>
                            </Tab.Container>

                </Container>
            </div>
        )
    }
}

export default Profile ;