import { LineChart } from "@mui/x-charts/LineChart";
// import PropTypes from "prop-types";
import Card from "../components/Card";
import { patientShape } from "../patient/patientShape";

patientShape;
const Patients = ({ selectedPatientData }) => {
  const sData =
    selectedPatientData && selectedPatientData.diagnosis_history
      ? Array.from(
          selectedPatientData?.diagnosis_history.flatMap(
            (diagnosis) => diagnosis.blood_pressure.systolic.value
          )
        )
      : [];

  const dData =
    selectedPatientData && selectedPatientData.diagnosis_history
      ? Array.from(
          selectedPatientData.diagnosis_history.flatMap(
            (diagnosis) => diagnosis.blood_pressure.diastolic.value
          )
        )
      : [];

  const xLabels =
    selectedPatientData && selectedPatientData.diagnosis_history
      ? Array.from(
          selectedPatientData.diagnosis_history.flatMap(
            (diagnosis) => `${diagnosis.month}, ${diagnosis.year}`
          )
        )
      : [];

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
          rate={`${selectedPatientData?.diagnosis_history[0].respiratory_rate.value} bpm`}
          status={`${selectedPatientData?.diagnosis_history[0].respiratory_rate.levels}`}
          color="#e0f3fa"
          margin="1rem"
        />
        <Card
          img="assets/icons/temperature.svg"
          content="Temperature"
          rate={`${selectedPatientData?.diagnosis_history[0].temperature.value}°F`}
          status={`${selectedPatientData?.diagnosis_history[0].temperature.levels}`}
          color="#FFE6E9"
          margin="1rem"
        />
        <Card
          img="assets/icons/HeartBPM.svg"
          content="Heart Rate"
          rate={`${selectedPatientData?.diagnosis_history[0].heart_rate.value} bpm`}
          status={`${selectedPatientData?.diagnosis_history[0].heart_rate.levels}`}
          color="#FFE6F1"
        />
      </div>
    </div>
  );
};

Patients.propTypes = {
  selectedPatientData: patientShape,
};

export default Patients;
