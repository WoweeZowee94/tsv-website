import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const NavMenu = () => {
  document.addEventListener("click", (e) => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]");
    if (!isDropdownButton && e.target.closest("[data-dropdown]") !== null)
      return;

    let currentDropdown;
    if (isDropdownButton) {
      currentDropdown = e.target.closest("[data-dropdown]");
      currentDropdown.classList.toggle("active");
    }

    document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
      if (dropdown === currentDropdown) return;
      dropdown.classList.remove("active");
    });
  });
  return (
    <ul className="menu">
      <div className="HomeContainer">
        <Link to="/" className="navLink">
          {" "}
          Home{" "}
        </Link>
      </div>
      <Link to="menu"> Menu </Link>
      <Link to="events"> Events </Link>
      <a href="https://topstonegc.com/"> Golf </a>
      {/* <HashLink to="/#contact-container"> Contact </HashLink> */}
    </ul>
  );
};

export default NavMenu;
