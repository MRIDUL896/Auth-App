const express = require('express');
const { handleUserSignUp, handleUserLogin, getdetails } = require('../Controllers/UserConstroller');
const verify = require('../Middleware/verifyMiddleware');
const router = express.Router();

router.post('/signUp',handleUserSignUp)
router.post('/logIn',handleUserLogin);
router.get('/getDetails',verify,getdetails)

module.exports = router;