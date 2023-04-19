import React from "react";

const EmptyAlert = () =>{
   
    const backPage = ()=>{
        window.location.href= "http://localhost:3000/"
    }
    return(
        <div className="Shop-empty" data-aos="fade-up">
        <div className="alert">
        <h2>Şuan tatil planınız bulunmamaktadır </h2>
          <button onClick={backPage}> <span>Planlara Göz At</span></button>
        </div>
        </div>      
    )

}

export default EmptyAlert