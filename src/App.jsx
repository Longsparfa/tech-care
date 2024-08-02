import Home from "./routes/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Overview from "./routes/Overview";
import Patients from "./routes/Patients";
import Schedule from "./routes/Schedule";
import Message from "./routes/Message";
import Transactions from "./routes/Transactions";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
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
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                patients={patients}
                selectedPatientName={selectedPatientName}
                setSelectedPatientName={setSelectedPatientName}
                selectedPatientData={selectedPatientData}
              />
            }
          >
            <Route path="/" element={<Overview />} />
            <Route
              path="/patients"
              element={<Patients selectedPatientData={selectedPatientData} />}
            />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/message" element={<Message />} />
            <Route path="/transactions" element={<Transactions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
