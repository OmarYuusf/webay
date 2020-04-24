import React from 'react';
import "./Taps.css"
import { Col, Nav } from "react-bootstrap";

const Taps = () => {
    return (
      <Col lg={3} classNmae="taps">
        <div className="name-taps">
          <h2>
            أهلاً <span>عمر عاطف!</span>
          </h2>
          <button>تسجيل خروج</button>
        </div>
        <Nav defaultActiveKey="user" variant="pills" className="flex-column">
          <Nav.Item>
            <Nav.Link eventKey="user">الملف الشخصي</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="orders">الطلبات</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="locations">العناوين</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="pay">الدفع</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="wallet">رصيدي</Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
    );
};

export default Taps;