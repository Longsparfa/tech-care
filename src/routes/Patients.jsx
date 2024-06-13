import { LineChart } from "@mui/x-charts/LineChart";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import axios from "axios";

const Patients = () => {
  const [data, setData] = useState([]);
  const [, , , jessica] = data;

  useEffect(() => {
    const fetchPatients = async () => {
      const { data } = await axios.get(
        "https://fedskillstest.coalitiontechnologies.workers.dev",
        { auth: { username: "coalition", password: "skills-test" } }
      );

      setData(data);
    };
    fetchPatients();
  }, []);

  const sData = [
    `${jessica?.diagnosis_history[0].blood_pressure.systolic.value}`,
    `${jessica?.diagnosis_history[1].blood_pressure.systolic.value}`,
    `${jessica?.diagnosis_history[2].blood_pressure.systolic.value}`,
    `${jessica?.diagnosis_history[3].blood_pressure.systolic.value}`,
    `${jessica?.diagnosis_history[4].blood_pressure.systolic.value}`,
    `${jessica?.diagnosis_history[5].blood_pressure.systolic.value}`,
    `${jessica?.diagnosis_history[6].blood_pressure.systolic.value}`,
    `${jessica?.diagnosis_history[7].blood_pressure.systolic.value}`,
    `${jessica?.diagnosis_history[8].blood_pressure.systolic.value}`,
    `${jessica?.diagnosis_history[9].blood_pressure.systolic.value}`,
    `${jessica?.diagnosis_history[10].blood_pressure.systolic.value}`,
    `${jessica?.diagnosis_history[11].blood_pressure.systolic.value}`,
    `${jessica?.diagnosis_history[12].blood_pressure.systolic.value}`,
    `${jessica?.diagnosis_history[13].blood_pressure.systolic.value}`,
    `${jessica?.diagnosis_history[14].blood_pressure.systolic.value}`,
    `${jessica?.diagnosis_history[15].blood_pressure.systolic.value}`,
    `${jessica?.diagnosis_history[16].blood_pressure.systolic.value}`,
    `${jessica?.diagnosis_history[17].blood_pressure.systolic.value}`,
    `${jessica?.diagnosis_history[18].blood_pressure.systolic.value}`,
    `${jessica?.diagnosis_history[19].blood_pressure.systolic.value}`,
    `${jessica?.diagnosis_history[20].blood_pressure.systolic.value}`,
    `${jessica?.diagnosis_history[21].blood_pressure.systolic.value}`,
    `${jessica?.diagnosis_history[22].blood_pressure.systolic.value}`,
    `${jessica?.diagnosis_history[23].blood_pressure.systolic.value}`,
    `${jessica?.diagnosis_history[24].blood_pressure.systolic.value}`,
  ];
  const dData = [
    `${jessica?.diagnosis_history[0].blood_pressure.diastolic.value}`,
    `${jessica?.diagnosis_history[1].blood_pressure.diastolic.value}`,
    `${jessica?.diagnosis_history[2].blood_pressure.diastolic.value}`,
    `${jessica?.diagnosis_history[3].blood_pressure.diastolic.value}`,
    `${jessica?.diagnosis_history[4].blood_pressure.diastolic.value}`,
    `${jessica?.diagnosis_history[5].blood_pressure.diastolic.value}`,
    `${jessica?.diagnosis_history[6].blood_pressure.diastolic.value}`,
    `${jessica?.diagnosis_history[7].blood_pressure.diastolic.value}`,
    `${jessica?.diagnosis_history[8].blood_pressure.diastolic.value}`,
    `${jessica?.diagnosis_history[9].blood_pressure.diastolic.value}`,
    `${jessica?.diagnosis_history[10].blood_pressure.diastolic.value}`,
    `${jessica?.diagnosis_history[11].blood_pressure.diastolic.value}`,
    `${jessica?.diagnosis_history[12].blood_pressure.diastolic.value}`,
    `${jessica?.diagnosis_history[13].blood_pressure.diastolic.value}`,
    `${jessica?.diagnosis_history[14].blood_pressure.diastolic.value}`,
    `${jessica?.diagnosis_history[15].blood_pressure.diastolic.value}`,
    `${jessica?.diagnosis_history[16].blood_pressure.diastolic.value}`,
    `${jessica?.diagnosis_history[17].blood_pressure.diastolic.value}`,
    `${jessica?.diagnosis_history[18].blood_pressure.diastolic.value}`,
    `${jessica?.diagnosis_history[19].blood_pressure.diastolic.value}`,
    `${jessica?.diagnosis_history[20].blood_pressure.diastolic.value}`,
    `${jessica?.diagnosis_history[21].blood_pressure.diastolic.value}`,
    `${jessica?.diagnosis_history[22].blood_pressure.diastolic.value}`,
    `${jessica?.diagnosis_history[23].blood_pressure.diastolic.value}`,
    `${jessica?.diagnosis_history[24].blood_pressure.diastolic.value}`,
  ];
  const xLabels = [
    `${jessica?.diagnosis_history[0].month}, ${jessica?.diagnosis_history[0].year}`,
    `${jessica?.diagnosis_history[1].month}, ${jessica?.diagnosis_history[1].year}`,
    `${jessica?.diagnosis_history[2].month}, ${jessica?.diagnosis_history[2].year}`,
    `${jessica?.diagnosis_history[3].month}, ${jessica?.diagnosis_history[3].year}`,
    `${jessica?.diagnosis_history[4].month}, ${jessica?.diagnosis_history[4].year}`,
    `${jessica?.diagnosis_history[5].month}, ${jessica?.diagnosis_history[5].year}`,
    `${jessica?.diagnosis_history[6].month}, ${jessica?.diagnosis_history[6].year}`,
    `${jessica?.diagnosis_history[7].month}, ${jessica?.diagnosis_history[7].year}`,
    `${jessica?.diagnosis_history[8].month}, ${jessica?.diagnosis_history[8].year}`,
    `${jessica?.diagnosis_history[9].month}, ${jessica?.diagnosis_history[9].year}`,
    `${jessica?.diagnosis_history[10].month}, ${jessica?.diagnosis_history[10].year}`,
    `${jessica?.diagnosis_history[11].month}, ${jessica?.diagnosis_history[11].year}`,
    `${jessica?.diagnosis_history[12].month}, ${jessica?.diagnosis_history[12].year}`,
    `${jessica?.diagnosis_history[13].month}, ${jessica?.diagnosis_history[13].year}`,
    `${jessica?.diagnosis_history[14].month}, ${jessica?.diagnosis_history[14].year}`,
    `${jessica?.diagnosis_history[15].month}, ${jessica?.diagnosis_history[15].year}`,
    `${jessica?.diagnosis_history[16].month}, ${jessica?.diagnosis_history[16].year}`,
    `${jessica?.diagnosis_history[17].month}, ${jessica?.diagnosis_history[17].year}`,
    `${jessica?.diagnosis_history[18].month}, ${jessica?.diagnosis_history[18].year}`,
    `${jessica?.diagnosis_history[19].month}, ${jessica?.diagnosis_history[19].year}`,
    `${jessica?.diagnosis_history[20].month}, ${jessica?.diagnosis_history[20].year}`,
    `${jessica?.diagnosis_history[21].month}, ${jessica?.diagnosis_history[21].year}`,
    `${jessica?.diagnosis_history[22].month}, ${jessica?.diagnosis_history[22].year}`,
    `${jessica?.diagnosis_history[23].month}, ${jessica?.diagnosis_history[23].year}`,
    `${jessica?.diagnosis_history[24].month}, ${jessica?.diagnosis_history[24].year}`,
  ];

  return (
    <div className="patients-chart">
      <h2 className="chart-h2">Diagnosis History</h2>
      <div className="chart">
        <h3 className="chart-h3">Blood Pressure</h3>

        <LineChart
          xAxis={[
            {
              scaleType: "point",
              data: xLabels,
            },
          ]}
          series={[
            {
              data: sData,
              label: "Systolic",
              color: "#E66FD2",
            },
            {
              data: dData,
              label: "Diastolic",
              color: "#7E6CAB",
            },
          ]}
          width={500}
          height={300}
          grid={{ horizontal: true }}
        />
      </div>
      <div className="flex padding">
        <Card
          img="assets/icons/respiratory rate.svg"
          content="Respiratory Rate"
          rate={`${jessica?.diagnosis_history[0].respiratory_rate.value} bpm`}
          status={`${jessica?.diagnosis_history[0].respiratory_rate.levels}`}
          color="#e0f3fa"
          margin="1rem"
        />
        <Card
          img="assets/icons/temperature.svg"
          content="Temperature"
          rate={`${jessica?.diagnosis_history[0].temperature.value}°F`}
          status={`${jessica?.diagnosis_history[0].temperature.levels}`}
          color="#FFE6E9"
          margin="1rem"
        />
        <Card
          img="assets/icons/HeartBPM.svg"
          content="Heart Rate"
          rate={`${jessica?.diagnosis_history[0].heart_rate.value} bpm`}
          status={`${jessica?.diagnosis_history[0].heart_rate.levels}`}
          color="#FFE6F1"
        />
      </div>
    </div>
  );
};

export default Patients;
