import React, { useEffect, useState } from "react";
import "../../Assests/scss/user/user.css";
import { useSelector } from "react-redux";

const UserOption = () => {
  const [count, setCount] = useState(null);

  const basket = JSON.parse(localStorage.getItem("market"));
  useEffect(() => {
    setCount(basket.length);
  }, [basket]);

  const user = useSelector((state) => state.author.userProfile);
  const users = useSelector((state) => state.author.users);
  
  const handleClick = () =>{
   localStorage.removeItem("userProfile")
   localStorage.removeItem("isActive")
   window.location.reload();
  }
  
  return (
    <div className="User">
      <div className="User-Item">
        {JSON.parse(localStorage.getItem("isActive")) === true && users
          .filter(
            (item) =>
              item.username === user.username && item.password === user.password
          )
          .map((data, i) => (
            <div className="User-Item-section" key={i}>
             <div className="user-profile">
             <img
                src={
                  "https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"
                }
                alt=""
              />
              <div className="user-info" >
              <span>  {data.email}</span>
               <span> {data.name} </span>
              </div>
             </div>
              <div className="user-options">  
              <a href="/shop" className="user-box">
                <span>Sepet</span> <span>{count}</span>
              </a>
              <a href="/gift">Ayrıcalıklar</a>
              <a href="/setting">ayarlar </a>
              <a href="/"> span</a>
              <a href="/"> span</a>
              <a href="/"> span</a>
              <a href="/"> span</a>
              </div>
              
              <button className="logout" onClick={handleClick} >Logout </button>     
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserOption;
