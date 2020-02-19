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
    ingredients: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Medication.associate = function(models) {
    Medication.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE"
    });
  };
  return Medication;
};