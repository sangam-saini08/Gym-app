const { Router } = require("express");
const {
	createResiter,
	verifyUser,
} = require("../controllers/signupController");
const router = Router();

// public routes
router.route("/registration").post(createResiter);
router.route("/login").post(verifyUser);

// private routes

module.exports = router;
