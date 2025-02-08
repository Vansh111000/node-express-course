const express = require("express");
const route = express.Router();
let { people } = require("../data");

route.post("/", (req, res) => {
    const { name } = req.body;
    if (name) {
      return res.status(200).send(`Welcome ${name}`);
    } else {
      return res
        .status(401)
        .send('Enter name!! <div></div> go to <a href="index.html">login</a>');
    }
  });

  module.exports = route;