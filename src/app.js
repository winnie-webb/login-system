const express = require("express");
const session = require("express-session");
const flash = require("express-flash");
const passport = require("passport");
const path = require("path");
const bcrypt = require("bcrypt");
require("dotenv").config();

const passportInit = require("./models/login");
const getRequests = require("./models/getRequests");
const postRequests = require("./models/postRequests");
require("./models/mongoose");
const app = express();
const log = console.log;

app.use(flash())
app.use(session({
    secret : process.env.SESSION__SECRET,
    resave : false,
    saveUninitialized : false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname,"../public")));
app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.set('views',path.join(__dirname,"../public/views"));
app.set("view engine", "ejs");

passportInit(passport,bcrypt);
getRequests(app);
postRequests(app,bcrypt,passport);

app.listen(3000,() => log("Server has started"));