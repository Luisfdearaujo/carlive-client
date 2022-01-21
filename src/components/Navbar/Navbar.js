import { Link } from "react-router-dom";
import "./Navbar.css";

import Logo from "./logo_small.png";

function Navbar() {
	// const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

	return (
		<nav class="navbar navbar expand-lg navbar-light bg-gray">
			<div class="container-fluid">
				<Link class="navbar-brand brand-custom" to="/">
					<img src={Logo} alt="Logo" width="150" height="75" />
				</Link>
				{/* {isLoggedIn && (
					<>
						<Link to="/">
							<button>Cars</button>
						</Link>
						<button onClick={logOutUser}>Logout</button>
					</>
				)}
				{!isLoggedIn && (
					<>
						<Link to="/signup">
							<button>Sign Up</button>
						</Link>

						<Link to="/login">
							<button>Login</button>
						</Link>
					</>
				)} */}
			</div>
		</nav>
	);
}

export default Navbar;
