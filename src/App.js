import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import HomePage from "./pages/HomePage/HomePage";
import AddCars from "./pages/AddCars/AddCars";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/addcar" element={<AddCars />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
