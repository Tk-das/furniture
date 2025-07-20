const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URI)
.then(()=>{console.log('Database connect sucsess')})
.catch(()=>{console.log('Database connection faild....')})

const userSchema = new mongoose.Schema({
    email:String,
    fullname:String,
    logo:String,
    gender:String,
    uname:String,
    pass:String,
    condition:Boolean,
    projects:[
        {
            proname:String,
            woner:String,
            category:String,
            email:String,
            advance:Number,
            items:[
                {
                    itemname:String,
                    width:Number,
                    height:Number,
                    qty:Number,
                    rate:Number,
                },
            ]
        },
    ]
})
const User = mongoose.model('User',userSchema);


module.exports = { User };
