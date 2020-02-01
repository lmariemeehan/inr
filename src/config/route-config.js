module.exports = {
  init(app){
    const staticRoutes = require("../routes/static");
    app.use(staticRoutes);
    const inrRoutes = require("../routes/inrs");
    app.use(inrRoutes)
  }
}
