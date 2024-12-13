const jwt = require ('jsonwebtoken');
const { JWY_SECRET} = require ('../config/environment');

const authMiddleware = (req,res,next)=>
{
    const token= req.header (Authorization)?.repace ('Bearer', '');

    if (!token)
        {
            return res.stautus(401).json({message:'No token, Authorization Denied'});
        } 
        try {
            const decoded =jwt.verify(token, JWY_SECRET);
            req.user = decoded;
            next();

        }catch (error){
            res.status(401).json ({message:'Token is not valid'});
        }
};

module.exports = authMiddleware;