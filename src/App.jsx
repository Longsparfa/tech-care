import { BrowserRouter, Route, Routes } from "react-router-dom";
import Overview from "./routes/Overview";
import Schedule from "./routes/Schedule";
import Message from "./routes/Message";
import Transactions from "./routes/Transactions";
import NavBar from "./components/NavBar";
import Patients from "./routes/Patients";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="bg-[#f6f7f8] p-[16px] ">
          <NavBar />
          <Routes>
            <Route path="/">
              <Route path="/" element={<Overview />} />
              <Route path="/patients" element={<Patients />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/message" element={<Message />} />
              <Route path="/transactions" element={<Transactions />} />
              {/* <Route index element={<Navigate to={"patients"} replace />} /> */}
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
