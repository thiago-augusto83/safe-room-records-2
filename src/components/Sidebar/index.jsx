import styles from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className={styles.container}>
      <nav>
        <h1>Safe Room Records</h1>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => {
                isActive ? styles.active : "";
              }}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/library"
              className={({ isActive }) => {
                isActive ? styles.active : "";
              }}
            >
              Library
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive }) => {
                isActive ? styles.active : "";
              }}
            >
              Statistics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/settings"
              className={({ isActive }) => {
                isActive ? styles.active : "";
              }}
            >
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export { Sidebar };
