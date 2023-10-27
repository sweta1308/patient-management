import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const getStyles = ({ isActive }) => ({
    textDecoration: isActive ? "underline" : "",
    color: isActive ? "rgb(199, 60, 122)" : ""
  });
  return (
    <>
      <nav>
        <NavLink style={getStyles} to="/">
          Patient
        </NavLink>
        <NavLink style={getStyles} to="/wards">
          Ward
        </NavLink>
        <NavLink style={getStyles} to="/hospital">
          Hospital
        </NavLink>
      </nav>
    </>
  );
};
