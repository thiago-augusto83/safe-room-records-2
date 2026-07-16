import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={styles.container}>
      <nav>
        <h1>Safe Room Records</h1>
        <ul>
          <li>
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="#">Library</a>
          </li>
          <li>
            <a href="#">Statistics</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export { Sidebar };
