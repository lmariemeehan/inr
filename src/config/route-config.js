module.exports = {
  init(app){
    const staticRoutes = require("../routes/static");
    const inrRoutes = require("../routes/inrs");
    const medicationRoutes = require("../routes/medications");
    app.use(staticRoutes);
    app.use(inrRoutes);
    app.use(medicationRoutes);
  }
}
