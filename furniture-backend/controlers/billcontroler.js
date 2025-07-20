const { User } = require('../models/usermodel.js');

const billRead = async (req,res)=>{
    try{
        const findUid = req.params.id;
        const proList = await User.findOne({_id:findUid});
        res.status(200).json({
            msg:'sucsess',
            data: proList
        })
    }catch(err){
        res.status(400).json({
            msg:'',
            error:err.message
        })
    }
}

const billCreate = async (req,res)=>{
    try{
        const id = req.params.id;
        const result = await User.findByIdAndUpdate(id,{$push:{projects:req.body}},{new:true});
        console.log(id)
        res.status(200).json({
            msg:'update sucsess..',
            data:result
        })
    }catch(err){
        res.status(400).json({
            msg:'',
            error:err.message
        })
    }
}

const billUpdate = async (req,res)=>{
    try{
        
    }catch(err){
        res.status(400).json({
            msg:'',
            error:err
        })
    }
}

const billDelete = async (req,res)=>{
    try{
        const { userId,proId } = req.params;
        const result = await User.findByIdAndUpdate(userId,{$pull:{projects:{_id:proId}}},{new:true});
        res.status(200).json({
            msg:'sucsess',
            data:result,
        })
    }catch(err){
        res.status(400).json({
            msg:'',
            error:err
        })
    }
}

module.exports = { billRead,billCreate,billUpdate,billDelete };