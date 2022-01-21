import axios from "axios";
import { useState } from "react";
import { useNavigate, } from "react-router-dom";

function AddCars() {
	const [brand, setBrand] = useState("");
	const [model, setModel] = useState("");
	const [image, setImage] = useState("");
	const [year, setYear] = useState("");
	const [consumption, setConsumption] = useState("");

	const handleBrand = (e) => setBrand(e.target.value);
	const handleModel = (e) => setModel(e.target.value);
	const handleImage = (e) => setImage(e.target.value);
	const handleYear = (e) => setYear(e.target.value);
	const handleConsumption = (e) => setConsumption(e.target.value);

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		try {
			e.preventDefault(); //prevent the page reload

			const carInfoData = {
				brand,
				model,
				image,
				year,
				consumption,
			};

			console.log("test", carInfoData);
			await axios.post(
				`${process.env.REACT_APP_SERVER_URL}/api/carinfo/`,
				carInfoData
			);
			//Clear the form
			setBrand("");
			setModel("");
			setImage("");
			setYear("");
			setConsumption("");

			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<h1>Add Car Information</h1>
			<div>
				<h3 className="mt-5 mb-3">Fill the Car Information</h3>
				<form className="form" onSubmit={handleSubmit}>
					<div className="form-group">
						<div className="container">
							<div className="row">
								{/* Left column */}
								<div class="col-3"></div>

								<div className="col-sm-12 col-md-6">
									<label>Brand:</label>
									<input
										type="text"
										className="form-control  mb-4 required"
										required
										value={brand}
										onChange={handleBrand}
									/>
								</div>
								<div className="col-sm-12 col-md-6">
									<label>Model:</label>
									<input
										type="text"
										className="form-control  mb-4 required"
										required
										value={model}
										onChange={handleModel}
									/>
								</div>

								<div className="col-sm-12 col-md-6">
									<label>Image:</label>
									<input
										type="text"
										className="form-control  mb-4 required"
										value={image}
										onChange={handleImage}
									/>
								</div>

								<div className="col-sm-12 col-md-6">
									<label>Consumption:</label>
									<input
										type="text"
										className="form-control  mb-4 required"
										required
										value={consumption}
										onChange={handleConsumption}
									/>
								</div>
								<div className="col-sm-12 col-md-6">
									<label>Year:</label>
									<input
										type="text"
										className="form-control  mb-4 required"
										required
										value={year}
										onChange={handleYear}
									/>
								</div>

								<div>
									<button type="submit">Submit</button>
								</div>
							</div>
							{/* Right column */}
							<div className="col-3"></div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default AddCars;
