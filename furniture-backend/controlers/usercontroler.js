const { User } = require('../models/usermodel.js');
const jwt = require('jsonwebtoken');
const key = process.env.JWT_KEY;

const signup = async (req,res)=>{
    try{
        const newUser = new User(req.body);
        const finalData = await newUser.save();
        res.status(200).json({
            msg:'Signup request sucsess',
            data:finalData
        })
    } catch (err) {
        res.status(400).json({
            msg:'Signup request faild....',
            error:err
        })
        console.log(err);
    }
}

const login = async (req,res)=>{
    try{
        const { uname,pass } = req.body;
        const findData = await User.findOne({uname:uname,pass:pass});
        if (!findData){
            res.status(400).json({
                data:'your data not match',
            });
        }else{
            const newObj = {
                uid:findData._id,
                email:findData.email,
                fullname:findData.fullname,
                gender:findData.gender,
                uname:findData.uname,
            }
            const jwtToken = jwt.sign(newObj,key,{expiresIn:'30d'});
            console.log(jwtToken)
            res.status(200).json({
                msg:'Login request sucsess',
                data:jwtToken
            })
        }
    } catch (err){
        res.status(400).json({
            msg:'Login request faild....',
            error:err
        })
        console.log(err);
    }
}

const userAuth = async (req,res)=>{
    try{
        const userData = await User.findOne({_id:req.user.uid});
        console.log(userData)
        res.status(200).json({
            msg:'Sucsess',
            data:userData,
        })
    }catch(err){
        res.status(400).json({
            msg:'Authentication failed....',
            error:err
        })
        console.log(err);
    }
}

module.exports = { signup,login,userAuth };