import NavLinks from "./NavLink";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="nav-layout">
        <div className="flex">
          <img className="logo" src="assets/icons/TestLogo.svg" alt="logo" />
        </div>
        <div className="nav-links">
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
        </div>
        <div className="flex">
          <div className="flex senior">
            <img
              src="assets/images/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc\senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png"
              alt="senior-woman-doctor"
            />
            <div className="link margin-left">
              <p className="nav">Dr Dumebi</p>
              <p className="nav1">General Practitioner</p>
            </div>
            <div className="line " />
          </div>
          <img
            className="settings link"
            src="assets/icons/settings_FILL0_wght300_GRAD0_opsz24.svg"
            alt=""
          />
          <img
            className="dot3"
            src="assets/icons/more_vert_FILL0_wght300_GRAD0_opsz24.svg"
            alt="dot3"
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
