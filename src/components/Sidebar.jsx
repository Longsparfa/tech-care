// import { NavLink } from "react-router-dom";
// import {
//   FaUser,
//   FaCalendarAlt,
//   FaEnvelope,
//   FaMoneyBill,
//   FaChartPie,
// } from "react-icons/fa";
import NavLinks from "./NavLink";

const Sidebar = () => {
//   const linkClass = ({ isActive }) =>
//     `flex items-center gap-3 p-3 rounded-lg font-[Manrope] text-sm ${
//       isActive ? "bg-[#072635] text-white" : "text-[#072635] hover:bg-[#e6f0ff]"
//     }`;

  return (
    <div className="bg-white p-4 rounded-lg w-full max-w-[240px] mt-4 mr-4 shadow-sm">
      <nav className="flex flex-col gap-2">
        {/* <NavLink to="/overview" className={linkClass}>
          <FaChartPie /> Overview
        </NavLink>
        <NavLink to="/patients" className={linkClass}>
          <FaUser /> Patients
        </NavLink>
        <NavLink to="/schedule" className={linkClass}>
          <FaCalendarAlt /> Schedule
        </NavLink>
        <NavLink to="/message" className={linkClass}>
          <FaEnvelope /> Messages
        </NavLink>
        <NavLink to="/transactions" className={linkClass}>
          <FaMoneyBill /> Transactions
        </NavLink> */}
        <NavLinks
          icon="assets/icons/home_FILL0_wght300_GRAD0_opsz24.svg"
          description="Overview"
          link="/"
        />
        <NavLinks
          icon="assets/icons/group_FILL0_wght300_GRAD0_opsz24.svg"
          description="Patients"
          link="/patients"
        />
        <NavLinks
          icon="assets/icons/calendar_today_FILL0_wght300_GRAD0_opsz24.svg"
          description="Schedule"
          link="/schedule"
        />
        <NavLinks
          icon="assets/icons/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg"
          description="Message"
          link="/message"
        />
        <NavLinks
          icon="assets/icons/credit_card_FILL0_wght300_GRAD0_opsz24.svg"
          description="Transactions"
          link="/transactions"
        />
      </nav>
    </div>
  );
};

export default Sidebar;
