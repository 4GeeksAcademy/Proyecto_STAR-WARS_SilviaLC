import { Link } from "react-router-dom";
import StarWarsLogo from "../assets/img/swlogo.png";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-black">
			<div className="container-fluid">
				<Link to="/">
					<img
						src={StarWarsLogo}
						style={{ height: "70px", marginLeft: "85px" }}
					/>
				</Link>
				<div style={{ marginLeft: "auto", marginRight: "70px" }}>
					<Link to="/Favorites">
						<button className="btn btn-warning">Favoritos</button>
					</Link>
				</div>
			</div>
		</nav>
	);
}; 