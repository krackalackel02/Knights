import { knightMoves, convert } from "../Knight/knight";
import BoardCreator from "./board";
export const ACTIONS = {
	WAITFORSTARTBUTTON: "waitForStartButton",
	WAITFORSTARTPOS: "waitForStartPos",
	SETSTARTPOS: "setStartPos",
	WAITFORTARGETBUTTON: "waitForTargetButton",
	WAITFORTARGETPOS: "waitForTargetPos",
	SETTARGETPOS: "setTargetPos",
	PLAY: "play",
	RESET_GAME: "resetGame",
	CHANGEGRID: "changeGrid",
};

export const initialGameState = {
	waitingFor: null, // startButton | startPos | targetButton | targetPos | null
	activeButton: null, // startButton | startPos | targetButton | targetPos | null
	startPos: null,
	targetPos: null,
	isPlaying: false,
	path: null,
	gridSize: 8,
};

const reducerGame = (state, action) => {
	switch (action.type) {
		case ACTIONS.WAITFORSTARTBUTTON:
			return { ...initialGameState };

		case ACTIONS.WAITFORSTARTPOS:
			return {
				...state,
				activeButton: state.activeButton != "start" ? "start" : null,
				waitingFor: state.activeButton != "start" ? "startPos" : null,
				path: null,
			};

		case ACTIONS.SETSTARTPOS:
			return {
				...state,
				startPos: action.payload.startPos,
				path: null,
			};

		case ACTIONS.WAITFORTARGETPOS:
			return {
				...state,
				activeButton: state.activeButton != "target" ? "target" : null,
				waitingFor: state.activeButton != "target" ? "targetPos" : null,
				path: null,
			};

		case ACTIONS.SETTARGETPOS:
			return {
				...state,
				targetPos: action.payload.targetPos,
				path: null,
			};

		case ACTIONS.PLAY:
			console.log(state.path);
			return {
				...state,
				activeButton: null,
				isPlaying: true,
				waitingFor: null,
				path: knightMoves(
					convert(state.startPos),
					convert(state.targetPos),
					BoardCreator(state.gridSize).List.map((item) => {
						return convert(item);
					})
				),
			};

		case ACTIONS.RESET_GAME:
			return { ...initialGameState, gridSize: state.gridSize };

		case ACTIONS.CHANGEGRID:
			return {
				...initialGameState,
				gridSize: action.payload.grid,
			};
		default:
			return state;
	}
};

export default reducerGame;
