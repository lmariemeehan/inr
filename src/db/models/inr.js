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
    notes: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Inr.associate = function(models) {
    Inr.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE"
    });
  };
  return Inr;
};
