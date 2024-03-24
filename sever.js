const express = require('express');
const app = express();
const dotenv = require('dotenv');
const router = require('./Routes/UserRouter');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

mongoose.connect('mongodb+srv://mridulk896:Mridul*896@cluster0.zcauifg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
    //mandatory string options
    //useUnifiedTopology : true,
    //useNewUrlParser : true
}).then(()=>{
    console.log(`connected to db`);
}).catch((err)=>{
    console.log('err : ',err);
})

app.use('/api/v1/user',router);//router middleware

app.listen(process.env.PORT,()=>{
    console.log(`Listening to ${process.env.PORT}`);
})

//localhost:3000/api/v1/user/signUp