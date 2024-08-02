import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import NavBar from "../components/NavBar";
import PatientCard from "../components/PatientCard";
import PatientDetails from "../components/PatientDetails";
import LabResults from "../components/LabResults";
import { v4 as uuid } from "uuid";
import { patientShape } from "../patient/patientShape";


const Home = ({
  patients,
  selectedPatientName,
  setSelectedPatientName,
  selectedPatientData,
}) => {
  return (
    <>
      <div className="container">
        <NavBar />
        <div className="layout">
          <div className="patients overflow-hidden">
            <div className="input-search">
              <input type="text" className="input" placeholder="Patients" />
              <img
                className="search"
                src="assets/icons/search_FILL0_wght300_GRAD0_opsz24.svg"
                alt="search"
              />
            </div>
            <div className="overflow-y-scroll">
              {patients.map((patientInfo) => {
                const { profile_picture, name, gender, age } = patientInfo;
                return (
                  <PatientCard
                    key={uuid()}
                    img={profile_picture}
                    name={name}
                    gender={gender}
                    age={age}
                    width={patientInfo.width}
                    selectedPatientName={selectedPatientName}
                    setSelectedPatientName={setSelectedPatientName}
                  />
                );
              })}
            </div>
          </div>
          <div className="diagnosis">
            <div className="history">
              <Outlet />
            </div>
            <div className="list">
              <h2 className="h2-list">Diagnosis List</h2>
              <div className="overflow-y-scroll">
                <table>
                  <thead>
                    <tr className="table-margin">
                      <th>Problem/Diagnosis</th>
                      <th>Description</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedPatientData?.diagnostic_list.map((dia) => {
                      return (
                        <tr key={uuid()}>
                          <td>{dia.name}</td>
                          <td>{dia.description}</td>
                          <td>{dia.status}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div>
            <div className="patient-details">
              <PatientDetails
                img={selectedPatientData?.profile_picture}
                name={selectedPatientData?.name}
                DOB={selectedPatientData?.date_of_birth}
                gender={selectedPatientData?.gender}
                contact={selectedPatientData?.phone_number}
                emergency={selectedPatientData?.emergency_contact}
                insurance={selectedPatientData?.insurance_type}
              />
            </div>
            <div className="results">
              <h2 className="margin-bottom">Lab Results</h2>
              <div className="padding-1rem overflow-y-scroll">
                {selectedPatientData?.lab_results.map((test) => {
                  return <LabResults key={uuid()} test={test} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Home.propTypes = {
  patients: PropTypes.arrayOf(patientShape),
  selectedPatientName: PropTypes.string.isRequired,
  setSelectedPatientName: PropTypes.func.isRequired,
  selectedPatientData: patientShape,
};

export default Home;
