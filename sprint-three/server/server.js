const express = require("express");
const app = express();

//routes
const videos = require("./routes/api/videos");
const upload = require("./routes/api/upload");

app.use("/api/videos", videos);

app.listen(5000, () => console.log("server listening on port 5000"));
