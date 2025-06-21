import { NavLink } from "react-router-dom";

const PatientCard = (prop) => {
  return (
    <NavLink
      to={"/patient"}
      className={({ isActive }) => (isActive ? "active" : "")}
    >
      <div className="flex items-center justify-between p-4 patient-card">
        <div className="flex items-center justify-center m-4 patient-info">
          <img src={prop.img} alt="patient" style={{ width: prop.width }} />
          <div className="ml-2">
            <p className="font-[Manrope] font-bold text-sm text-[#072635] ">
              {prop.name}
            </p>
            <p className="font-[Manrope] font-bold text-sm text-[#707070]">
              {prop.gender}, {prop.age}
            </p>
          </div>
        </div>
        <img
          src="assets/icons/more_horiz_FILL0_wght300_GRAD0_opsz24.svg"
          alt=""
        />
      </div>
    </NavLink>
  );
};

export default PatientCard;
