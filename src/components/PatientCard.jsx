const PatientCard = (prop) => {
  return (
    <div className="patient-card">
      <div className="patient-info">
        <img src={prop.img} alt="patient" style={{width: prop.width}} />
        <div className="margin-left">
          <p className="nav">{prop.name}</p>
          <p className="nav1">
            {prop.gender}, {prop.age}
          </p>
        </div>
      </div>
      <img
        src="assets/icons/more_horiz_FILL0_wght300_GRAD0_opsz24.svg"
        alt=""
      />
    </div>
  );
};

export default PatientCard;
