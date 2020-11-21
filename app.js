const express = require("express");
const app = express();
const log = console.log;

app.listen(3000,() => log("Server has started"));