import { Link } from "react-router-dom";


const NavMenu = () => {
  return (
    <ul className="menu">
       <div className="HomeContainer"> 
      <Link to="/" className="navLink"> Home </Link>
      </div>
      <Link to="menu"> Menu </Link>
      <Link to="events"> Events </Link>
      <Link to="about"> Contact </Link>
    </ul>
  );
};

export default NavMenu;
