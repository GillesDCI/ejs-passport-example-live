var bcrypt = require('bcrypt');
const User = require('../models/User')

exports.login =  async (req, res) => {
   return res.render('login');
}

exports.register = async(req, res) => {
  return res.render('register');
}


exports.registerUser = async (req, res) => {
  try {

    const hashedPassword = await bcrypt.hash(req.body.password,10);

    await User.create({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        username:req.body.username,
        email:req.body.email,
        password:hashedPassword
     })  

       res.redirect('/user/login')
   } catch (error) {
       res.redirect('/user/register');
   }
}

exports.logout = async(req, res) => {
   req.logOut();
   res.redirect('/user/login')
}