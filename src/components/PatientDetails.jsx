import PatientInfo from "./PatientInfo";

const PatientDetails = (prop) => {
  return (
    <div className="padding-patient">
      <img className="w200" src={prop.img} alt="patient" />
      <p className="name">{prop.name}</p>
      <PatientInfo
        icon="assets/icons/BirthIcon.svg"
        title="Date Of Birth"
        value="August 23, 1996"
      />
      <PatientInfo
        icon="assets/icons/FemaleIcon.svg"
        title="Gender"
        value="Female"
      />
      <PatientInfo
        icon="assets/icons/PhoneIcon.svg"
        title="Contact Info."
        value="(415) 555-1234"
      />
      <PatientInfo
        icon="assets/icons/PhoneIcon.svg"
        title="Emergency Contacts"
        value="(415) 555-5678"
      />
      <PatientInfo
        icon="assets/icons/InsuranceIcon.svg"
        title="Insurance Provider"
        value="Sunrise Health Assurance"
      />
      <div className="flex margin-top">
        <button className="button">Show All Information</button>
      </div>
    </div>
  );
};

export default PatientDetails;
