import PatientInfo from "./PatientInfo";

const PatientDetails = (prop) => {
  return (
    <div className="padding-patient">
      <img className="w200" src={prop.img} alt="patient" />
      <p className="name">{prop.name}</p>
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
      <div className="flex margin-top">
        <button className="button">Show All Information</button>
      </div>
    </div>
  );
};

export default PatientDetails;
