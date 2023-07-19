import { useEffect, useState, memo, useCallback } from "react";
import { useSelector } from "react-redux";
import UserOption from "../UserOption/UserOption";

const UserBtn = () => {
  const activeUser = useSelector((state) => state.author.user);
  const userActive = JSON.parse(localStorage.getItem("isActive"));
  const [open, setOpen] = useState(false);

  useEffect(() => {}, [activeUser]);

  const handleLocation = useCallback(() => {
    window.location.href = "/login";
  }, []);
  const handleClick = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <div>
      {!userActive && (
        <button onClick={handleLocation} className="btn">
          Log In
        </button>
      )}

      {userActive && (
        <>
          <button className="btn" onClick={handleClick}>
            User
          </button>
          {open && <UserOption />}
        </>
      )}
    </div>
  );
};

export default memo(UserBtn);
