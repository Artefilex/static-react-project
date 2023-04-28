import Summary from "./Summary";
import Form from "./Form";


const Payment = () => {
  return (
    <div className="Payment">
      <div className="Payment-method">
        <h1>Ödeme Bilgileri</h1>
        <div className="invoice">
        {!localStorage.getItem("allInfo") &&  <Form /> }
        </div>
     
            <Summary />
       
      </div>
    </div>
  );
};

export default Payment;
