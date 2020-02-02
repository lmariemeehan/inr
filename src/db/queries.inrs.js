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
  }
}
