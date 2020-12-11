import express from "express";
import bodyParser from "body-parser";
import {FileAnalyzeRouter} from './routes/fileanalyse';
require('dotenv').config()
const fileUpload = require('express-fileupload');


const _ = require('lodash');
var cors = require("cors");
const app = express();

app.use(fileUpload({
  createParentPath: true
}))

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set('trust proxy',true); 
app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static(__dirname + '/public'));

app.use(FileAnalyzeRouter);


app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});



export { app };