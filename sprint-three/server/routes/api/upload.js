const express = require("express");
const router = express.Router();

const videosFile = __dirname + "/../../models/video.json";
const videos = require(videosFile);
