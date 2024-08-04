import { Request, Response } from "express";
import { uploadFile } from "../utils/fileUpload";


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
        supportedTypes.map(resp => {
            if(resp !== format) {
                return res.status(400).json({
                    message : "Invalid Image Format !"
                })
            }
        })
        try {
            const upload = await uploadFile(image.tempFilePath)
            console.log(upload , "upload");
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