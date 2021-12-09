const express = require('express');
const controller = require('../controllers/homeController');
const localsHelper = require('./../middleware/localsHelper');
const auth = require('./../middleware/auth');

const router = express.Router();

router.use(localsHelper.setCurrentUser)

router.get('/',  controller.home)
router.get('/list', auth.checkAuthenticated, controller.list)


module.exports = router;