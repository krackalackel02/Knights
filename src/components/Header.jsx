import React from "react";
import Chess from "../assets/chess.svg";
import "./Header.css";

export default function Header() {
	return (
		<header className="header">
			<svg>
				<use xlinkHref={Chess + "#chess"}></use>
			</svg>
			<h1 className="title">KnightMover.io</h1>
		</header>
	);
}
