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
                  عنوان الشحن <button>تغيير العنوان</button>
                </h6>
                <div>
                  <p>عمر عاطف عمر عاطف</p>
                  <span>123213, الجيزة, مصر</span>
                </div>
                <div>
                  <p>+20-10-22959644</p>
                  <p>
                    تم التحقق <FontAwesomeIcon icon={faCheckCircle} />
                  </p>
                </div>
              </div>
              <div className="pay-way">
                <h6>طريقة الدفع</h6>
                <p>الدفع نقداً عند الاستلام</p>
              </div>
              <div className="order-price">
                <h6>ملخص الطلبية</h6>

                <ul>
                  <li>المجموع الفرعي</li>
                  <li>201.15 جنيه</li>
                </ul>
                <ul>
                  <li>رسوم الشحن</li>
                  <li>15.00 جنيه</li>
                </ul>
                <ul>
                  <li>رسوم الدفع نقداً عند الاستلام</li>
                  <li>10.00 جنيه</li>
                </ul>
                <ul className="order-all-price">
                  <li>المجموع(تتضمن الـ VAT)</li>
                  <li>226.15 جنيه</li>
                </ul>

                <ul className="order-credit">
                  <li>الرصيد</li>
                  <li>226.15 جنيه</li>
                </ul>
              </div>
            </div>
            <div className="order-products">
              <div className="order-product">
                <div className="container-img">
                  <img
                    src="https://k.nooncdn.com/t_desktop-pdp-v1/v1554209253/N22915507A_1.jpg"
                    alt="product"
                  />
                </div>
                <div className="container-content">
                  <p>P47</p>
                  <h6>سماعة رأس P47 تعمل بالبلوتوث أزرق</h6>
                  <span>البائع vezo maxx</span>
                </div>
                <div className="container-price">
                  <h6>199.00 جنيه</h6>
                  <p>1 منتج</p>
                </div>
              </div>
              <div className="order-product">
                <div className="container-img">
                  <img
                    src="https://k.nooncdn.com/t_desktop-pdp-v1/v1554209253/N22915507A_1.jpg"
                    alt="product"
                  />
                </div>
                <div className="container-content">
                  <p>P47</p>
                  <h6>سماعة رأس P47 تعمل بالبلوتوث أزرق</h6>
                  <span>البائع vezo maxx</span>
                </div>
                <div className="container-price">
                  <h6>199.00 جنيه</h6>
                  <p>1 منتج</p>
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
