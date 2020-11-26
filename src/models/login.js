const LocalStrategy = require("passport-local").Strategy;

const User = require("./user");
function passportInit(passport,bcrypt){
  const auth = async (email,password,done) => {

    const user = await User.find({email : email});
    try{

    if(user.length === 0) return done(null,false,{message : "Email and password do not match"});
    const isPasswordValid = await bcrypt.compare(password,user[0].password);

    if(!isPasswordValid) return done(null,false,{message : "Email and password do not match"});
    return done(null,user[0]);
    }
    catch(error){
      done(error)
      console.log(error.message)
    }
  }
   passport.use(new LocalStrategy({usernameField : "email"},auth));
  passport.serializeUser((user,done) => {
    done(null,user.id)
  })
  passport.deserializeUser((id,done) => {
    done(null, async () => User.findById({_id : id}))
  })
}
module.exports = passportInit;