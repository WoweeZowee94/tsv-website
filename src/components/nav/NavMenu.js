import { Link } from "react-router-dom";


const NavMenu = () => {
  document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest('[data-dropdown]') !== null) return 
    
    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
    }
    
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active')
    })
})
  return (
    <ul className="menu">
       <div className="HomeContainer"> 
      <Link to="/" className="navLink"> Home </Link>
      </div>
      <Link to="menu"> Menu </Link>
      <div className="header">
            <div className="dropdown" data-dropdown>
            <Link className="link" data-dropdown-button> Events</Link>
            <div className="dropdown-menu" information-grid>
                <Link to="buffets" style={{borderBottom: "1px solid black"}}> Buffets </Link>
                <div>Retirements & Showers</div>
                <div>Outings</div>
            </div>
             </div>
        </div>
      <Link to="about"> Contact </Link>
    </ul>
  );
};

export default NavMenu;
