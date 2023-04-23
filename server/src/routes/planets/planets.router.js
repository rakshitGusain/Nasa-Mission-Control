const express = require("express");

const { httpGetAllPlanets } = require("./planets.controller");

const planetsRouter = express.Router();

// planetsRouter.get("/test", (req, res) => {
//   res.json("efwsfesf");
// });

planetsRouter.get("/", httpGetAllPlanets);

module.exports = planetsRouter;
