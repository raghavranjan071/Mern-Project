const express = require('express'); // Router for backend
const router = express.Router();
require('../db/conn');

const User = require("../model/userSchema");

router.get('/',(req,res) => {
    res.send(`Hello world from the server routerjs`);
});

// //Using promises
router.post('/register', (req,res)  => {

    // console.log(name);
    // console.log(email);
    // res.json({message: req.body});

    const { name, email, phone, work, password, cpassword} = req.body;

    //To check if a user has filled the form or not
    if(!name || !email || !phone || !work || !password || !cpassword)
    {
        return res.status(422).json ({error: "Plz fill the field properly"});
    }

    //Since here we are registering the user so if the email matchws then throw an error and write user already exists.
    User.findOne({email: email})
    .then((userExists) => {
        if(usetExists){
            return res.status(422).json({error: "Email already exists"});
        }
        
        //else
        const user = new User({ name, email, phone, work, password, cpassword});

        user.save().then(()=>{
            res.status(201).json({message: "User registered successfully."});
        }).catch((err) => res.status(500).json({error: "Failed to regsiter" }));
    }).catch(err => {console.log(err); });

});



module.exports = router;