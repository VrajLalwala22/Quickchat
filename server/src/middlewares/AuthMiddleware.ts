import jwt from "jsonwebtoken"
import { Request, Response, NextFunction } from "express"

const authMiddleware=(req:Request, res:Response, next:NextFunction)=>{
    const authHeader=req.headers.authorization

if(authHeader===undefined  || authHeader===null)
{
    return res.status(401).json({status:401,message:"Unauthorized"});
}

const token=authHeader.split(" ")[1];

jwt.verify(token,process.env.JWT_SECRET as string ,(err,user)=>{
    if(err) return res.status(401).json({status:401,message:"Unauthorized"});
    req.user=user as AuthUser;
    next();
})
}

export default authMiddleware;