import { Link } from "react-router-dom";
import "./Navbar.css";

import Logo from "./logo_small.png";

function Navbar() {
	return (
		<nav class="navbar navbar expand-lg navbar-light bg-gray">
			<div class="container-fluid">
				<Link class="navbar-brand brand-custom" to="/">
					<img src={Logo} alt="Logo" width="150" height="75" />
				</Link>
			</div>
		</nav>
	);
}

export default Navbar;
