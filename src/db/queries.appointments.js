const Appointment = require("./models").Appointment;

module.exports = {

    getAllAppointments(callback) {
        return Appointment.findAll() 
            .then((appointments) => {
                callback(null, appointments);
            })
            .catch((err) => {
                callback(err);
            })
    },

    getAppointment(id, callback) {
        return Appointment.findByPk(id)
        .then((appointment) => {
            callback(null, appointment);
        })
        .catch((err) => {
            callback(err);
        })
    },
    
    addAppointment(newAppointment, callback) {
        return Appointment.create({
            when: newAppointment.when,
            at: newAppointment.at,
            what: newAppointment.what,
            with: newAppointment.with,
            location: newAppointment.location,
            userId: newAppointment.userId
        })
        .then((appointment) => {
            callback(null, appointment);
        })
        .catch((err) => {
            callback(err);
        })
    },
    
    deleteAppointment(id, callback) {
        return Appointment.destroy({
            where: {id}
        })
        .then((appointment) => {
            callback(null, appointment);
        })
        .catch((err) => {
            callback(err);
        })
    },

    updateAppointment(id, updatedAppointment, callback) {
        return Appointment.findByPk(id)
        .then((appointment) => {
            if(!appointment) {
                return callback("Appointment not found");
            }
            appointment.update(updatedAppointment, {
                fields: Object.keys(updatedAppointment)
            })
            .then(() => {
                callback(null, appointment);
            })
            .catch((err) => {
                callback(err);
            });
        });
    }
    
}