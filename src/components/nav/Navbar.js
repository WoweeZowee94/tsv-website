import NavMenu from "./NavMenu";
import { FaBars } from "react-icons/fa";
import SocialIcons from "./SocialIcons";
import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 900) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  const openNav = () => {
    document.getElementById("MobileOverlay").style.height = "100%";
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, [window.innerWidth]);
  return (
    <div>
      <div className="AppBar">
        <div className="logo">
          {" "}
          <span>Three Seasons</span>{" "}
          <span style={{ color: "#01bf71" }}>Café</span>{" "}
        </div>
        <NavMenu />
        <div className="bars">
          {window.innerWidth < 900 ? (
            <FaBars className="icon-bars" onClick={() => openNav()} />
          ) : (
            <SocialIcons />
          )}
        </div>
      </div>
      <MobileMenu />
    </div>
  );
};

export default Navbar;
