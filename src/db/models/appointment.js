'use strict';
module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define('Appointment', {
    when: {
      type: DataTypes.DATE,
      allowNull: false
    },
    at: {
      type: DataTypes.TIME,
      allowNull: false
    },
    what: {
      type: DataTypes.STRING,
      allowNull: false
    },
    with: DataTypes.STRING,
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