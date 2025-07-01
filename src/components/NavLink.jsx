import { NavLink } from "react-router-dom";

const NavLinks = (prop) => {
  return (
    <>
      <a className="mr-6 font-[Times_New_Roman] font-bold text-[16px] text-[#0000EE] hover:text-[#707070] ">
        <NavLink
          to={prop.link}
          className={({ isActive }) =>
            isActive ? "active flex items-center" : "flex items-center "
          }
        >
          <img className="mr-2" src={prop.icon} alt={prop.description} />
          {prop.description}
        </NavLink>
      </a>
    </>
  );
};

export default NavLinks;
