import React from "react";
import "./Wallet.css";

const Wallet = (props) => {
  return (
    <div
      className="wallet"
      style={{
        direction: props.language === "en" ? "ltr" : "rtl",
        textAlign: props.language === "en" ? "left" : "right",
      }}
    >
      <div>
        <p>رصيدي</p>
        <h1>
          LE <span>200.00 </span>
        </h1>
      </div>
      <div className="add-wallet">
        <div>
          <input type="text" placeholder="ادخل رقم البضاقه" />
          <button>استخدم</button>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
