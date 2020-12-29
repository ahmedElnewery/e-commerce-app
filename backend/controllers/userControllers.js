const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const _ = require("lodash")
// @desc   authticate user and get token
// @route   POST /api/users/login
// @access  public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && await user.matchPassword(password)) {
    const token = user.generateToken()
     return res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token
      });
    } else {
      return res.status(400).send("invalid email or password");
    }

});
// @desc  Register new user
// @route   post /api/users/
// @access  public
const registerUser = asyncHandler (async(req,res)=> {
  const existUser = await User.findOne({email:req.body.email}) 
   if(existUser) return res.status(400).send("the user with this email is alrady exist")
  const user =  await User.create(_.pick(req.body,["name","email","password"]))
  res.json(_.pick(user, ["_id", "name", "email"]))

})



// @desc   get profile access
// @route   GET /api/users/profile
// @access  private
const getProfile = asyncHandler (async(req,res)=> {
    const user = req.user
    if(user) {
      return res.send(user)
    } else {
    return  res.status(404).send("user not found")
    }

})



module.exports= { authUser ,registerUser, getProfile}
