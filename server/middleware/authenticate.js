const jwt = require('jsonwebtoken');
const User = require('../model/userSchema');

const Authenticate = async (req,res, next) => {
    try{
        const token = req.cookies.jwtoken;  //We get our token

        //Now we will verify our token using token and SECRET_KEY
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

        //Here we are find a user with id= verified token id and token = verified token
        const rootUser = await User.findOne({_id: verifyToken._id,"tokens.token": token});

        //If not found-Give error
        if(!rootUser)
        {
            throw new Error('User not Found')
        }

        //If found Values mentioned below and move to next
        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;

        next();
    }
 
    catch(err)
    {
        res.status(401).send('Unauthorized: No token provided');
        console.log(err);
    }
}

module.exports = Authenticate;