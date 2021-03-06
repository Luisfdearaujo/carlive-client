import vintageCar from "./CarLogo.jpeg";
import Card from "../../components/Card/Card";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton";
// import { Link } from "react-router-dom";

import "./HomePage.css";

function HomePage() {
	return (
		<div className="container-map">
			<div className="main-img">
				<div>
					<img src={vintageCar} alt="carImage" />
				</div>
				<div className="title">
					<h1>Choose your brand</h1>
				</div>
			</div>

			<div className="container-brands">
				<Card title="Car Brand" body="" />
			</div>
			{/* Link to Add a new Car in the app */}
			{/* <Link to="/addcar">
				<button>Add Your Car</button>
			</Link> */}

			<div className="scroll-top">
				<ScrollToTopButton />
			</div>
		</div>
	);
}

export default HomePage;
