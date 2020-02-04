const inrQueries = require("../db/queries.inrs.js");
const Inr = require("../db/models").Inr;
const Sequelize = require("sequelize");

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
  },

  show(req, res, next){
    inrQueries.getInr(req.params.id, (err, inr) => {
      if(err || inr == null){
        res.redirect(404, "/");
      } else {
        res.render("inrs/show", {inr});
      }
    });
  },

  destroy(req, res, next){
    inrQueries.deleteInr(req.params.id, (err, inr) => {
      if(err){
        res.redirect(500, `/inrs/${req.params.id}`)
      } else {
        res.redirect(303, "/inrs")
      }
    });
  },

  edit(req, res, next){
    inrQueries.getInr(req.params.id, (err, inr) => {
      if(err || inr == null){
        res.redirect(404, "/");
      } else {
        res.render("inrs/edit", {inr});
      }
    });
  },

  update(req, res, next){
    inrQueries.updateInr(req.params.id, req.body, (err, inr) => {
      if(err || inr == null){
        res.redirect(404, `/inrs/${req.params.id}/edit`);
      } else {
        res.redirect(`inrs/${inr.id}`);
      }
    });
  }

}
