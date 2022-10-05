import React from "react";
import Navbar from "./navbar";
import "./css/Home.css";
import homesvg from "./css/images/home.svg";
import { Link } from "react-router-dom";

const home = () => {
	return (
		<>
			<Navbar />
			<section className="home-section">
				<div className="container home-container">
					<div className="left-side">
						<img className="home-img" src={homesvg} alt="img" />
					</div>
					<div className="right-side container">
						<h1>WELCOME</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. in
							sapiente fugiat animi illum culpa! Illum optio, saepe, ipsam
							nostrum deleniti, odit necessitatibus magnam
						</p>
						<Link to="/signup" className="btn home-btn">
							start
						</Link>
					</div>
				</div>
			</section>
		</>
	);
};

export default home;
