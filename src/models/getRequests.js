const { get } = require("local-storage");

function getRequests(app){
    app.get("/",(_req,res) => {
    res.send("Hello World")
})
app.get("/signup",(_req,res) => {
    res.render("loginsys.ejs",{title : "Register",action:"/signup",whichPage : "login"});
})
app.get("/login",(req,res) => {
    res.render("loginsys.ejs",{title : "Login",action:"/login",whichPage: "signup"});
})
}
module.exports = getRequests;