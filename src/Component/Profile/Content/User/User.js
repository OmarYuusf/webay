import React from "react";
import "./User.css";
import { Button } from "react-bootstrap";

class User extends React.Component {
  state = {
    firstName: "",
    lastName: ""
  };

  setValue = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  };
  render() {
    return (
      <div className="user-profile">
        <div className="user-profile-header">
          <h4>الملف الشخصي</h4>
          <p>إدارة تفاصيل ملفك الشخصي</p>
        </div>
        <div className="profile-card">
          <div className="header">
            <h5>معلومات عامة</h5>
          </div>
          <div className="content">
            <div className="new-row">
              <div className="grid">
                <label>الاسم الأول</label>
                <input
                  type="text"
                  // value={this.state.firstName}
                  name="firstName"
                  onChange={e => this.setValue(e)}
                />
              </div>
              <div className="grid">
                <label>الاسم الأخير</label>
                <input
                  type="text"
                  // value={this.state.lastName}
                  name="lastName"
                  onChange={e => this.setValue(e)}
                />
              </div>
            </div>
            <div className="new-row">
              <Button variant="success">حفظ</Button>
            </div>
          </div>
        </div>
        <div className="profile-card">
          <div className="header">
            <h5>معلومات الأمن</h5>
          </div>
          <div className="content">
            <div className="new-row">
              <div className="grid">
                <label>البريد الإلكتروني</label>
                <p>usausa20102012@gmail.com</p>
              </div>
              <div className="grid">
                <label>كلمه السر</label>
                <p>********</p>
                <Button variant="primary">تغيير</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default User