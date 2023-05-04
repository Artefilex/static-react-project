import { memo } from "react";
import { useSelector } from "react-redux";
const EmptyAlert = () => {
  const isActive = useSelector((state) => state.author.activeUser);

  const backPage = () => {
    window.location.href = "http://localhost:3000/";
  };
  return (
    <div className="Shop-empty" data-aos="fade-up">
      {!isActive && (
        <div className="alert">
          <h2>Giriş yapmadınız</h2>
          <button onClick={() => (window.location.href = "/login")}>
            {" "}
            <span>Login</span>
          </button>
        </div>
      )}

      {isActive && (
        <div className="alert">
          <h2>Şuan tatil planınız bulunmamaktadır </h2>
          <button onClick={backPage}>
            {" "}
            <span>Planlara Göz At</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default memo(EmptyAlert);
