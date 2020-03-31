module.exports = {
  init(app){
    const staticRoutes = require("../routes/static");
    const inrRoutes = require("../routes/inrs");
    const medicationRoutes = require("../routes/medications");
    const userRoutes = require("../routes/users");
    const appointmentRoutes = require("../routes/appointments");
    app.use(staticRoutes);
    app.use(inrRoutes);
    app.use(medicationRoutes);
    app.use(userRoutes);
    app.use(appointmentRoutes);
  }
}
