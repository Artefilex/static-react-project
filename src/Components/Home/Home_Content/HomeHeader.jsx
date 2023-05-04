import { memo } from "react";

const HomeHeader = () => {
  return (
    <div className="textDiv">
      <span data-aos="fade-down" className="smallText">
        Our Packages
      </span>
      <h1 data-aos="fade-down" className="homeTitle">
        Search Your Holiday
      </h1>
    </div>
  );
};

export default memo(HomeHeader);
