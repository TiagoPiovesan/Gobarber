const { Router } = require("express");

const routes = new Router();

routes.get("/", (req, res) => {
  return res.json({ message: "Hellow world" });
});

module.exports = routes;
