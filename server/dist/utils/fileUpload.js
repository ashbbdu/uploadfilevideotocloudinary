"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFile = void 0;
const cloudinary_1 = require("cloudinary");
const uploadFile = (image) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("reached Here");
    cloudinary_1.v2.config({
        cloud_name: 'dkthux2tp',
        api_key: '969723584694827',
        api_secret: 'AZ4uH8UXJoIikR_HMpbN689vqQQ'
    });
    const uploadResult = yield cloudinary_1.v2.uploader
        .upload(image, { resource_type: "image", public_id: "cutepics" });
    console.log(uploadResult, "upload result");
    return uploadResult;
});
exports.uploadFile = uploadFile;
