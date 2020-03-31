'use strict';
module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define('Appointment', {
    what: {
      type: DataTypes.STRING,
      allowNull: false
    },
    with: DataTypes.STRING,
    when: {
      type: DataTypes.DATE,
      allowNull: false
    },
    at: {
      type: DataTypes.TIME,
      allowNull: false
    },
    where: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Appointment.associate = function(models) {
    Appointment.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE"
    });
  };
  return Appointment;
};