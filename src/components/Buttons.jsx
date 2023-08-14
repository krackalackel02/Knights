import React from "react";
import Play from "../assets/play.svg";
import Home from "../assets/home.svg";
import Target from "../assets/target.svg";
import "./Buttons.css";
function Buttons() {
	return (
		<div className="btn-grid">
			<button className="btn btn-position">
				<svg>
					<use xlinkHref={Home + "#home"}></use>
				</svg>
				Start Position
			</button>
			<button className="btn btn-position">
				<svg>
					<use xlinkHref={Target + "#target"}></use>
				</svg>
				Target Position
			</button>
			<button className="btn btn-play">
				<img src={Play} alt="Play" />
			</button>
		</div>
	);
}

export default Buttons;
