import { configureStore } from "@reduxjs/toolkit";
import { patientsSlice } from "../features/patient/patientSlice";
import { wardsSlice } from "../features/ward/wardSlice";
import { hospitalSlice } from "../features/hospital/hospitalSlice";

export default configureStore({
  reducer: {
    patients: patientsSlice.reducer,
    wards: wardsSlice.reducer,
    hospital: hospitalSlice.reducer
  }
});
