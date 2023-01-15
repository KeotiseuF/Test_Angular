const User = require("../models/user")

exports.signup = (req, res, next) => {
    const user = new User({
            email: req.body.email,
            password: req.body.password
    });    
    user.save()
    .then(() => { res.status(201).json({ message: "Données OK!" })
    })
    .catch(( error ) => { res.status(403).json({ error })})
}