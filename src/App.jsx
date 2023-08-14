import React from "react";
import Board from "./features/Board/components/Board";
import Buttons from "./components/Buttons";
import Footer from "./components/Footer";
import Header from "./components/Header";
const App = () => {
	return (
		<>
			<Header />
			<Board />
			<Buttons />
			<Footer />
		</>
	);
};

export default App;
