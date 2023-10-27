import { NavLink } from "react-router-dom";

export const WardTable = ({ wards }) => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>Ward Number</th>
            <th>Capacity</th>
            <th>Specialization</th>
          </tr>
          {wards.map(({ _id, wardNumber, capacity, specialization }) => (
            <tr key={_id} className="list-items">
              <td>
                <NavLink to={`/ward/${_id}`}>{wardNumber}</NavLink>
              </td>
              <td>
                <NavLink to={`/ward/${_id}`}>{capacity}</NavLink>
              </td>
              <td>
                <NavLink to={`/ward/${_id}`}>{specialization}</NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
