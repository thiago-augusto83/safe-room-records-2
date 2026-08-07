import { createContext } from "react";

const GameContext = createContext();

const GameProvider = ({ children }) => {
  return <GameContext.Provider>{children}</GameContext.Provider>;
};

export { GameContext };