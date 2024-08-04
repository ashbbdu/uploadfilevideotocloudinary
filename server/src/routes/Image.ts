import express from "express";
import { addImage } from "../controllers/Image";
const router = express.Router();


router.post("/uploadImage" , addImage)

export default router;

