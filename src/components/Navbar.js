import NavMenu from "./NavMenu";
import { FaBars } from "react-icons/fa";
import SocialIcons from "./SocialIcons";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 900) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  });
  return (
    <div className="AppBar">
      <div className="logo">Three Seasons Cafe</div>
      <NavMenu />
      <div className="bars">
        {isMobile?<FaBars className="icon-bars" />:<SocialIcons />}
      </div>
    </div>
  );
};

export default Navbar;
