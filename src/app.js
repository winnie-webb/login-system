const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");
const getRequests = require("./models/getRequests");
const postRequests = require("./models/postRequests")
require("./models/mongoose");
const app = express();
const log = console.log;

app.use(express.static(path.join(__dirname,"../public")));
app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.set('views',path.join(__dirname,"../public/views"));
app.set("view engine", "ejs");
getRequests(app);
postRequests(app,bcrypt);

app.listen(3000,() => log("Server has started"));