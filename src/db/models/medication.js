'use strict';
module.exports = (sequelize, DataTypes) => {
  const Medication = sequelize.define('Medication', {
    date: DataTypes.DATE,
    name: DataTypes.STRING,
    dose: DataTypes.FLOAT,
    ingredients: DataTypes.STRING
  }, {});
  Medication.associate = function(models) {
    // associations can be defined here
  };
  return Medication;
};
