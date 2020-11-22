const express = require("express");
const path = require("path");
const app = express();
const log = console.log;

app.use(express.json());
app.use(express.static(path.join(__dirname,"../public")));

app.set('views',path.join(__dirname,"../public/views"));
app.set("view engine", "ejs");

app.get("/",(_req,res) => {
    res.send("Hello World")
})
app.get("/signup",(_req,res) => {
    res.render("loginsys.ejs",{title : "Register",action:"/signup",whichPage : "login"});
})
app.get("/login",(req,res) => {
    res.render("loginsys.ejs",{title : "Login",action:"/login",whichPage: "signup"});
})
app.listen(3000,() => log("Server has started"));