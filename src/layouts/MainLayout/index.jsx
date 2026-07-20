import styles from "./MainLayout.module.css";
import { Sidebar } from "../../components/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <main className={styles.container}>
      <Sidebar />
      <section className={styles.content}>
        <Outlet />
      </section>
    </main>
  );
};

export { MainLayout };
