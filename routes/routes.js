const routes = require("express").Router();
const devicesController = require("../controller/dispositivoController");

routes.get("/inicio", devicesController.listarDispositivos);
routes.post("/add", devicesController.adicionarDispositivo);

module.exports = routes;
