import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  patients: [],
  status: "idle",
  error: null
};

export const fetchPatients = createAsyncThunk(
  "patients/fetchPatients",
  async () => {
    const response = await axios.get(
      "https://patient-management.swetaagarwalla.repl.co/patients"
    );
    return response.data.patients;
  }
);

export const addPatientAsync = createAsyncThunk(
  "patients/addPatientAsync",
  async (patient) => {
    const response = await axios.post(
      "https://patient-management.swetaagarwalla.repl.co/patients",
      patient
    );
    return response.data.patient;
  }
);

export const updatePatientAsync = createAsyncThunk(
  "patients/updatePatientAsync",
  async ({ id, updatedPatient }) => {
    const response = await axios.post(
      `https://patient-management.swetaagarwalla.repl.co/patients/${id}`,
      updatedPatient
    );
    return response.data.patient;
  }
);

export const deletePatientAsync = createAsyncThunk(
  "patients/deletePatientAsync",
  async (id) => {
    const response = await axios.delete(
      `https://patient-management.swetaagarwalla.repl.co/patients/${id}`
    );
    return response.data.patient;
  }
);

export const patientsSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPatients.pending]: (state) => {
      state.status = "loading";
    },
    [fetchPatients.fulfilled]: (state, action) => {
      state.status = "success";
      state.patients = action.payload;
    },
    [fetchPatients.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [addPatientAsync.pending]: (state) => {
      state.status = "loading";
    },
    [addPatientAsync.fulfilled]: (state, action) => {
      state.status = "success";
      state.patients.push(action.payload);
    },
    [addPatientAsync.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [updatePatientAsync.pending]: (state) => {
      state.status = "loading";
    },
    [updatePatientAsync.fulfilled]: (state, action) => {
      state.status = "success";
      const updatedPatient = action.payload;
      const index = state.patients.findIndex(
        (patient) => patient._id === updatedPatient._id
      );
      if (index !== -1) {
        state.patients[index] = updatedPatient;
      }
    },
    [updatePatientAsync.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [deletePatientAsync.pending]: (state) => {
      state.status = "loading";
    },
    [deletePatientAsync.fulfilled]: (state, action) => {
      state.status = "success";
      state.patients = state.patients.filter(
        (patient) => patient._id !== action.payload._id
      );
    },
    [deletePatientAsync.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    }
  }
});

export default patientsSlice.reducer;
