const express = require("express");
const router = express.Router();

const videosFile = __dirname + "/../../models/video.json";
const videos = require(videosFile);

//get list of videos
router.get("/", (req, res) => {
  let videoList = videos.map(video => {
    return {
      id: video.id,
      title: video.title,
      channel: video.channel,
      image: video.image
    };
  });
  res.json(videoList);
});

//get specific video using :id
router.get("/:id", (req, res) => {
  let videoId = videos.filter(video => video.id === req.params.id);

  console.log(videoId);

  if (videoId.length === 0) {
    res
      .status(400)
      .json({ errorMesssage: `book with id ${req.params.id} not found` });
  }

  res.json(videoId);
});

module.exports = router;
