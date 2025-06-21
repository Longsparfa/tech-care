import PatientInfo from "./PatientInfo";

const PatientDetails = (prop) => {
  return (
    <div className="">
      <div className="flex items-center justify-center">
        <img className="w-[200px] " src={prop.img} alt="patient" />
      </div>
      <p className="font-[Manrope] font-bold text-center text-[#072635] mt-4">
        {prop.name}
      </p>
      <PatientInfo
        icon="assets/icons/BirthIcon.svg"
        title="Date Of Birth"
        value={prop.DOB}
      />
      <PatientInfo
        icon="assets/icons/FemaleIcon.svg"
        title="Gender"
        value={prop.gender}
      />
      <PatientInfo
        icon="assets/icons/PhoneIcon.svg"
        title="Contact Info."
        value={prop.contact}
      />
      <PatientInfo
        icon="assets/icons/PhoneIcon.svg"
        title="Emergency Contacts"
        value={prop.emergency}
      />
      <PatientInfo
        icon="assets/icons/InsuranceIcon.svg"
        title="Insurance Provider"
        value={prop.insurance}
      />
      <div className="flex items-center justify-center">
        <button className="bg-[#01f0d0] rounded-[41px] p-4 font-bold font-[Manrope] text-sm text-[#072635]  button">
          Show All Information
        </button>
      </div>
    </div>
  );
};

export default PatientDetails;
