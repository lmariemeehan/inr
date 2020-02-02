'use strict';
module.exports = (sequelize, DataTypes) => {
  var Inr = sequelize.define('Inr', {
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    result: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    notes: DataTypes.STRING
  }, {});
  Inr.associate = function(models) {
    // associations can be defined here
  };
  return Inr;
};
