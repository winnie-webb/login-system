const User = require("./user");
async function signup(bcrypt,req,res){
    const isAlreadyUser = await User.find({email:req.body.email});
    if(isAlreadyUser === null) return res.redirect("/signup")
    try{
        const hashedPassword = await bcrypt.hash(req.body.password,10);
    const userBody = {
        name : req.body.name,
        email : req.body.email,
        password : hashedPassword
    }
   const user = new User(userBody);
  const isSaved =  await user.save();
  if(isSaved) return res.redirect("/login");
    }
    catch(error){
        console.log(error.message)
    }
   
}
module.exports = signup;