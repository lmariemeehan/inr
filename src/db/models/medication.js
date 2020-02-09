'use strict';
module.exports = (sequelize, DataTypes) => {
  const Medication = sequelize.define('Medication', {
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    drug: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dose: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    ingredients: DataTypes.STRING
  }, {});
  Medication.associate = function(models) {
    // associations can be defined here
  };
  return Medication;
};
