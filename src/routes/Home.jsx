import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
// import PatientCard from "../components/PatientCard";
// import patients from "../patients";
import PatientDetails from "../components/PatientDetails";
import LabResults from "../components/LabResults";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      // const username = `${import.meta.env.VITE_APP_USERNAME}`;
      // const password = `${import.meta.env.VITE_APP_PASSWORD}`;
      // const token = btoa(`${username}:${password}`);

      const url = "https://fedskillstest.coalitiontechnologies.workers.dev";
      const username = "coalition";
      const password = "skill-test";
      const basicAuth = "Basic " + btoa(`${username}:${password}`);
      // Y29hbGl0aW9uOnNraWxscy10ZXN0

      console.log(basicAuth);

      await axios
        .get(
          url,
          {},
          {
            headers: {
              Authorization: `${basicAuth}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(
            "Error",
            error.response ? error.response.data : error.message
          );
        });
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
              {/* {patients.map((patientInfo) => {
                return (
                  <PatientCard
                    key={Date.now}
                    img={patientInfo.img}
                    name={patientInfo.name}
                    gender={patientInfo.gender}
                    age={patientInfo.age}
                    width={patientInfo.width}
                  />
                );
              })} */}
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
                      <td>Hypertension</td>
                      <td>Chronic high blood pressure</td>
                      <td>Under Observation</td>
                    </tr>
                    <tr>
                      <td>Type 2 Diabetes</td>
                      <td>Insulin resistance and elevated blood sugar</td>
                      <td>Cured</td>
                    </tr>
                    <tr>
                      <td>Asthma</td>
                      <td>Recurrent episodes of bronchial constriction</td>
                      <td>Inactive</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="patient-details">
            <PatientDetails
              img="assets/images/Layer 2/Layer 2@2x.png"
              // name={patients[3].name}
            />

            <div className="results">
              <h2 className="margin-bottom">Lab Results</h2>
              <div className="padding-1rem overflow-y-scroll">
                <LabResults test="Blood Tests" />
                <LabResults test="CT Scans" />
                <LabResults test="Radiology Reports" />
                <LabResults test="X-Rays" />
                <LabResults test="Urine Test" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
