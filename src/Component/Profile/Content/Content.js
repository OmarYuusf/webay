import React from "react";
import "./Content.css";
import User from "./User/User"

import { Col, Tab } from "react-bootstrap";
import Locations from "./Locations/Locations";
import MyLocations from "./MyLocations/MyLocations";
import Orders from "./Orders/Orders";
import Wallet from "./Wallet/Wallet"

const Content = () => {
  return (
    <Col lg={9}>
      <Tab.Content>
        <Tab.Pane eventKey="user">
          <User />
        </Tab.Pane>
        <Tab.Pane eventKey="orders">
          <Orders />
        </Tab.Pane>
        <Tab.Pane eventKey="locations">
          <MyLocations />
          <Locations />
        </Tab.Pane>
        <Tab.Pane eventKey="pay">
          <div>asdasdjkl;asdsdaskas4444dasdk</div>
        </Tab.Pane>
        <Tab.Pane eventKey="wallet">
          <Wallet />
        </Tab.Pane>
        <Tab.Pane eventKey="back">
          <div>asdasdjkl;asdsdaskas4444dasdk</div>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  );
};

export default Content;
