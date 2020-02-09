const medicationQueries = require("../db/queries.medications.js");
const Medication = require("../db/models").Medication;
const Sequelize = require("sequelize");

module.exports = {

  index(req, res, next){
    medicationQueries.getAllMedications((err, medications) => {
      if(err){
        res.redirect(500, "static/index");
      } else {
        res.render("medications/index", {medications});
      }
    })
  },

  new(req, res, next){
    res.render("medications/new");
  },

  create(req, res, next){
    let newMedication = {
      date: req.body.date,
      drug: req.body.drug,
      dose: req.body.dose,
      ingredients: req.body.ingredients
    };
    medicationQueries.addMedication(newMedication, (err, medication) => {
      if(err){
        res.redirect(500, "/medications/new");
      } else {
        res.redirect(303, `/medications/${medication.id}`);
      }
    });
  },

  show(req, res, next){
    medicationQueries.getMedication(req.params.id, (err, medication) => {
      if(err || medication == null){
        res.redirect(404, "/");
      } else {
        res.render("medications/show", {medication});
      }
    });
  },

  destroy(req, res, next){
    medicationQueries.deleteMedication(req.params.id, (err, medication) => {
      if(err){
        res.redirect(500, `/medications/${req.params.id}`)
      } else {
        res.redirect(303, "/medications")
      }
    });
  },

  edit(req, res, next){
    medicationQueries.getMedication(req.params.id, (err, medication) => {
      if(err || medication == null){
        res.redirect(404, "/");
      } else {
        res.render("medications/edit", {medication});
      }
    });
  },

  update(req, res, next){
    medicationQueries.updateMedication(req.params.id, req.body, (err, medication) => {
      if(err || medication == null){
        res.redirect(404, `/medications/${req.params.id}/edit`);
      } else {
        res.redirect(`medications/${medication.id}`);
      }
    });
  }

}
