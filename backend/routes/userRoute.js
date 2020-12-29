const express = require("express")
const  {authUser, getProfile, registerUser}  = require("../controllers/userControllers")
const authMiddleware = require("../middleware/authMiddleware.js")
const router = express.Router()


router.post("/login", authUser)
router.post("/", registerUser)

router.route("/profile").get(authMiddleware,getProfile)

module.exports= router

