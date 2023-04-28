import React from 'react'
import { useDispatch } from "react-redux";
import { userCard } from "../../../Reducer/reducer/AuthorSlice";
import {useEffect ,useState } from "react";

const CardForm = () => {
    const dispatch = useDispatch();
    const data =JSON.parse( localStorage.getItem("allInfo"))
    const [form, setForm] = useState({
        cardName: "",
        cardNumber: "",
        date: "",
        cvv: ""
      });
  
      const handleChange = (e) => {
        const {name, value}= e.target;
        
        if (name === "cardNumber") {
          const numericValue = value.replace(/[^0-9]/g, '');

          // Her 4 karakterde bir boşluk ekle
          let formattedValue = numericValue.replace(/\d{4}(?=\d)/g, '$& ');

          if (formattedValue.length <= 30) {
            setForm(prevState => ({
              ...prevState,
              [name]: formattedValue
            }));
          }

        }
        else{
          setForm(preveState => ({
            ...preveState,
            [name]: value
          }))
        }

       

        
      }
     
      const handleSubmit = (e) => {
        e.preventDefault();
        setForm({ 
          cardName: "",
          cardNumber: "",
          date: "",
          cvv: ""})
        dispatch(userCard(form));
        if(form.cardName && form.cardNumber && form.cvv && form.date){
          data[0].cardName = form.cardName 
          data[0].cardNumber =form.cardNumber 
          data[0].cvv = form.cvv
          data[0].date = form.date
          localStorage.setItem("allInfo",JSON.stringify(data))   
        }
        
      };
      useEffect(() => {
        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('allInfo', handleStorageChange);
      }, []);
      const handleStorageChange = (event) => {
        if (event.storageArea === localStorage) {
         window.location.reload()
        }
      };
     

    return (
        < form onSubmit={handleSubmit}>
         
          <div className="form-div">
              <h2>Kart Bilgileri :</h2>
              <div className="input-div">
              <label htmlFor="cart">Kart üzerindeki isim </label>
              <input name="cardName" 
              type="text"
              value={form.cardName}
              onChange={handleChange}
              placeholder='Jhon Doe' 
               />
            </div>
            <div className="input-div">
              <label htmlFor="cartInfo"> Kart Numarası </label>
              <input
                type="text"
                name="cardNumber"
                maxLength={19}
                value={form.cardNumber}
                onChange={ handleChange}
                placeholder='1234 1234 1234 1234' 
              />
            </div>
    
            <div className="input-date">
              <div className="input-div">
                <label htmlFor="date">Sona Erme Tarihi </label>
                <input type="text" 
                name="date"
                value={form.date} 
                maxLength={4}
               
                onChange={handleChange}
                placeholder='MM/YY' />
                 
              </div>
    
              <div className="input-div">
              <label htmlFor="cvv">CVV </label>
              <input 
              name="cvv" 
              type="text" 
              maxLength={3}
              value={form.cvv} 
              onChange={handleChange}
              placeholder='123'  />
            </div></div>
          </div>
          <button type="submit" className="btn"> kaydet </button>
        </form> 
      )
  
}

export default CardForm