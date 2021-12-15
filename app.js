const express = require('express');
const mongoose = require('mongoose');
const bodyParer = require('body-parser');
const logger = require('./logger/index');
require('dotenv/config');


const app = express();

app.use(bodyParer.json());

//routes
const userRoutes = require('./users/users');

//middleware
/* app.use('/users', ()=>{
console.log('middleware test');
}); */
//app.use(logger);


app.use('/users', userRoutes);


//connect to DB
mongoose.connect(process.env.DB_CONNECTION, ()=> console.log('connected to DB'));

app.listen(5000);