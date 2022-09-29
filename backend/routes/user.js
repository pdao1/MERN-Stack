const express = require('express')

// constroller functions

const { signupUser, loginUser } = require('../controllers/userController')

const router = express.Router()

// login route
router.post('/login', () => {})


// sign up route
router.post('/signup', () => {})

module.exports = router