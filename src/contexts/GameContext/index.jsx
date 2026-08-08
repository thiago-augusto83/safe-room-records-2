// createContext é a ferramenta do React usada para criar um Context.
// Neste momento, o contexto existe, mas ainda não possui nenhum dado compartilhado.
import { createContext } from "react";

// GameContext será o "canal" pelo qual compartilharemos informações
// relacionadas aos jogos entre componentes distantes da árvore.
const GameContext = createContext();

// GameProvider será o componente responsável por:
// 1. receber os children;
// 2. futuramente manter o estado compartilhado, como games;
// 3. disponibilizar esse estado através da propriedade value;
// 4. renderizar os children dentro do Provider.
//
// IMPORTANTE: estamos justamente nesta etapa da Aula 4.
// O próximo passo é adicionar o estado e o value.
const GameProvider = ({ children }) => {
  return <GameContext.Provider>{children}</GameContext.Provider>;
};

// GameContext é exportado para que outros arquivos possam acessá-lo.
export { GameContext };
