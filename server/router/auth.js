const express = require('express'); // Router for backend
const router = express.Router();
const bcrypt = require('bcrypt');
require('../db/conn');

const User = require("../model/userSchema");

router.get('/',(req,res) => {
    res.send(`Hello world from the server routerjs`);
});



// // //Using promises
// router.post('/register', (req,res)  => {

//     // console.log(name);
//     // console.log(email);
//     // res.json({message: req.body});

//     const { name, email, phone, work, password, cpassword} = req.body;

//     //To check if a user has filled the form or not
//     if(!name || !email || !phone || !work || !password || !cpassword)
//     {
//         return res.status(422).json ({error: "Plz fill the field properly"});
//     }

//     //Since here we are registering the user so if the email matchws then throw an error and write user already exists.
//     User.findOne({email: email})
//     .then((userExists) => {
//         if(usetExists){
//             return res.status(422).json({error: "Email already exists"});
//         }
        
//         //else
//         const user = new User({ name, email, phone, work, password, cpassword});

//         user.save().then(()=>{
//             res.status(201).json({message: "User registered successfully."});
//         }).catch((err) => res.status(500).json({error: "Failed to regsiter" }));
//     }).catch(err => {console.log(err); });

// });




//Using async and await
router.post('/register', async (req,res)  => {

    // const { name, email, phone, work, password, cpassword} = req.body;

//     //To check if a user has filled the form or not
//     if(!name || !email || !phone || !work || !password || !cpassword)
//     {
//         return res.status(422).json ({error: "Plz fill the field properly"});
//     }

//     try{
//         //Since here we are registering the user so if the email matchws then throw an error and write user already exists.
//     const userExists =  await User.findOne({email: email});

//     if(userExists)
//     {
//         return res.status(422).json({error: "Email already exists"});
//     }

//     const user = new User({ name, email, phone, work, password, cpassword});
// //Jab bhi promise complete hone ka time ho tab promise use karo

//     const userRegister = await user.save();

//     if(userRegister)
//     {
//         res.status(422).json({error: "Email already Exists."});
//     }

//     else{
//         res.status(500).json({error: "Failed to registered"});
//     }

//     }catch (err){
//         console.log(err);
//     }
    

const { name, email, phone, work, password, cpassword} = req.body;

 //To check if a user has filled the form or not
 if(!name || !email || !phone || !work || !password || !cpassword)
 {
     return res.status(422).json ({error: "Plz fill the field properly"});
 }

 try{
     //Since here we are registering the user so if the email matchws then throw an error and write user already exists.
 const userExists =  await User.findOne({email: email});

 if(userExists)
 {
     return res.status(422).json({error: "Email already exists"});
 }
else if(password != cpassword)
{
    return res.status(422).json({error: "Passwords are not matching."});
}
else{
    const user = new User({ name, email, phone, work, password, cpassword});
    //Jab bhi promise complete hone ka time ho tab promise use karo
    
    const userRegister = await user.save();
    
    console.log(`${user} user registered successfully.`);
    console.log(userRegister);
    
    res.status(201).json({message: "User registered successfully"});
}


 }catch (err){
     console.log(err);
 }
 

});


//Login route
router.post('/signin', async(req,res) => {
    // console.log(req.body);
    // res.json({message: "Done"});

    try{
        const { email, password} = req.body;

        //The data is not entered by the user
        if(!email || !password)
        {
            return res.status(400).json({error: "Plz fill the data"})
        }

        //Is email id entered by the user matches
        const userLogin = await User.findOne({email: email});

        // console.log(userLogin);

        //If user data is not present then throw error

        if(userLogin)
        {
            const isMatch = await bcrypt.compare(password,userLogin.password);

        if(!isMatch)
        {
            res.status(400).json({error: "Invalid Credientials pass"});
        }
        else{
            res.json({message: "User signin successfully."})
        }
    }else{
        res.status(400).json({error: "Invalid Credientials"});
    }

    }catch(err){
        console.log(err);
    }

});
module.exports = router;