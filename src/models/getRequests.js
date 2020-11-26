const {checkAuthenticated,checkAlreadyAuthenticated} = require("./auth");
function getRequests(app){
    app.get("/",checkAuthenticated,(req,res) => {
    res.send("Hello World")
})
app.get("/signup",checkAlreadyAuthenticated,(_req,res) => {
    res.render("loginsys.ejs",{title : "Register",action:"/signup",whichPage : "login"});
})
app.get("/login",checkAlreadyAuthenticated,(req,res) => {
    res.render("loginsys.ejs",{title : "Login",action:"/login",whichPage: "signup"});
})
}

module.exports = getRequests;