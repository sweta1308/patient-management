import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addWardAsync, updateWardAsync } from "../features/ward/wardSlice";
import { WardForm } from "./WardForm";

export const AddUpdateWard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();

  const ward = state ? state : null;

  const [wardInput, setWardInput] = useState({
    wardNumber: ward ? ward.wardNumber : 0,
    capacity: ward ? ward.capacity : 0,
    specialization: ward ? ward.specialization : "General Ward"
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ward) {
      dispatch(
        updateWardAsync({
          id: ward._id,
          updatedWard: wardInput
        })
      );
      navigate(`/ward/${ward._id}`);
    } else {
      dispatch(addWardAsync(wardInput));
      navigate("/wards");
    }
  };
  return (
    <>
      <h2>Add Ward</h2>
      <WardForm
        handleSubmit={handleSubmit}
        wardInput={wardInput}
        setWardInput={setWardInput}
        ward={ward}
      />
    </>
  );
};
