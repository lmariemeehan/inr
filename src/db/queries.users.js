const User = require("./models").User;
const bcrypt = require("bcryptjs");

module.exports = {
  
  createUser(newUser, callback){
    const salt = bcrypt.genSaltSync();
    const hashedPassword = bcrypt.hashSync(newUser.password, salt);

    return User.create({
      firstname: newUser.firstname,
      lastname: newUser.lastname,
      email: newUser.email,
      password: hashedPassword,
      lowInr: newUser.lowInr,
      highInr: newUser.highInr
    })
    .then((user) => {
      callback(null, user);
    })
    .catch((err) => {
      console.log(err);
      callback(err);
    })
  },

  getUser(id, callback){
    let result = {};
    User.findByPk(id)
    .then((user) => {
      if(!user) {
        callback(404);
      } else {
        result["user"] = user;
      }
    })
  }

}