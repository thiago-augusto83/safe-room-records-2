// CSS Module do layout.
import styles from "./MainLayout.module.css";

// Sidebar é o menu lateral que permanece no layout.
import { Sidebar } from "../../components/Sidebar";

// Outlet é o ponto onde o React Router renderiza
// o conteúdo da rota filha atual.
import { Outlet } from "react-router-dom";

// MainLayout é responsável pela estrutura visual comum das páginas.
// Ele não precisa conhecer os dados dos jogos.
const MainLayout = () => {
  return (
    <main className={styles.container}>
      {/* A Sidebar permanece visível nas páginas do layout. */}
      <Sidebar />

      {/* 
        O conteúdo da página atual aparece aqui.
        Por exemplo:
        "/" -> Dashboard
        "/library" -> Library
        "/statistics" -> Statistics
        "/settings" -> Settings
      */}
      <section className={styles.content}>
        <Outlet />
      </section>
    </main>
  );
};

export { MainLayout };
