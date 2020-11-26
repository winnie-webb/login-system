const signup = require("./signup");
const login = require("./login");
function postRequests (app,bcrypt){
    app.post("/signup",(req,res) => signup(bcrypt,req,res) );
    app.post('/login',(req,res) => login(bcrypt,req,res))
}
module.exports = postRequests;
