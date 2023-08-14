import React, { useState } from "react";
import Square from "./Square";
import BoardCreator from "../board";
import "./Board.css";
const Board = () => {
    console.log("boardrendered")
	const [activeKnight, setActiveKnight] = useState(null);
	const handleToggleKnight = (e) => {
        const squareElement = e.target.closest(".Square");
        if (!squareElement) return;
        const row = squareElement.getAttribute("data-row");
        const col = squareElement.getAttribute("data-col");
        setActiveKnight(`${row}-${col}`);
      };
      
	const numRows = 8;
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
                  isKnight={activeKnight === `${row}-${column}`}
                />
              );
              
		});
	});

	return (
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
	);
};

export default Board;
