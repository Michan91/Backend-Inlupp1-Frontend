import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1>Ärendelistan</h1>
        <ul className="nav-links">
          <li>
            <NavLink to="/issues" className="nav-link">
              Alla ärenden
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="nav-link">
              +Lägg till ärende
            </NavLink>
          </li>
          <li>
            <NavLink to="/addcustomer" className="nav-link">
              +Lägg till användare
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
