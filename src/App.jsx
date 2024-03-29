import React from "react";
import Board from "./features/Board/components/Board";
import Buttons from "./components/Buttons";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Slider from "./components/SLider";
import { GameProvider } from "./features/Board/gameContext";
const App = () => {
	return (
		<GameProvider>
			<Header />
			<Slider/>
			<Board />
			<Buttons />
			<Footer />
		</GameProvider>
	);
};

export default App;
