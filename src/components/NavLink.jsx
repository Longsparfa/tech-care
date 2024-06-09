import { NavLink } from "react-router-dom";

const NavLinks = (prop) => {
  return (
    <>
      <a className="nav anchor">
        <NavLink
          to={prop.link}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <img className="overview" src={prop.icon} alt={prop.description} />
          {prop.description}
        </NavLink>
      </a>
    </>
  );
};

export default NavLinks;
