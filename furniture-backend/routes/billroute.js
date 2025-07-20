const express = require('express');
const billRouter = express.Router();
const { billRead,billCreate,billUpdate,billDelete } = require('../controlers/billcontroler.js');

billRouter.get('/billread/:id',billRead);
billRouter.put('/billcreate/:id',billCreate);
billRouter.put('/billupdate',billUpdate);
billRouter.delete('/user/:userId/project/:proId',billDelete);

module.exports = billRouter;