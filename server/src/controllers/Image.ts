import { Request, Response } from "express";
import { uploadFile } from "../utils/fileUpload";


export const addImage = async (req : Request, res : Response) => {
    try {
        // @ts-ignore
        // const image = req.files.image;
        const { image } = req.files;
        const {firstName} = req.body;
        console.log(firstName  , "firstName");
        
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