import React from "react";
import "./Content.css";
import User from "./User/User"

import { Col, Tab } from "react-bootstrap";

const Content = () => {
  return (
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="user">
          <User />
        </Tab.Pane>
        <Tab.Pane eventKey="orders">
          <div>asdasdjkl;asdsdaskasdas222dk</div>
        </Tab.Pane>
        <Tab.Pane eventKey="locations">
          <div>asdasdjkl;asdsdaskas33333dasdk</div>
        </Tab.Pane>
        <Tab.Pane eventKey="pay">
          <div>asdasdjkl;asdsdaskas4444dasdk</div>
        </Tab.Pane>
        <Tab.Pane eventKey="balance">
          <div>asdasdjkl;asdsdaskas4444dasdk</div>
        </Tab.Pane>
        <Tab.Pane eventKey="back">
          <div>asdasdjkl;asdsdaskas4444dasdk</div>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  );
};

export default Content;
