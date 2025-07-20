const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const { signup,login,userAuth } = require('../controlers/usercontroler.js');

const auth = async (req,res,next)=>{
    try{
        const rowToken = await req.headers['authorization'];
        if(!rowToken){
            res.send('your token not valid');
        }
        const token = rowToken.split(' ')[1];
        const user = jwt.verify(token,process.env.JWT_KEY);
        if(!user){
            res.send('your key not valid');
        }
        req.user = user;
        next();
    }catch(err){
        res.status(400).json({
            msg:'Verify faild..',
            error:err
        })
    }
}


router.post('/signup',signup);
router.post('/login',login);
router.get('/',auth,userAuth);

module.exports = router;

