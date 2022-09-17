const { Router } = require('express');
const { createResiter } = require('../controllers/signupController');
const router = Router();


router.route("/signup").post(createResiter)

module.exports = router;