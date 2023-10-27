import { NavLink } from "react-router-dom";

export const PatientTable = ({ patients }) => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Ward</th>
          </tr>
          {patients.map(({ _id, name, age, gender, assignedWard }) => (
            <tr key={_id} className="list-items">
              <td>
                <NavLink to={`/patient/${_id}`}>{name}</NavLink>
              </td>
              <td>
                <NavLink to={`/patient/${_id}`}>{age}</NavLink>
              </td>
              <td>
                <NavLink to={`/patient/${_id}`}>{gender}</NavLink>
              </td>
              <td>
                <NavLink to={`/patient/${_id}`}>{assignedWard ?? "-"}</NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
