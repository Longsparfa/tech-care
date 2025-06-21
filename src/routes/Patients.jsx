// import NavBar from "../components/NavBar";
import PatientCard from "../components/PatientCard";
import PatientDetails from "../components/PatientDetails";
import LabResults from "../components/LabResults";
import { useEffect, useState } from "react";
import axios from "axios";
import PatientsView from "../components/PatientsView";

const Patients = () => {
  const [patients, setPatients] = useState([]);

  const [, , , jessica] = patients;

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
      <div className=" sm:flex flex-col lg:flex-row overflow-hidden layout">
        <div className="w-[35re] h-[59rem] bg-[#ffffff] rounded-[16px] mt-4 ">
          <div className="p-4 relative w-[90%]">
            <input
              type="text"
              className="w-full font-[Manrope] text-[24px] text-[#072635] p-1 outline-non "
              placeholder="Patients"
            />
            <img
              className="absolute bottom-5 left-45 "
              src="assets/icons/search_FILL0_wght300_GRAD0_opsz24.svg"
              alt="search"
            />
          </div>
          <div className="flex md:flex-col items-center justify-center flex-wrap md:flex-nowrap overflow-y-scroll h-[90%] ">
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
          <div className="bg-[#ffffff] mt-4 mx-4 p-4 rounded-[16px] history">
            {/* <Outlet /> */}
            <PatientsView />
          </div>
          <div className="bg-[#ffffff] mt-4 mx-2 p-4 rounded-[16px] list">
            <h2 className="font-[Manrope] font-bold text-xl text-[#072635]">
              Diagnosis List
            </h2>
            <div className="overflow-y-scroll">
              <table>
                <thead>
                  <tr className="bg-[#f6f7f8] rounded-[24px] table-margin">
                    <th className="p-4">Problem/Diagnosis</th>
                    <th className="p-4">Description</th>
                    <th className="p-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-[Manrope] p-4 text-[#072635] ">
                      {jessica?.diagnostic_list[0].name}
                    </td>
                    <td className="font-[Manrope] p-4 text-[#072635] ">
                      {jessica?.diagnostic_list[0].description}
                    </td>
                    <td className="font-[Manrope] p-4 text-[#072635] ">
                      {jessica?.diagnostic_list[0].status}
                    </td>
                  </tr>
                  <tr>
                    <td className="font-[Manrope] p-4 text-[#072635]">
                      {jessica?.diagnostic_list[1].name}
                    </td>
                    <td className="font-[Manrope] p-4 text-[#072635]">
                      {jessica?.diagnostic_list[1].description}
                    </td>
                    <td className="font-[Manrope] p-4 text-[#072635]">
                      {jessica?.diagnostic_list[1].status}
                    </td>
                  </tr>
                  <tr>
                    <td className="font-[Manrope] p-4 text-[#072635]">
                      {jessica?.diagnostic_list[2].name}
                    </td>
                    <td className="font-[Manrope] p-4 text-[#072635]">
                      {jessica?.diagnostic_list[2].description}
                    </td>
                    <td className="font-[Manrope] p-4 text-[#072635]">
                      {jessica?.diagnostic_list[2].status}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="patient-details">
          <div className="bg-[#ffffff] mt-4 p-4 rounded-[16px]">
            <PatientDetails
              img={jessica?.profile_picture}
              name={jessica?.name}
              DOB={jessica?.date_of_birth}
              gender={jessica?.gender}
              contact={jessica?.phone_number}
              emergency={jessica?.emergency_contact}
              insurance={jessica?.insurance_type}
            />
          </div>
          <div className="bg-[#ffffff] mt-4 mx-2 p-4 rounded-[16px] results">
            <h2 className="font-[Manrope] font-bold text-xl text-[#072635] mb-4">
              Lab Results
            </h2>
            <div className="p-4 overflow-y-scroll h-[90%] ">
              <LabResults test={jessica?.lab_results[0]} />
              <LabResults test={jessica?.lab_results[1]} />
              <LabResults test={jessica?.lab_results[2]} />
              <LabResults test={jessica?.lab_results[3]} />
              {/* <LabResults test={jessica?.lab_results[4]} /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Patients;
