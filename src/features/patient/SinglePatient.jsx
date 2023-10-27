import { useParams, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletePatientAsync } from "./patientSlice";

export const SinglePatient = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const patient = useSelector(({ patients: { patients } }) =>
    patients.find((patient) => patient._id === id)
  );

  if (!patient) {
    return <p>Patient not found!</p>;
  }

  return (
    <>
      <h2>Patient Detail</h2>
      <div className="card">
        <p>
          <strong>Name: </strong>
          {patient.name}
        </p>
        <p>
          <strong>Age: </strong>
          {patient.age}
        </p>
        <p>
          <strong>Gender: </strong>
          {patient.gender}
        </p>
        <p>
          <strong>Medical History: </strong>
          {patient.medicalHistory.join(", ")}
        </p>
        <p>
          <strong>Contact: </strong>
          {patient.contactInfo}
        </p>
        <p>
          <strong>Ward: </strong>
          {patient.assignedWard}
        </p>

        <NavLink to={`/patient/edit/${id}`} state={patient}>
          <button className="edit">Edit Details</button>
        </NavLink>

        <button
          onClick={() => {
            dispatch(deletePatientAsync(id));
            navigate("/");
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
};
