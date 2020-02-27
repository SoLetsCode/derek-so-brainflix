const express = require("express");
const router = express.Router();
const helper = require("../../helper/writeToJSON");

const videosFile = __dirname + "/../../models/video.json";
const videos = require(videosFile);

router.post("/", (req, res) => {
  const newVideo = {
    id: helper.getNewId(),
    title: req.body.title,
    channel: req.body.channel,
    image: req.body.image,
    description: req.body.description,
    views: 0,
    likes: 0,
    duration: "4:42",
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: Date.now(),
    comments: []
  };

  if (!newVideo.title || !newVideo.description) {
    return res.status(400).json({
      errorMessage: "Please provide title and/or description, for the video"
    });
  }

  videos.push(newVideo);
  helper.writeJSONFile(videosFile, videos);
  res.json(newVideo);
});

module.exports = router;
