const usersingnup = require("../modules/signUpModule");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const secretKey = process.env.SECERTKEY || "mynameissaini";

const createResiter = async (req, res) => {
	const { username, email, phone, password, cpassword } = req.body;
	if (!username || !email || !phone || !password || !cpassword) {
		return res.status(422).json({ message: "Date not complete" });
	}
	try {
		const userPresent = await usersingnup.findOne({ email: email });
		const usernamePresent = await usersingnup.findOne({ username: username });
		const phonePresent = await usersingnup.findOne({ phone: phone });
		if (userPresent) {
			return res.status(422).send({ message: "User already exist" });
		} else if (usernamePresent) {
			return res.status(422).json({ message: "Username is not avilable" });
		} else if (phonePresent) {
			return res.status(422).json({ message: "Phone is allready register" });
		} else if (password != cpassword) {
			return res.status(401).json({ message: "Password do not match" });
		} else {
			const hashPassword = await bcrypt.hash(password, 10);
			const user = new usersingnup({
				username,
				email,
				phone,
				password: hashPassword,
				cpassword: hashPassword,
			});
			await user.save();
			// const savedUser = await usersingnup.findOne({ email: email });
			// const token = await jwt.sign({ userId: savedUser._id }, secretKey, {
			// 	expiresIn: "15d",
			// });
			return res.status(200).json({
				// token: token,
				message: "Registration successfull",
			});
		}
	} catch (error) {
		console.log(error);
	}
};

const verifyUser = async (req, res) => {
	const { email, password } = req.body;
	if (!email || !password) {
		return res.send({ status: "failed", error: "data not complete" });
	}
	try {
		const vaildUser = await usersingnup.findOne({ email: email });
		if (vaildUser) {
			const isMatch = await bcrypt.compare(password, vaildUser.password);
			if (isMatch) {
				const token = await jwt.sign({ userId: vaildUser._id }, secretKey, {
					expiresIn: "15d",
				});
				return res.send({
					status: "success",
					message: "user login successful",
					token: token,
				});
			} else {
				return res.send({ status: "failed", message: "invalid credential" });
			}
		} else {
			return res.send({ status: "failed", error: "invalid user" });
		}
	} catch (error) {
		console.log(error);
	}
};

module.exports = { createResiter, verifyUser };
