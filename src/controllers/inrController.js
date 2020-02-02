const inrQueries = require("../db/queries.inrs.js");

module.exports = {
  index(req, res, next) {
    inrQueries.getAllInrs((err, inrs) => {
      if(err){
        res.redirect(500, "static/index");
      } else {
        res.render("inrs/index", {inrs});
      }
    })
  },
  new(req, res, next){
    res.render("inrs/new");
  },
  create(req, res, next){
    let newInr = {
      date: req.body.date,
      result: req.body.result,
      notes: req.body.notes
    };
    inrQueries.addInr(newInr, (err, inr) => {
      if(err){
        res.redirect(500, "/inrs/new");
      } else {
        res.redirect(303, `/inrs/${inr.id}`);
      }
    });
  }
}
