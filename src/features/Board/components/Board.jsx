import React, { useReducer, useState, useEffect } from "react";
import Square from "./Square";
import BoardCreator from "../board";
import "./Board.css";
import { knightMoves, convert } from "../../Knight/knight";
import { ACTIONS } from "../../../features/Board/gameReducer";
import { useGame } from "../../../features/Board/gameContext";

const Board = () => {
	const { state, dispatch } = useGame();
	const handleToggleKnight = (e) => {
		const squareElement = e.target.closest(".Square");
		if (!squareElement) return;
		if (!state.activeButton) return;
		const row = squareElement.getAttribute("data-row");
		const col = squareElement.getAttribute("data-col");
		switch (state.activeButton) {
			case "start":
				dispatch({
					type: ACTIONS.SETSTARTPOS,
					payload: { startPos: `${row}-${col}` },
				});
				break;

			case "target":
				dispatch({
					type: ACTIONS.SETTARGETPOS,
					payload: { targetPos: `${row}-${col}` },
				});
				break;

			default:
				break;
		}
	};

	const numRows = state.gridSize;
	const board = BoardCreator(numRows);
	let alt = true;
	let dark = false;
	const boardDisplay = board.Rows.map((row) => {
		alt = !alt;
		alt ? (dark = false) : (dark = true);
		return board.Columns.map((column) => {
			dark = !dark;
			return (
				<Square
					position={[row, column]}
					key={`${row}-${column}`}
					dark={dark}
					isStartKnight={state.startPos === `${row}-${column}`}
					isTargetKnight={state.targetPos === `${row}-${column}`}
					isPath={state.path?.slice(1, state.path.length - 1).indexOf(`${row}-${column}`)+1}
					isKnight={
						state.startPos === `${row}-${column}` ||
						state.targetPos === `${row}-${column}` ||
						state.path?.includes(`${row}-${column}`)
						
					}
				/>
			);
		});
	});
	return (
		<div className="display">
			<div className="rows">
				{board.Rows.map((row) => {
					return <div key={row}>{row}</div>;
				})}
			</div>
			<div
				className="Board"
				style={{
					gridTemplateColumns: `repeat(${numRows}, 1fr)`,
					gridTemplateRows: `repeat(${numRows}, 1fr)`,
				}}
				onClick={handleToggleKnight}
			>
				{boardDisplay}
			</div>
			<div className="columns">
				{board.Columns.map((column) => {
					return <div key={column}>{column}</div>;
				})}
			</div>
		</div>
	);
};

export default Board;
