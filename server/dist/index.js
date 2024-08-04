"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Image_1 = __importDefault(require("./routes/Image"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
var bodyParser = require("body-parser");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = 4000;
app.use((0, express_fileupload_1.default)({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));
app.get("/", (req, res) => {
    res.send("App is up and running");
});
app.use("/api/v1", Image_1.default);
app.listen(PORT, () => {
    console.log(`App is running on PORT ${PORT} .`);
});
