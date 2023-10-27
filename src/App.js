import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import "./styles.css";
import { Patients } from "./features/patient/Patients";
import { Wards } from "./features/ward/Wards";
import { Hospital } from "./features/hospital/Hospital";
import { SinglePatient } from "./features/patient/SinglePatient";
import { AddUpdatePatient } from "./components/AddUpdatePatient";
import { SingleWard } from "./features/ward/SingleWard";
import { AddUpdateWard } from "./components/AddUpdateWard";

export default function App() {
  return (
    <div className="App">
      <h1>PATIENT MANAGEMENT</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Patients />} />
        <Route path="/wards" element={<Wards />} />
        <Route path="/hospital" element={<Hospital />} />
        <Route path="/patient/:id" element={<SinglePatient />} />
        <Route path="/ward/:id" element={<SingleWard />} />
        <Route path="/addPatient" element={<AddUpdatePatient />} />
        <Route path="/addWard" element={<AddUpdateWard />} />
        <Route path="/patient/edit/:id" element={<AddUpdatePatient />} />
        <Route path="/ward/edit/:id" element={<AddUpdateWard />} />
      </Routes>
    </div>
  );
}
