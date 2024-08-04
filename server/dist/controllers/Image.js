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
exports.addImage = void 0;
const fileUpload_1 = require("../utils/fileUpload");
const addImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // @ts-ignore
        // const image = req.files.image;
        const { image } = req.files;
        const { firstName } = req.body;
        console.log(firstName, "firstName");
        try {
            const upload = yield (0, fileUpload_1.uploadFile)(image.tempFilePath);
            console.log(upload, "upload");
            return res.status(200).json({
                message: "Image uploaded Successfully !",
                imageUrl: upload.secure_url
            });
        }
        catch (e) {
            console.log(e, "unalbe error");
        }
    }
    catch (e) {
        console.log(e, "error");
    }
});
exports.addImage = addImage;
