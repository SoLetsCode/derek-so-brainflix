const express = require("express");
const router = express.Router();

const videosFile = __dirname + "/../../models/videos.json";
const videosJSON = require(videosFile);

//get list of videos
router.get("/", (req, res) => {
  res.json({ videosJSON });
});

//get specific video using :id
router.get("/:id", (req, res) => {
  res.send(`you want video with the id ${req.params.id}`);
});

module.exports = router;
