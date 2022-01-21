import React, { useEffect, useState } from "react";
import "./ScrollToTopButton.css";
import arrowUp from "./blueArrow.png";


const ScrollToTopButton = (props) => {
	//set the state for when the button starts to appear

	const [showButton, setShowButton] = useState(true);

	//useEffect to trigger the method - work in progress
	useEffect(() => {
		setShowButton(true);
	}, []);

	//scrolling to the top function
	const scrollUp = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	return (
		<>
			<button onClick={scrollUp} className="to-Top" id="my-btn">
				<img src={arrowUp} alt="arrow-up" className="arrow-up" />
			</button>
		</>
	);
};

export default ScrollToTopButton;
