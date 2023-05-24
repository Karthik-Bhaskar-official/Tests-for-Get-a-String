const result = require("express");
const app = result();

app.get("/", (request, response) => {
  response.send("Express JS");
});

module.exports = app;
