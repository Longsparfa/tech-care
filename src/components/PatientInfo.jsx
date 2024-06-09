const PatientInfo = (prop) => {
  return (
    <div className="simple-flex margin-bottom">
      <div className="">
        <img src={prop.icon} className="margin-right" alt="icon" />
      </div>
      <div>
        <p className="title">{prop.title}</p>
        <p className="value">{prop.value}</p>
      </div>
    </div>
  );
};

export default PatientInfo;
