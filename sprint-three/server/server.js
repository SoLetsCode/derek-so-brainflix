const express = require("express");
const app = express();

//routes
const videos = require("./routes/api/videos");
const upload = require("./routes/api/upload");

//middlware
const cors = require("cors");

//app.use(cors());
app.use(express.json());

app.use("/api/videos", videos);
app.use("/api/upload", upload);

app.listen(5000, () => console.log("server listening on port 5000"));
