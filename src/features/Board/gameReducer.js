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
	waitingFor: "startButton", // startButton | startPos | targetButton | targetPos | null
	startPos: null,
	targetPos: null,
	isPlaying: false,
};

const reducerGame = (state, action) => {
	switch (action.type) {
		case ACTIONS.WAITFORSTARTBUTTON:
			return { ...initialGameState };

		case ACTIONS.WAITFORSTARTPOS:
			return {
				...state,
				waitingFor: "startPos",
			};

		case ACTIONS.SETSTARTPOS:
			return {
				...state,
				startPos: action.startPos,
				waitingFor: "targetButton",
			};

		case ACTIONS.WAITFORTARGETPOS:
			return {
				...state,
				waitingFor: "targetPos",
			};

		case ACTIONS.SETTARGETPOS:
			return {
				...state,
				targetPos: action.targetPos,
				waitingFor: null,
			};

		case ACTIONS.PLAY:
			return {
				...state,
				isPlaying: true,
				waitingFor: null,
			};

		case ACTIONS.RESET_GAME:
			return { ...initialGameState };

		default:
			return state;
	}
};

export default reducerGame;
