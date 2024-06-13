import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import PatientCard from "../components/PatientCard";
import PatientDetails from "../components/PatientDetails";
import LabResults from "../components/LabResults";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [patients, setPatients] = useState([]);

  const [, , , jessica] = patients;

  console.log(jessica);

  useEffect(() => {
    const fetchPatients = async () => {
      const { data } = await axios.get(
        "https://fedskillstest.coalitiontechnologies.workers.dev",
        { auth: { username: "coalition", password: "skills-test" } }
      );

      setPatients(data);
    };
    fetchPatients();
  }, []);

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
                    key={Date.now}
                    img={profile_picture}
                    name={name}
                    gender={gender}
                    age={age}
                    width={patientInfo.width}
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
                    <tr>
                      <td>{jessica?.diagnostic_list[0].name}</td>
                      <td>{jessica?.diagnostic_list[0].description}</td>
                      <td>{jessica?.diagnostic_list[0].status}</td>
                    </tr>
                    <tr>
                      <td>{jessica?.diagnostic_list[1].name}</td>
                      <td>{jessica?.diagnostic_list[1].description}</td>
                      <td>{jessica?.diagnostic_list[1].status}</td>
                    </tr>
                    <tr>
                      <td>{jessica?.diagnostic_list[2].name}</td>
                      <td>{jessica?.diagnostic_list[2].description}</td>
                      <td>{jessica?.diagnostic_list[2].status}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="patient-details">
            <PatientDetails
              img={jessica?.profile_picture}
              name={jessica?.name}
              DOB={jessica?.date_of_birth}
              gender={jessica?.gender}
              contact={jessica?.phone_number}
              emergency={jessica?.emergency_contact}
              insurance={jessica?.insurance_type}
            />

            <div className="results">
              <h2 className="margin-bottom">Lab Results</h2>
              <div className="padding-1rem overflow-y-scroll">
                <LabResults test={jessica?.lab_results[0]} />
                <LabResults test={jessica?.lab_results[1]} />
                <LabResults test={jessica?.lab_results[2]} />
                <LabResults test={jessica?.lab_results[3]} />
                {/* <LabResults test={jessica?.lab_results[4]} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
