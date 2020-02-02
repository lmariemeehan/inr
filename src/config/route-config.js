module.exports = {
  init(app){
    const staticRoutes = require("../routes/static");
    const inrRoutes = require("../routes/inrs");
    app.use(staticRoutes);
    app.use(inrRoutes);
  }
}
