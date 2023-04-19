import { useState } from "react";

const PaymentForm = () => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
      const { value: newValue } = event.target;
      const formattedValue =formatValue(newValue.slice(0, 9));
      setValue(formattedValue);
    };
  
    const formatValue = (value) => {
      const formattedValue = value.replace(/\s/g, '').match(/.{1,4}/g);
      if (formattedValue) {
        return formattedValue.join(' ');
      }
      return value;
    };
    
    return (
    <form className='Payment-form-section'>
      <h4>
        Ödemeyi onayla
      </h4>
      <input
      type="text"
      className="input"
      placeholder={"wdqwd"}
      value={value}
      onChange={handleChange}
    />


     <button type="submit"> Ödemeyi Onayla</button>
    </form>
  )
}

export default PaymentForm