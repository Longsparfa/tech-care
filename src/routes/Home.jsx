import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import PatientCard from "../components/PatientCard";
import PatientDetails from "../components/PatientDetails";
import LabResults from "../components/LabResults";
import { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";

const Home = () => {
  const [patients, setPatients] = useState([]);
  const [selectedPatientName, setSelectedPatientName] =
    useState("Jessica Taylor");
  const [selectedPatientData, setSelectedPatientData] = useState(null);

  useEffect(() => {
    const fetchPatients = async () => {
      const { data } = await axios.get(
        "https://fedskillstest.coalitiontechnologies.workers.dev",
        { auth: { username: "coalition", password: "skills-test" } }
      );

      setPatients(data);

      const defaultPatient = data.find(
        (person) => person.name === selectedPatientName
      );

      setSelectedPatientData(defaultPatient);
    };
    fetchPatients();
  }, [selectedPatientName]);

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

export default Home;
