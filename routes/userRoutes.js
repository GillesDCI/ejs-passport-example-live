const express = require('express');
const controller = require('../controllers/userController');
const localsHelper = require('./../middleware/localsHelper');
const passport = require('passport');


const router = express.Router();

router.use(localsHelper.setCurrentUser)

router.get('/logout', controller.logout);

router.get('/register', controller.register);
router.post('/register', controller.registerUser);   

router.get('/login',   controller.login);
router.post('/login', passport.authenticate('local',{
    successRedirect:'/',
    failureRedirect:'/user/login',
    failureFlash:true
}));

module.exports = router;