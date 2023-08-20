import React from "react";
import Knight from "../../../assets/knight.svg";
import { ACTIONS } from "../../../features/Board/gameReducer";
import { useGame } from "../../../features/Board/gameContext";
const Square = ({
	position,
	dark,
	isStartKnight,
	isTargetKnight,
	isKnight,
	isPath,
}) => {
	const { state, dispatch } = useGame();
	return (
		<div
			className={`Square ${dark ? "Dark" : "Light"} ${isKnight && "Knight"} 
			${isStartKnight && "StartKnight"} ${isTargetKnight && "TargetKnight"}
			${isPath && "PathKnight"}
			`}
			data-row={position[0]}
			data-col={position[1]}
		>
			{(isKnight&&!isPath) ? (
				<svg>
					<use xlinkHref={Knight + "#knight"}></use>
				</svg>
			) : (
				isPath || " "
			)}
		</div>
	);
};

export default Square;
