import { Request, Response } from "express";
import { uploadFile } from "../utils/fileUpload";
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export const addImage = async (req : Request, res : Response) => {
    try {
        // @ts-ignore
        // const image = req.files.image;
        const { image } = req.files;
        console.log("image" , image)
        const format = image.name.split(".")[1];
        console.log(format , "format");
        
        // const {firstName} = req.body;
        // console.log(firstName  , "firstName"); //dont know why firstName is undefined
        const supportedTypes = ["jpg", "jpeg", "png"];
        if(!supportedTypes.includes(format)){
            return res.status(400).json({
                message : "Invalid Image Format !"
            })
        }
        try {
            const upload = await uploadFile(image.tempFilePath)
            console.log(upload , "upload");
            await prisma.image.create({
                data : {
                    imageUrl : upload.secure_url
                }
            })
            return res.status(200).json({
                message : "Image uploaded Successfully !",
                imageUrl : upload.secure_url
            })

         
            
        } catch (e) {
            console.log(e ,"unalbe error");
            
        }
    } catch (e) {
        console.log(e , "error");   
    }
}