import React from "react";
import "./Content.css";
import User from "./User/User";

import { Col, Tab } from "react-bootstrap";
import Locations from "./Locations/Locations";
import MyLocations from "./MyLocations/MyLocations";
import Orders from "./Orders/Orders";
import Wallet from "./Wallet/Wallet";
import Points from "./Points/Points";
import Returns from "./Returns/Returns";
import Delayed from "./Delayed/Delayed";

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
        <Tab.Pane eventKey="wallet">
          <Wallet />
        </Tab.Pane>
        <Tab.Pane eventKey="points">
          <Points />
        </Tab.Pane>
        <Tab.Pane eventKey="returns">
          <Returns />
        </Tab.Pane>
        <Tab.Pane eventKey="delayed">
          <Delayed />
        </Tab.Pane>
      </Tab.Content>
    </Col>
  );
};

export default Content;
