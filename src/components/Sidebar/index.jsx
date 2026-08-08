// CSS Module:
// importa os estilos do arquivo Sidebar.module.css como um objeto.
import styles from "./Sidebar.module.css";

// NavLink é fornecido pelo React Router.
// Ele funciona como um link e também permite saber se a rota atual está ativa.
import { NavLink } from "react-router-dom";

// A Sidebar é responsável apenas pela navegação lateral da aplicação.
// Ela não precisa conhecer os jogos nem o estado global.
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
                // isActive informa se esta rota é a rota atual.
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
