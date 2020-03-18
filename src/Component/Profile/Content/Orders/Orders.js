import React, { Component } from "react";
import "./Orders.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

class Orders extends Component {
  render() {
    return (
      <div className="orders">
        <div className="head">
          <h3>الطلبيات</h3>
          <p>تعرف على كيفية إدارة طلبياتك وتحقق من حالة طلبك أول بأول.</p>
        </div>
        <div className="body">
          <div className="one-order">
            <div className="header">
              <h6>
                رقم تعريف الطلب <span>NEGC30021576499</span>
              </h6>
              <p>
                تم الطلب يوم <span>3/17/2020</span>
              </p>
            </div>
            <div className="more-details">
              <div className="location-order">
                <h6>
                  <button>تغيير العنوان</button> عنوان الشحن
                </h6>
                <div>
                  <p>عمر عاطف عمر عاطف</p>
                  <span>123213, الجيزة, مصر</span>
                </div>
                <div> 
                  <p>+20-10-22959644</p>
                  <p>تم التحقق <FontAwesomeIcon icon={faCheckCircle} /> </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Orders;
