const User = require("../db/models").User;
const Sequelize = require("sequelize");

module.exports = {
  signUp(req, res, next){
    res.render("users/sign_up");
  }
}
