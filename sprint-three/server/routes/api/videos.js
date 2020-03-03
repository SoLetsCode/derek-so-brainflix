const express = require("express");
const router = express.Router();
const helper = require("../../helper/writeToJSON");

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

  if (videoId.length === 0) {
    res
      .status(400)
      .json({ errorMesssage: `video with id ${req.params.id} not found` });
  }

  res.json(videoId[0]);
});

//post comment on video
router.post("/:id/comment", (req, res) => {
  let videoId = videos.filter(video => video.id === req.params.id);
  let comment = {
    name: "mega gru",
    comment: req.body.comment,
    id: helper.getNewId(),
    likes: 0,
    timestamp: Date.now()
  };

  if (videoId.length === 0) {
    res
      .status(400)
      .json({ errorMesssage: `video with id ${req.params.id} not found` });
  } else {
    videoId[0].comments.unshift(comment);
    helper.writeJSONFile(videosFile, videos);
    res.json(comment);
  }
});

module.exports = router;
