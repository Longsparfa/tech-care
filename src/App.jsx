import Home from "./routes/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Overview from "./routes/Overview";
import Patients from "./routes/Patients";
import Schedule from "./routes/Schedule";
import Message from "./routes/Message";
import Transactions from "./routes/Transactions";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<Overview />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/message" element={<Message />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route index element={<Navigate to={"patients"} replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
