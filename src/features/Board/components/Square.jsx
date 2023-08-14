import React from "react";
import Knight from "../../../assets/knight.svg";

const Square = ({ position, dark, isKnight }) => {
	return (
		<div
			className={`Square ${dark ? "Dark" : "Light"} ${isKnight && "Knight"}`}
			data-row={position[0]}
			data-col={position[1]}
		>
			{isKnight?<img src={Knight} alt="Knight" />: position}
		</div>
	);
};

export default Square;
