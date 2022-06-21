const express = require("express");
const { appendFile } = require("fs");
const morgan = require("morgan");
const path = require("path");
const Port = 3000;

const server = express();

server.listen(Port, () => {
  console.log(`App is listening on Port ${Port}`);
});

server.use(morgan("dev"));

server.get("/", (req, res, next) => {
  console.log("response", res);
  res.send(`<h1>Hello from homepage route<h1>`);
});

server.get("/contact", (req, res, next) => {
  console.log("response", res);
  res.send(`<h1>Hello from contact route<h1>`);
});

server.get("/portfolio", (req, res, next) => {
  console.log("response", res);
  res.send(`<h1>Hello from portfolio route<h1>`);
});

server.get("/passions", (req, res, next) => {
  console.log("response", res);
  res.send(`<h1>Hello from passions route<h1>`);
});
