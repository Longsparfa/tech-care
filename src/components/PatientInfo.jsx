const PatientInfo = (prop) => {
  return (
    <div className="flex items-center my-4">
      <div className="mr-2">
        <img src={prop.icon} className="" alt="icon" />
      </div>
      <div>
        <p className="font-[Manrope] font-lighter text-[#072635]">
          {prop.title}
        </p>
        <p className="font-[Manrope] font-bold text-[#072635]">
          {prop.value}
        </p>
      </div>
    </div>
  );
};

export default PatientInfo;
