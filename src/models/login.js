const User = require("./user");
async function login(bcrypt,req,res){
  const isUser = await User.find({email : req.body.email})

  try{
      if(!isUser) return res.redirect("/login");
      const isPasswordMatched = await bcrypt.compare(req.body.password,isUser[0].password);

      if(isPasswordMatched) return res.redirect("/")
      return res.redirect("/login");
  }
  catch (error) {console.log(error.message)}
}
module.exports = login;