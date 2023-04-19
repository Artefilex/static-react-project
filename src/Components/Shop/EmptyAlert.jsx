import React from "react";

const EmptyAlert = () =>{
   
    const backPage = ()=>{
        window.location.href= "http://localhost:3000/"
    }
    return(
        <div className="Shop-empty">
          <h2>Bir tatil planı seçin</h2>
        <button onClick={backPage}> alış verişe git</button>
        </div>      
    )

}

export default EmptyAlert