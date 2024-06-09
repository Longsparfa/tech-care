const LabResults = (prop) => {
  return (
    <div className="space-between margin-bottom">
      <p className="test-text">{prop.test}</p>
      <img
        src="assets/icons/download_FILL0_wght300_GRAD0_opsz24 (1).svg"
        alt="download"
      />
    </div>
  );
};

export default LabResults;
