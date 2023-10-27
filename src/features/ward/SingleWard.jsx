import { useParams, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteWardAsync } from "./wardSlice";

export const SingleWard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ward = useSelector(({ wards: { wards } }) =>
    wards.find((ward) => ward._id === id)
  );

  if (!ward) {
    return <p>Ward not found!</p>;
  }

  return (
    <>
      <h2>Ward Detail</h2>
      <div className="card">
        <p>
          <strong>Ward Number: </strong>
          {ward.wardNumber}
        </p>
        <p>
          <strong>Capacity: </strong>
          {ward.capacity}
        </p>
        <p>
          <strong>Specialization: </strong>
          {ward.specialization}
        </p>

        <NavLink to={`/ward/edit/${id}`} state={ward}>
          <button className="edit">Edit Details</button>
        </NavLink>

        <button
          onClick={() => {
            dispatch(deleteWardAsync(id));
            navigate("/wards");
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
};
