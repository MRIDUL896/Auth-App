const userModel = require("../Models/UserModel");
const jwt = require('jsonwebtoken');

const handleUserSignUp = (req,res)=>{
    try{
        userModel.create(req.body).then(()=>{
            res.json({"Message" : "Created successfully"}).status(201);
        }).catch((err)=>{
            res.json({"Message" : "Not created","err" : err}).status(500);
        })
    }catch(err){
        res.json({"Message" : "Not created","err" : err}).status(500);
    }
}

const handleUserLogin = (req,res)=>{
    let {email} = req.body; //destructuring of object
    try{
        userModel.find({email : email}).then((response)=>{
            console.log(response);
            if(response.length){
                jwt.sign(req.body,process.env.SECRET_KEY,(err,token)=>{
                    if(err){
                        res.send({"err" : err,"Message" : "Something is wrong"});
                    }else{
                        res.json({
                            "Message" : "Login Successful",
                            "data" : req.body ,
                            token : token
                        })
                    }
                }) //,{expiresIn : '1d'}
            }
        })
    }catch(err){
        res.send({"err" : err,"Message" : "Something is wrong"});
    }
}

const getdetails = (req,res)=>{

}

module.exports = {handleUserSignUp,handleUserLogin,getdetails};