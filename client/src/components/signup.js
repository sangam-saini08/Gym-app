import React, { useState } from "react";
import Navbar from "./navbar";
import { Link, useNavigate } from "react-router-dom";
import "./css/signup.css";
const Signup = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState({
		username: "",
		email: "",
		phone: "",
		password: "",
		cpassword: "",
	});

	let name, value;

	const handleInput = (e) => {
		name = e.target.name;
		value = e.target.value;

		setUser({ ...user, [name]: value });
	};

	const postData = async (e) => {
		e.preventDefault();
		const { username, email, phone, password, cpassword } = user;

		// getting response from the server
		const res = await fetch("/api/gym/registration", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username,
				email,
				phone,
				password,
				cpassword,
			}),
		});

		// store the Response getting from the server in the data object
		const data = await res.json();
		window.alert(data.message);
		if (data.message === "Registration successfull") {
			navigate("/login");
		}
	};
	return (
		<>
			<Navbar />
			<section className="signup-section">
				<div className="bg-div">
					<div className="signup-container container">
						<h2>Registration</h2>
						<form method="POST">
							<div className="form-element">
								<div className="form-inputs">
									<label htmlFor="username">
										<i class="fa-solid fa-user"></i>
									</label>
									<input
										type="text"
										name="username"
										id="username"
										placeholder="Username"
										autoComplete="off"
										value={user.username}
										onChange={handleInput}
									/>
								</div>
								<div className="form-inputs">
									<label htmlFor="email">
										<i class="fa-solid fa-envelope"></i>
									</label>
									<input
										type="text"
										name="email"
										id="email"
										placeholder="Email"
										autoComplete="off"
										value={user.email}
										onChange={handleInput}
									/>
								</div>
								<div className="form-inputs">
									<label htmlFor="phone">
										<i class="fa-solid fa-mobile"></i>
									</label>
									<input
										type="text"
										name="phone"
										id="phone"
										placeholder="Phone"
										autoComplete="off"
										value={user.phone}
										onChange={handleInput}
									/>
								</div>
								<div className="form-inputs">
									<label htmlFor="password">
										<i class="fa-solid fa-key"></i>
									</label>
									<input
										type="password"
										name="password"
										id="password"
										placeholder="Password"
										autoComplete="off"
										value={user.password}
										onChange={handleInput}
									/>
								</div>
								<div className="form-inputs">
									<label htmlFor="cpassword">
										<i class="fa-solid fa-key"></i>
									</label>
									<input
										type="password"
										name="cpassword"
										id="cpassword"
										placeholder="Confirm-Password"
										autoComplete="off"
										value={user.cpassword}
										onChange={handleInput}
									/>
								</div>
								<button type="submit" className="btn" onClick={postData}>
									Create Account
								</button>
							</div>
						</form>
						<span>
							<Link to="/login" className="link">
								Already have an Account Click here
							</Link>
						</span>
					</div>
				</div>
			</section>
		</>
	);
};

export default Signup;
