'use strict';
module.exports = (sequelize, DataTypes) => {
  const Inr = sequelize.define('Inr', {
    date: DataTypes.DATE,
    result: DataTypes.FLOAT,
    notes: DataTypes.STRING,
  }, {});
  Inr.associate = function(models) {
    // associations can be defined here
  };
  return Inr;
};
