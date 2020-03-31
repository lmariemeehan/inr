const appointmentQueries = require("../db/queries.appointments.js");
const Appointment = require("../db/models/").Appointment;
const User = require("../db/models/").User;
const Sequelize = require("sequelize");

module.exports = {
    index(req, res, next) {
        appointmentQueries.getAllAppointments((err, appointments) => {
            if(err) {
                res.redirect(500, "static/index");
            } else {
                res.render("appointments/index", {appointments});
            }
        })
    },

    new(req, res, next) {
        res.render("appointments/new");
    },

    create(req, res, next) {
        let newAppointment = {
            what: req.body.what,
            with: req.body.with,
            when: req.body.when,
            at: req.body.at,
            where: req.body.where,
            userId: req.user.id
        } 
        appointmentQueries.addAppointment(newAppointment, (err, appointment) => {
            if(err) {
                res.redirect(500, "/appointments/new");
            } else {
                console.log(appointment);
                res.render(302, `/appointments/${appointment.id}`);
            }
        });
    },

    show(req, res, next) {
        appointmentQueries.getAppointment(req.params.id, (err, appointment) => {
            if(err || appointment == null) {
                console.log(err);
                res.redirect(404, "/");
            } else {
                res.render("appointments/show", {appointment});
            }
        });
    },

    destroy(req, res, next) {
        appointmentQueries.deleteAppointment(req.params.id, (err, appointment) => {
            if(err) {
                res.redirect(500, `/appointments/${req.params.id}`);
            } else {
                res.redirect(303, "/appointments");
            }
        });
    },

    edit(req, res, next) {
        appointmentQueries.getAppointment(req.params.id, (err, appointment) => {
            if(err || appointment == null) {
                res.redirect(404, "/");
            } else {
                res.redirect("appointments/edit", {appointment});
            }
        });
    },

    update(req, res, next) {
        appointmentQueries.updateAppointment(req.params.id, req.body, (err, appointment) => {
            if(err || appointment == null) {
                res.redirect(404, `/appointments/${req.params.id}/edit`);
            } else {
                res.redirect(`appointments/${appointment.id}`);
            }
        });
    }

}