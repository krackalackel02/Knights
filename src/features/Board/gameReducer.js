import { knightMoves, convert } from "../Knight/knight";
export const ACTIONS = {
	WAITFORSTARTBUTTON: "waitForStartButton",
	WAITFORSTARTPOS: "waitForStartPos",
	SETSTARTPOS: "setStartPos",
	WAITFORTARGETBUTTON: "waitForTargetButton",
	WAITFORTARGETPOS: "waitForTargetPos",
	SETTARGETPOS: "setTargetPos",
	PLAY: "play",
	RESET_GAME: "resetGame",
};

export const initialGameState = {
	waitingFor: null, // startButton | startPos | targetButton | targetPos | null
	activeButton: null, // startButton | startPos | targetButton | targetPos | null
	startPos: null,
	targetPos: null,
	isPlaying: false,
	path: null,
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
			return {
				...state,
				activeButton: null,
				isPlaying: true,
				waitingFor: null,
				path: knightMoves(convert(state.startPos), convert(state.targetPos)),
			};

		case ACTIONS.RESET_GAME:
			return { ...initialGameState };

		default:
			return state;
	}
};

export default reducerGame;
