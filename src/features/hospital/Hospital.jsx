import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPatients } from "../patient/patientSlice";
import { fetchWards } from "../ward/wardSlice";
import { setTopWard, updateHospitalStats } from "./hospitalSlice";

export const Hospital = () => {
  const dispatch = useDispatch();
  const {
    hospital,
    patients: { patients },
    wards: { wards }
  } = useSelector(({ hospital, patients, wards }) => ({
    hospital,
    patients,
    wards
  }));

  useEffect(() => {
    dispatch(fetchPatients());
    dispatch(fetchWards());
  }, []);

  useEffect(() => {
    const totalPatients = patients.length;
    const totalCapacity = wards.reduce(
      (sum, { capacity }) => sum + capacity,
      0
    );
    let occupancyRate;
    if (totalCapacity) {
      occupancyRate = (patients.length / totalCapacity) * 100;
    } else {
      occupancyRate = 0;
    }
    const wardCount = patients.reduce(
      (acc, { assignedWard }) => ({
        ...acc,
        [assignedWard]: (acc[assignedWard] ?? 0) + 1
      }),
      {}
    );
    let topWard;
    if (Object.entries(wardCount).length !== 0) {
      topWard = Object.entries(wardCount).reduce(
        (final, [key, value]) => (value >= final[1] ? [key, value] : final),
        Object.entries(wardCount)[0]
      )[0];
    } else {
      topWard = "-";
    }
    dispatch(updateHospitalStats({ totalPatients, occupancyRate, topWard }));
    dispatch(setTopWard(topWard));
  }, [patients, dispatch]);

  return (
    <>
      <h2>Hospital</h2>
      <div className="card">
        <p>
          <strong>Total Patients: </strong>
          {hospital.totalPatients}
        </p>
        <p>
          <strong>Current Occupancy Rate: </strong>
          {hospital.occupancyRate}%
        </p>
        <p>
          <strong>Top Ward: </strong>
          {hospital.topWard ? hospital.topWard : "-"}
        </p>
      </div>
    </>
  );
};
