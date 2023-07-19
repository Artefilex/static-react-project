import { memo } from "react";
import { NavLink } from "react-router-dom";
const Links = () => {
  return (
    <>
      <li className="navItem">
        <NavLink to={"/"} className="navLink">
         
          Home
        </NavLink>
      </li>
      <li className="navItem">
        <NavLink to={"/shop"} className="navLink">
         
          Shop
        </NavLink>
      </li>
      {/* <li className="navItem">
        <NavLink to={"/about "} className="navLink">
          Lorem
        </NavLink>
      </li>
      <li className="navItem">
        <NavLink to={"/pages"} className="navLink">
       
          Lorem
        </NavLink>
      </li> */}
    </>
  );
};

export default memo(Links);
