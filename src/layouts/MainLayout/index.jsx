import styles from "./MainLayout.module.css";
import { Sidebar } from "../../components/Sidebar";

const MainLayout = () => {
  return (
    <main className={styles.container}>
      <Sidebar />
      <section className={styles.content}>
        <h1>Content Area</h1>
      </section>
    </main>
  );
};

export { MainLayout };