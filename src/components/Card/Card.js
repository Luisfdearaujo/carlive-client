import "./Card.css";
import { useState, useEffect, useContext } from "react";
import axios from "axios";

function Card({ title, imageUrl, body }) {
	const [carInfo, setcarInfo] = useState([]);
	const [search, setSearch] = useState("");

	const getAllcars = async () => {
		try {
			const response = await axios.get(
				`${process.env.REACT_APP_SERVER_URL}/api/carinfo/` //params filter/find
			);
			setcarInfo(response.data.sort((a, b) => a.brand.localeCompare(b.brand)));
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getAllcars();
	}, []);

	return (
		<div className="row height d-flex justify-content-center align-items-center">
			<div className="col-md-6">
				<div className="form">
					{" "}
					<i className="fa fa-search"></i>{" "}
					<input
						type="text"
						class="form-control form-input"
						placeholder="Search for brands..."
						onChange={(event) => {
							setSearch(event.target.value);
						}}
					/>{" "}
					<span class="left-pan">
						<i class="fa fa-search"></i>
					</span>{" "}
				</div>
			</div>

			<div className="card-display">
				{carInfo
					.filter((val) => {
						if (search === "") {
							return val;
						} else if (val.brand.toLowerCase().includes(search.toLowerCase())) {
							return val;
						}
					})
					.map((carInfo) => {
						return (
							<div className="card-container">
								<div className="image-container">
									<img src={carInfo.image} alt="" />
									<div className="card-content">
										<div className="Card-Title">
											<h3>{carInfo.brand}</h3>
											<hr />
											<h5> Model: {carInfo.model} </h5>
											<h6> Year: {carInfo.year} </h6>
											<h6>
												{" "}
												Consumption: <i>{carInfo.consumption} </i>
											</h6>
										</div>
										<div className="card-body">
											<p>{body}</p>
										</div>
									</div>
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
}

export default Card;
