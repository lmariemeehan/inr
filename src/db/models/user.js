'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isEmail: { msg: "must be a valid email"} }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lowInr: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    highInr: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {});
  User.associate = function(models) {

    User.hasMany(models.Inr, {
      foreignKey: "userId",
      as: "inrs"
    });

    User.hasMany(models.Medication, {
      foreignKey: "userId",
      as: "medications"
    });
    
  };
  return User;
};