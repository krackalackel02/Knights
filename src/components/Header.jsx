import React from "react";
import Chess from "../assets/chess.svg";
import "./Header.css";
import { ACTIONS } from "../features/Board/gameReducer";
import { useGame } from "../features/Board/gameContext";

export default function Header() {
	const { state, dispatch } = useGame();
	return (
		<header
			className="header"
			onClick={(e) => {
				dispatch({ type: ACTIONS.RESET_GAME });
			}}
		>
			<svg>
				<use xlinkHref={Chess + "#chess"}></use>
			</svg>
			<h1 className="title">KnightMover.io</h1>
		</header>
	);
}
