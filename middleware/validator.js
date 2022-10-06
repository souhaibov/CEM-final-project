const {check, validationResult} = require('express-validator');

exports.registerRules = () => [
    check("first_name", "first_name is required").notEmpty(),
    check("last_name", "last_name is required").notEmpty(),
    check("phone_number", "phone_number is required").notEmpty(),
    check("email", "email is required").notEmpty().isEmail(),
    check("password", "please enter a right password").isLength(
        {
            min:7,
            max:20
        }),
];

exports.validation = (req, res, next) => {
 const errors = validationResult(req);
 if (!errors.isEmpty()){
    return res.status(400).send({errors: errors.array().map(el=>({msg:el.msg}))});
 }
 next()
}
exports.loginRules = () => [

    check("email", "email is required").notEmpty().isEmail(),
    check("password", "please enter a password between 7 and 20 characters ").isLength(
        {
            min:7,
            max:20
        }),
];
