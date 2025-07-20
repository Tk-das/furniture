require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const router = require('./routes/userroute.js');
const billRouter = require('./routes/billroute.js');

app.use(express.json());
app.use(cors());
app.use('/user',router);
app.use('/bill',billRouter);

app.listen(port,()=>{
    console.log(`Running port is : ${port}`)
})