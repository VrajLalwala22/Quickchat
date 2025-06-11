import { Request, Response } from "express"
import { prisma } from "../config/db.config.js"

class ChatGroupController{

    static async index(req:Request, res:Response)
    {
        try{
            const user = req.user
            const groups = await prisma.chatGroup.findMany({
                where: {
                    user_id: user.id
                },
                orderBy: {
                    created_at: "desc"
                }
            });
            return res.json({message:"Chat groups fetched successfully", data:groups})
        }   
        catch(error)
        {
            return res.status(500).json({message:"Something went wrong.please try again!"})
        }
    }

    static async show(req:Request, res:Response)
    {
        try{
            const {id}=req.params
            const groups=await prisma.chatGroup.findUnique({
                where:{
                    id:id
                }
            });
            return res.json({message:"Chat groups fetched successfully",data:groups})
        }   
        catch(error)
        {
            return res.status(500).json({message:"Chat Groups fetched Successfully"})
        }
    }

    static async store(req:Request, res:Response)
    {
        try{
            const body = req.body
            const user = req.user
            
            // Create the chat group
            const chatGroup = await prisma.chatGroup.create({
                data: {
                    title: body.title,
                    Passcode: body.passcode,
                    user_id: user.id
                }
            })

            // Add the creator as a group member
            await prisma.groupUsers.create({
                data: {
                    group_id: chatGroup.id,
                    name: user.name
                }
            })

            return res.json({message:"Chat group created successfully"})
        }   
        catch(error)
        {
            console.error("Error creating chat group:", error)
            return res.status(500).json({message:"Something went wrong.please try again!"})
        }
    }
    static async update(req:Request, res:Response)
    {
        try{
            const body=req.body
            const {id}=req.params
            await prisma.chatGroup.update({
                where:{
                    id:id
                },
                data: body
            });
            return res.json({message:"Chat group updated successfully"})
        }   
        catch(error)
        {
            return res.status(500).json({message:"Something went wrong.please try again!"})
        }
    }

    static async destroy(req:Request, res:Response)
    {
        try{
            const {id}=req.params
            await prisma.chatGroup.delete({
                where:{
                    id:id
                },
            });
            return res.json({message:"Chat group deleted successfully"})
        }   
        catch(error)
        {
            return res.status(500).json({message:"Something went wrong.please try again!"})
        }
    }
}

export default ChatGroupController