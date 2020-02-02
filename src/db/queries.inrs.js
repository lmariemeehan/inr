const Inr = require("./models").Inr;

module.exports = {
  getAllInrs(callback){
    return Inr.findAll()
    .then((inrs) => {
      callback(null, inrs);
    })
    .catch((err) => {
      callback(err);
    })
  },

  addInr(newInr, callback){
    return Inr.create({
      date: newInr.date,
      result: newInr.result,
      notes: newInr.notes
    })
    .then((inr) => {
      callback(null, inr);
    })
    .catch((err) => {
      callback(err);
    })
  },

  getInr(id, callback){
    return Inr.findByPk(id)
    .then((inr) => {
      callback(null, inr);
    })
    .catch((err) => {
      callback(err);
    })
  },

  deleteInr(id, callback){
    return Inr.destroy({
      where: {id}
    })
    .then((inr) => {
      callback(null, inr);
    })
    .catch((err) => {
      callback(err);
    })
  }

}
