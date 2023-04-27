import Summary from "./Summary";
import Form from "./Form";
import { useState } from "react";

const Payment = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="Payment">
      <div className="Payment-method">
        <h1>Ödeme Bilgileri</h1>
        <div className="invoice">
          {!localStorage.getItem("allInfo") && <Form />}
            {show && <Form />}
        </div>
     
            {!show && <Summary />}
        <div>
          <button className="btn" onClick={() => setShow(!show)}>
            {" "}
            {!show ? (
              <span>Bilgileri Değiştir </span>
            ) : (
              <span>Fatura Bilgileri </span>
            )}{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
