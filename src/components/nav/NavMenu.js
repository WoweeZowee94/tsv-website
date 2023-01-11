import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const NavMenu = () => {
  return (
    <ul className="menu">
      <div className="HomeContainer">
        <Link to="/" className="navLink">
          {" "}
          Home{" "}
        </Link>
      </div>
      <Link to="menu" className="navLink">
        {" "}
        Menu{" "}
      </Link>
      <Link to="events" className="navLink">
        {" "}
        Events{" "}
      </Link>
      <a href="https://topstonegc.com/" className="navLink">
        {" "}
        Golf{" "}
      </a>
      {/* <HashLink to="/#contact-container"> Contact </HashLink> */}
    </ul>
  );
};

export default NavMenu;
