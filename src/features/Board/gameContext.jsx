import { createContext, useReducer, useContext } from "react";
import reducerGame from "./gameReducer";
import { initialGameState } from "./gameReducer";
const GameContext = createContext();
export const GameProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducerGame, initialGameState);

	return (
		<GameContext.Provider value={{ state, dispatch }}>
			{children}
		</GameContext.Provider>
	);
};
export const useGame = () => {
	const context = useContext(GameContext);

	if (context === undefined) {
		throw new Error("useGame must be used within a GameProvider");
	}

	return context;
};
