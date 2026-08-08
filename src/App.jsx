// App é o componente responsável por definir as rotas da aplicação.
// Ele não cuida do layout nem dos dados dos jogos.
// Sua responsabilidade atual é dizer qual página deve ser renderizada
// para cada URL.
import { MainLayout } from "./layouts/MainLayout";
import { Dashboard } from "./pages/Dashboard";
import { Library } from "./pages/Library";
import { Statistics } from "./pages/Statistics";
import { Settings } from "./pages/Settings";
import { NotFound } from "./pages/Not Found";
import { Routes, Route } from "react-router-dom";

// Componente principal de roteamento da aplicação.
const App = () => {
  return (
    <Routes>
      {/* 
        A rota "/" usa o MainLayout como layout pai.
        As rotas abaixo ficam aninhadas dentro dele.
      */}
      <Route path="/" element={<MainLayout />}>
        {/* index = página inicial da rota "/" */}
        <Route index element={<Dashboard />} />

        {/* /library */}
        <Route path="library" element={<Library />} />

        {/* /statistics */}
        <Route path="statistics" element={<Statistics />} />

        {/* /settings */}
        <Route path="settings" element={<Settings />} />

        {/*
          "*" captura qualquer rota que não tenha sido encontrada
          nas rotas anteriores.
        */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export { App };
