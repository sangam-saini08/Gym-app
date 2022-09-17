const usersingnup = require("../modules/signUpModule");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createResiter = async (req, res) => {
  const { username, email, phone, password, cpassword } = req.body;
  if (!username || !email || !phone || !password || !cpassword) {
    return res.status(422).json({ error: "Date not complete" });
  }
  try {
    const userPresent = await usersingnup.findOne({ email: email });
    const usernamePresent = await usersingnup.findOne({ username: username });
    const phonePresent = await usersingnup.findOne({ phone: phone });
    if (userPresent) {
      return res.status(422).send({ error: "User already exist" });
    } else if (usernamePresent) {
      return res.status(400).json({ error: "Username is not avilable" });
    } else if (phonePresent) {
      return res.status(401).json({ error: "Phone is allready register" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "Password do not match" });
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
      return res
        .status(200)
        .json({
          user: user,
          message: "Registration successfull",
        });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createResiter };
