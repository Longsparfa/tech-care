import { LineChart } from "@mui/x-charts/LineChart";
import Card from "../components/Card";

const Patients = () => {
  const sData = [60, 80, 100, 120, 140, 160, 180];
  const dData = [120, 80, 100, 120, 140, 160, 180];
  const xLabels = [
    "Oct, 2023",
    "Nov, 2023",
    "Dec, 2023",
    "Jan, 2024",
    "Feb, 2024",
    "Mar, 2024",
    "Apr, 2024",
    "May, 2024",
    "Jun, 2024",
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
          rate="20 bpm"
          status="Normal"
          color="#e0f3fa"
          margin="1rem"
        />
        <Card
          img="assets/icons/temperature.svg"
          content="Temperature"
          rate="98.6°F"
          status="Normal"
          color="#FFE6E9"
          margin="1rem"
        />
        <Card
          img="assets/icons/HeartBPM.svg"
          content="Heart Rate"
          rate="78 bpm"
          status="Lower than average"
          color="#FFE6F1"
        />
      </div>
    </div>
  );
};

export default Patients;
