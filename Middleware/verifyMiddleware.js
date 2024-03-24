const jwt = require('jsonwebtoken');
const verify = (req,res,next)=>{
    const tokencheck = req.headers['authorization'];
    //console.log(tokencheck);
    const extracted = tokencheck.split(' ')[1];
    if(extracted){
        jwt.verify(extracted,process.env.SECRET_KEY,(err,decoded)=>{
            if(err){
                res.json({"Message" : "This is wrong" , "err" : err}).status(500);
            }else{
                console.log(decoded);
                req.email = decoded.email;
                res.json(decoded)
                next();
            }
        });
    }
}

module.exports = verify;