import React, { Component } from "react";
import "./Favorite.css";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// FontAwsome Icons
import { faList, faFilter } from "@fortawesome/free-solid-svg-icons";
import { faBorderAll } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default class Favorite extends Component {
  render() {
    return (
      <div className="favorite">
        <Container>
          <Tab.Container id="left-tabs-example" defaultActiveKey="user">
            <Row>
              <Col
                style={{
                  direction: this.props.language === "en" ? "ltr" : "rtl",
                  textAlign: this.props.language === "en" ? "left" : "right",
                }}
              >
                <h1>المفضلة</h1>
                <div className="favorite-content">
                  <div className="products">
                    <div className="product">
                      <div className="container-img">
                        <img
                          src="https://k.nooncdn.com/t_desktop-pdp-v1/v1569837374/N30427673A_1.jpg"
                          alt="product"
                        />
                      </div>
                      <div className="container-body">
                        <p className="owner">أريستون</p>
                        <h6>
                          ديلونجي Multifunctional Coffee Machine 1450W
                          ECAM650.55MS أسود/ فضي رقم الموديل: ECAM650.55MS
                        </h6>
                        <span className="price">
                          <p className="real-price">2150.00 جنيه</p>
                          <p className="fake-price">2220.00 جنيه</p>
                        </span>
                        <span className="discount">خصم 15%</span>
                      </div>
                      <div className="container-buttons">
                        <button>
                          اضافه إلي عربة التسوق
                          <FontAwesomeIcon
                            icon={faShoppingCart}
                          ></FontAwesomeIcon>
                        </button>
                        <button>
                          مسح من المفضلة
                          <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </div>
    );
  }
}
