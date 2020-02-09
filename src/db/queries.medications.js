const Medication = require("./models").Medication;

module.exports = {

  getAllMedications(callback){
    return Medication.findAll()
    .then((medications) => {
      callback(null, medications);
    })
    .catch((err) => {
      callback(err);
    })
  },

  getMedication(id, callback){
    return Medication.findByPk(id)
    .then((medication) => {
      callback(null, medication);
    })
    .catch((err) => {
      callback(err);
    })
  },

  addMedication(newMedication, callback){
    return Medication.create({
      date: newMedication.date,
      drug: newMedication.drug,
      dose: newMedication.dose,
      ingredients: newMedication.ingredients
    })
    .then((medication) => {
      callback(null, medication);
    })
    .catch((err) => {
      callback(err);
    })
  },

  deleteMedication(id, callback){
    return Medication.destroy({
      where: {id}
    })
    .then((medication) => {
      callback(null, medication);
    })
    .catch((err) => {
      callback(err);
    })
  },

  updateMedication(id, updatedMedication, callback){
    return Medication.findByPk(id)
    .then((medication) => {
      if(!medication){
        return callback("Medication not found");
      }

      medication.update(updatedMedication, {
        fields: Object.keys(updatedMedication)
      })
      .then(() => {
        callback(null, medication);
      })
      .catch((err) => {
        callback(err);
      });
    });
  }

}
