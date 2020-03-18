import React, { Component } from "react";
import "./MyLocations.css";
import { Button } from "react-bootstrap";

class MyLocations extends Component {
  state = {
    locations: true
  };
  render() {
    return (
      <div className="my-locations">
        <div className="head">
          <h3>العناوين</h3>
          <p>إضافة وإزالة وتحديد العناوين المفضلة</p>
        </div>
        {this.state.locations ? (
          <div className="real-location">
            <div className="one-location">
              <div className="header">
                <h5>العنوان الرئيسي</h5>
              </div>
              <div className="body">
                <div className="first">
                  <h6>المنزل</h6>
                </div>
                <div className="sec">
                  <div>
                    <p>الاسم</p>
                    <p>عمر عاطف عبد المحسن</p>
                  </div>
                  <div>
                    <p>العنوان</p>
                    <p>
                      123123, Unnamed Road - نزلة السمان - الهرم - الجيزة,
                      الجيزة, مصر
                    </p>
                  </div>
                  <div>
                    <p>رقم الهاتف</p>
                    <p>+20-10-22959644</p>
                  </div>
                  <div>
                    <Button variant="light">تعديل</Button>
                    <Button variant="danger">حذف</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="no-locations">
            <h2>لا يوجد لديك أية عناوين محفوظة!</h2>
            <p>أضف عنواناً الآن لنتمكن من توصيل الطلبيات إليك.</p>
            <Button variant="primary">عنوان جديد</Button>
          </div>
        )}
      </div>
    );
  }
}
export default MyLocations;
