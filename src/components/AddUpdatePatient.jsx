import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  addPatientAsync,
  updatePatientAsync
} from "../features/patient/patientSlice";
import { PatientForm } from "./PatientForm";

export const AddUpdatePatient = () => {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const navigate = useNavigate();

  const patient = state ? state : null;

  const [patientInput, setPatientInput] = useState({
    name: patient ? patient.name : "",
    age: patient ? patient.age : 0,
    gender: patient ? patient.gender : "Male",
    medicalHistory: patient ? patient.medicalHistory.join(", ") : "",
    contactInfo: patient ? patient.contactInfo : 0,
    assignedWard: patient ? patient.assignedWard : 101
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (patient) {
      dispatch(
        updatePatientAsync({
          id: patient._id,
          updatedPatient: patientInput
        })
      );
      navigate(`/patient/${patient._id}`);
    } else {
      dispatch(addPatientAsync(patientInput));
      navigate("/");
    }
  };

  return (
    <>
      <h2>{patient ? "Update" : "Add"} Patient</h2>
      <PatientForm
        patientInput={patientInput}
        setPatientInput={setPatientInput}
        handleSubmit={handleSubmit}
        patient={patient}
      />
    </>
  );
};
