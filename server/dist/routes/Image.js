"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Image_1 = require("../controllers/Image");
const router = express_1.default.Router();
router.post("/uploadImage", Image_1.addImage);
exports.default = router;
