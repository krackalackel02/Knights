import React from "react";
import Play from "../assets/play.svg";
import Home from "../assets/home.svg";
import Target from "../assets/target.svg";
import Reset from "../assets/reset.svg";
import "./Buttons.css";
import { ACTIONS } from "../features/Board/gameReducer";
import { useGame } from "../features/Board/gameContext";
function Buttons() {
	const { state, dispatch } = useGame();
	return (
		<div className="btn-grid">
			<button
				className="btn btn-position"
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
				className="btn btn-position"
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
				className={`btn btn-play`}
				onClick={(e) => {
					dispatch({ type: ACTIONS.PLAY });
				}}
			>
				<svg>
					<use xlinkHref={Play + "#play"}></use>
				</svg>
			</button>
			<button
				className="btn btn-reset"
				onClick={(e) => {
					dispatch({ type: ACTIONS.RESET_GAME });
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
