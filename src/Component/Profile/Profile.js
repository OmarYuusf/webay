import React from 'react';

import './Profile.css'

import {Container,
        Row,
        Col,
        Tab,
        Nav,
} from 'react-bootstrap'

class Profile extends React.Component {
    render () {
        return(
            <div style={{direction:this.props.language === 'en' ? "ltr" : "rtl",
                	textAlign:this.props.language === 'en' ? "left" : "right"}} className="my-profile">
                
                <Container>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                                <Col sm={3}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link eventKey="thr">Tab 3</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link eventKey="fourth">Tab 4</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                </Col>
                                <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                    <div>
                                        asdasdjkl;1111
                                    </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                    <div>
                                        asdasdjkl;asdsdaskasdas222dk
                                    </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="thr">
                                    <div>
                                        asdasdjkl;asdsdaskas33333dasdk
                                    </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                    <div>
                                        asdasdjkl;asdsdaskas4444dasdk
                                    </div>
                                    </Tab.Pane>
                                </Tab.Content>
                                </Col>
                            </Row>
                            </Tab.Container>

                </Container>
            </div>
        )
    }
}

export default Profile ;