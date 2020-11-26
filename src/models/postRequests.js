const signup = require("./signup");
const {checkAlreadyAuthenticated} = require("./auth")
function postRequests (app,bcrypt,passport){
    app.post("/signup",checkAlreadyAuthenticated,(req,res) => signup(bcrypt,req,res) );
    app.post('/login',checkAlreadyAuthenticated,passport.authenticate('local',
    {
    failureRedirect : "/login",
    successRedirect : "/",
    failureFlash : true
}))
}
module.exports = postRequests;

