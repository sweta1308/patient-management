import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { fetchPatients } from "./patientSlice";
import { PatientTable } from "../../components/PatientTable";

export const Patients = () => {
  const { patients, status, error } = useSelector(({ patients }) => patients);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPatients());
    }
  }, [status, dispatch]);

  return (
    <>
      <h2>Patients</h2>
      <button onClick={() => navigate("/addPatient")}>Add Patient</button>
      {status === "loading" ? (
        <div className="loader">
          <SyncLoader color={"rgb(199, 60, 122)"} />
        </div>
      ) : (
        <div>
          {status === "error" ? (
            error
          ) : patients.length === 0 ? (
            <h3>No Patients Found</h3>
          ) : (
            <div>
              <PatientTable patients={patients} />
            </div>
          )}
        </div>
      )}
    </>
  );
};
