import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { fetchWards } from "./wardSlice";
import { WardTable } from "../../components/WardTable";

export const Wards = () => {
  const { wards, status, error } = useSelector(({ wards }) => wards);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchWards());
    }
  }, [status, dispatch]);

  return (
    <>
      <h2>Wards</h2>
      <button onClick={() => navigate("/addWard")}>Add Ward</button>
      {status === "loading" ? (
        <div className="loader">
          <SyncLoader color={"rgb(199, 60, 122)"} />
        </div>
      ) : (
        <div>
          {status === "error" ? (
            error
          ) : wards.length === 0 ? (
            <h3>No Patients Found</h3>
          ) : (
            <div>
              <WardTable wards={wards} />
            </div>
          )}
        </div>
      )}
    </>
  );
};
