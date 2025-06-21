import NavLinks from "./NavLink";

const NavBar = () => {
  return (
    <div className="bg-[#ffffff] h-[72px] rounded-[70px] p-[16px] flex items-center justify-between navbar">
      <div className="">
        <img
          className="w-[70%] lg:w-[100%] "
          src="assets/icons/TestLogo.svg"
          alt="logo"
        />
      </div>
      <div className="hidden lg:flex items-center justify-center">
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
      <div className="flex items-center justify-center">
        <div className="flex items-center">
          <img
            src="assets/images/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc\senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png"
            alt="senior-woman-doctor"
            className=" mr-2 "
          />
          <div className="hidden sm:block mr-4">
            <p className="font-[Manrope] font-bold text-[#072635] text-sm ">
              Dr ChukwuDumebi
            </p>
            <p className="font-[Manrope] font-semibold text-[#707070] text-sm">
              General Practitioner
            </p>
          </div>
          <div className="w-[1px] h-[44px] bg-[#ededed] mr-4 " />
        </div>
        <img
          className="mr-4"
          src="assets/icons/settings_FILL0_wght300_GRAD0_opsz24.svg"
          alt=""
        />
        <img
          className="mr-4"
          src="assets/icons/more_vert_FILL0_wght300_GRAD0_opsz24.svg"
          alt="dot3"
        />
      </div>
    </div>
  );
};

export default NavBar;
