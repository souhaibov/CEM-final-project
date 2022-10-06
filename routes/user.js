const express = require("express")
const User = require("../model/User")
const router = express.Router()
const bcrypt = require("bcrypt")
const jwt= require("jsonwebtoken")
const {loginRules,registerRules,validation} = require("../middleware/validator")
const isAuth = require("../middleware/passport")


//Register

router.post("/register",registerRules(),validation, async (req, res) => {
  // const newUser= new User(req.body);
  const { email, password } = req.body;
  try {
    const newUser = new User({ ...req.body });

    // checking the email... exists or not

    const searchedUser = await User.findOne({ email });
    if (searchedUser) {
      return res.status(400).send({ msg: "email already registered" });
    }

    // hash the password (decrypter)

    const salt = 11;
    const gensalt = await bcrypt.genSalt(salt);
    const hashedPassword = await bcrypt.hash(password, gensalt);

    newUser.password = hashedPassword;
    // generate a token
    


    // save the user
    const newUserToken = await newUser.save();
    const payload = {
        _id: newUserToken._id,
        name: newUserToken.name
    }
    const token = await jwt.sign(payload, process.env.SecretOrKey, {
        expiresIn: 3600
    })
    res.status(200).send({newUserToken, msg:"user is saved", token:`Bearer ${token}`});
  } catch (error) {
    res.status(500).send("can not save the user");
  }
});

//login

router.post('/login',loginRules(),validation, async (req, res) => {
    const {email, password} = req.body;
try {
    // find if the user exists
    const searchedUser = await User.findOne({email})
    // if the email don't exist
    if(!searchedUser) {
        return res.status(400).send({msg: "bad credentials"});
    }
    // passwords are equals
    const match = await bcrypt.compare(password, searchedUser.password);

    if(!match) {
        return res.status(400).send({msg: "bad credentials"});
    }
    // cree un token
const payload = {
    _id: searchedUser._id,
}
const token = await jwt.sign(payload, process.env.SecretOrKey, {
    expiresIn: 3600
})
console.log(token)
    // send the user
    res.status(200).send({user: searchedUser, msg: "success", token:`Bearer ${token}`});

} catch (error) {
    res.status(500).send("can not get the user");
}
})


// Current user
router.get('/current',isAuth(), (req, res) => {
    res.status(200).send({user: req.user})
})
module.exports = router
