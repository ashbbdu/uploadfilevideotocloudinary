import express, { Request, Response }  from "express";
import imageRoutes from "./routes/Image"
import fileUpload from "express-fileupload"
var bodyParser = require("body-parser");



const app = express();
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const PORT = 4000;

app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}))

app.get("/" , (req ,res) => {
    res.send("App is up and running")
})

app.use("/api/v1" , imageRoutes )

app.listen(PORT ,() => {
    console.log(`App is running on PORT ${PORT} .`)
})

