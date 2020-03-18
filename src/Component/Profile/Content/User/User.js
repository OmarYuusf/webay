import React from "react";
import "./User.css";
import { Button, Form } from "react-bootstrap";

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
              <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>الأسم</Form.Label>
                  <Form.Control type="text" placeholder="الأسم بالكامل" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>اللغه</Form.Label>
                  <Form.Control as="select">
                    <option>العربي</option>
                    <option>English</option>
                  </Form.Control>
                </Form.Group>
              </Form>
            </div>
            <div className="group-button">
              <Button variant="success">حفظ</Button>
            </div>
          </div>
        </div>
        <div className="profile-card">
          <div className="header">
            <h5>معلومات الأمن</h5>
          </div>
          <div className="content">
            <div className="privacy">
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
export default User;
