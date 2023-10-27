import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  wards: [],
  status: "idle",
  error: null
};

export const fetchWards = createAsyncThunk("wards/fetchWards", async () => {
  const response = await axios.get(
    "https://patient-management.swetaagarwalla.repl.co/wards"
  );
  return response.data.wards;
});

export const addWardAsync = createAsyncThunk(
  "wards/addWardAsync",
  async (ward) => {
    const response = await axios.post(
      "https://patient-management.swetaagarwalla.repl.co/wards",
      ward
    );
    return response.data.ward;
  }
);

export const updateWardAsync = createAsyncThunk(
  "wards/updateWardAsync",
  async ({ id, updatedWard }) => {
    const response = await axios.post(
      `https://patient-management.swetaagarwalla.repl.co/wards/${id}`,
      updatedWard
    );
    return response.data.ward;
  }
);

export const deleteWardAsync = createAsyncThunk(
  "wards/deleteWardAsync",
  async (id) => {
    const response = await axios.delete(
      `https://patient-management.swetaagarwalla.repl.co/wards/${id}`
    );
    return response.data.ward;
  }
);

export const wardsSlice = createSlice({
  name: "wards",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchWards.pending]: (state) => {
      state.status = "loading";
    },
    [fetchWards.fulfilled]: (state, action) => {
      state.status = "success";
      state.wards = action.payload;
    },
    [fetchWards.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [addWardAsync.pending]: (state) => {
      state.status = "loading";
    },
    [addWardAsync.fulfilled]: (state, action) => {
      state.status = "success";
      state.wards.push(action.payload);
    },
    [addWardAsync.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [updateWardAsync.pending]: (state) => {
      state.status = "loading";
    },
    [updateWardAsync.fulfilled]: (state, action) => {
      state.status = "success";
      const updatedWard = action.payload;
      const index = state.wards.findIndex(
        (ward) => ward._id === updatedWard._id
      );
      if (index !== -1) {
        state.wards[index] = updatedWard;
      }
    },
    [updateWardAsync.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [deleteWardAsync.pending]: (state) => {
      state.status = "loading";
    },
    [deleteWardAsync.fulfilled]: (state, action) => {
      state.status = "success";
      state.wards = state.wards.filter(
        (ward) => ward._id !== action.payload._id
      );
    },
    [deleteWardAsync.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    }
  }
});

export default wardsSlice.reducer;
