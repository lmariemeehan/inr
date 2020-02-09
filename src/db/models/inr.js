'use strict';
module.exports = (sequelize, DataTypes) => {
  const Inr = sequelize.define('Inr', {
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    result: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Inr.associate = function(models) {
    // associations can be defined here
  };
  return Inr;
};
