import { v2 as cloudinary } from 'cloudinary'

export const uploadFile = async (image : any) => {
console.log("reached Here");

    cloudinary.config({ 
        cloud_name: 'dkthux2tp', 
        api_key: '969723584694827', 
        api_secret: 'AZ4uH8UXJoIikR_HMpbN689vqQQ'
      });

  const uploadResult = await cloudinary.uploader
    .upload(image,  
      {resource_type: "image", public_id: "cutepics"});
    
      console.log(uploadResult , "upload result");
      return uploadResult;
}

    