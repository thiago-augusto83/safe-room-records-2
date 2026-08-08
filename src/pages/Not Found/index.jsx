// Link permite navegar para outra rota sem recarregar a aplicação.
import { Link } from "react-router-dom";

// Esta página é renderizada quando nenhuma rota cadastrada corresponde à URL.
const NotFound = () => {
  return (
    <>
      <h1>404</h1>
      <p>Página não encontrada</p>

      {/* Link para retornar à página inicial (Dashboard). */}
      <Link to="/">Voltar para o Dashboard</Link>)
    </>
  );
};

export { NotFound };
