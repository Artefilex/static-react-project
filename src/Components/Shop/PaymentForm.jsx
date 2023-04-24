import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { showPayment } from "../../Reducer/reducer/MarketSlice";

const PaymentForm = () => {
  const [value, setValue] = useState([]);
  const amount = useSelector((state) => state.market.total);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClick = () => {
    setShow(!show);
    dispatch(showPayment(show));
  };
  const isActive = useSelector((state) => state.author.activeUser);

  useEffect(() => {
    setValue(amount);
  }, [amount]);

  return (
  <>
  { isActive &&
      <div className="Payment-form-section">
      <h2> Tatil Özeti </h2>
      <div className="total">
        <h4>Toplam Tutar : </h4> <h4> $ {value}</h4>
      </div>

      <button className="btn" onClick={handleClick}>
        Ödeme Bilgileri
      </button>
    </div>
  }
  </>
  );
};

export default PaymentForm;
