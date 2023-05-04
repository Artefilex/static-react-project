import { memo } from "react";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { TbBrandTripadvisor, TbApps } from "react-icons/tb";
const HomeIcons = () => {
  return (
    <div data-aos="fade-up" className="homeFooterIcons">
      <div className="rightIcons">
        <FiFacebook className="icon" />
        <FiInstagram className="icon" />
        <TbBrandTripadvisor className="icon" />
      </div>
      <div className="leftIcons">
        <AiOutlineUnorderedList className="icon" />
        <TbApps className="icon" />
      </div>
    </div>
  );
};

export default memo(HomeIcons);
