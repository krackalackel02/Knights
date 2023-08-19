import React from "react";
import Play from "../assets/play.svg";
import Home from "../assets/home.svg";
import Target from "../assets/target.svg";
import Reset from "../assets/reset.svg";
import "./Buttons.css";
import { ACTIONS } from "../features/Board/gameReducer";
import { useGame } from "../features/Board/gameContext";
import { useState } from "react";
function Buttons() {
	const { state, dispatch } = useGame();
	const [isAnimating, setIsAnimating] = useState({ bool: false, type: null });
	return (
		<div className="btn-grid">
			<button
				className={`btn btn-position start ${state.activeButton=="start"?"Selected":""}`}
				onClick={(e) => {
					dispatch({ type: ACTIONS.WAITFORSTARTPOS });
				}}
			>
				<svg>
					<use xlinkHref={Home + "#home"}></use>
				</svg>
				Start Position
			</button>
			<button
				className={`btn btn-position target ${state.activeButton=="target"?"Selected":""}`}
				onClick={(e) => {
					dispatch({ type: ACTIONS.WAITFORTARGETPOS });
				}}
			>
				<svg>
					<use xlinkHref={Target + "#target"}></use>
				</svg>
				Target Position
			</button>
			<button
				className={`btn btn-play ${
					isAnimating.bool && isAnimating.type === "play" && "rotate-animation"
				} ${!state.startPos&&!state.targetPos&&"Disabled"}`}
				onClick={(e) => {
					if (!state.startPos&&!state.targetPos) {
						return
					}
					dispatch({ type: ACTIONS.PLAY });
					setIsAnimating({ bool: true, type: "play" });
					setTimeout(() => setIsAnimating({ bool: false, type: null }), 500);
				}}
			>
				<svg>
					<use xlinkHref={Play + "#play"}></use>
				</svg>
			</button>
			<button
				className={`btn btn-reset ${
					isAnimating.bool && isAnimating.type === "reset" && "rotate-animation"
				}`}
				onClick={(e) => {
					dispatch({ type: ACTIONS.RESET_GAME });
					setIsAnimating({ bool: true, type: "reset" });
					setTimeout(() => setIsAnimating({ bool: false, type: null }), 500);
				}}
			>
				<svg>
					<use xlinkHref={Reset + "#reset"}></use>
				</svg>
			</button>
		</div>
	);
}

export default Buttons;
