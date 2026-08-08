// StrictMode ajuda a encontrar problemas durante o desenvolvimento.
import { StrictMode } from "react";

// createRoot cria a raiz React que será usada para renderizar a aplicação.
import { createRoot } from "react-dom/client";

// Componente principal da aplicação.
import { App } from "./App.jsx";

// Estilos globais.
import "./styles/globals.css";

// BrowserRouter disponibiliza o sistema de rotas para a aplicação.
import { BrowserRouter } from "react-router-dom";

// Aqui o React encontra o elemento HTML com id="root"
// e começa a renderizar a aplicação dentro dele.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/*
      BrowserRouter envolve a aplicação para que
      Routes, Route, Link, NavLink e Outlet possam funcionar.
    */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
