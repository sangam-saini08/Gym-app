import React from "react";
import "./css/navbar.css";
import { Link } from "react-router-dom";
import mainLogo from "./css/images/mainLogo.png";

const navbar = () => {
	return (
		<>
			<header className="navbar-section ">
				<nav className="navbar navbar-expand-lg ">
					<div className="container-fluid ">
						<Link className="navbar-brand navbar-brand-item" to="/">
							<span>
								<img src={mainLogo} alt="LOGO" className="mainLogo" />
							</span>
							<p className="Logo-text">
								<span className="logo-text-1">Lo</span>
								<span className="logo-text-2">go</span>
							</p>
						</Link>
						<div
							className="collapse navbar-collapse"
							id="navbarSupportedContent"
						>
							<ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-links ">
								<li className="nav-item">
									<Link className="nav-link " aria-current="page" to="/">
										HOME
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link " aria-current="page" to="/about">
										ABOUT
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link " aria-current="page" to="/signup">
										SIGNUP
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/login">
										LOGIN
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</header>
		</>
	);
};

export default navbar;
