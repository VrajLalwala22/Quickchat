import {Request,Response} from "express"
import { prisma } from "../config/db.config.js";
import jwt from "jsonwebtoken"

interface LoginPayloadType{
    email:string,
    provider:string,
    oauth_id:string,
    name:string,
    image?:string,
}




class AuthController{
    static async login(req:Request,res:Response){
        try {
            const body:LoginPayloadType = req.body
            let findUser = await prisma.user.findUnique({
                where:{
                    email:body.email
                }
            })
            if(!findUser){
                findUser = await prisma.user.create({
                    data:body
                })
            }

            let JWTPayload = {
                name:body.name,
                email:body.email,
                id:findUser.id,
            }
            const token = jwt.sign(JWTPayload,process.env.JWT_SECRET ,{
                expiresIn:"365d"})
                return res.json({
                    message:"Login Successfully",
                    user:{
                        ...findUser,
                        token:`Bearer ${token}`
                    }
                })
        } catch (error) {
            return res.status(500).json({message:"Internal Server Error"})
        }

    }
}

export default AuthController;