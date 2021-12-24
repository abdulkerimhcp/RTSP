const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.set("view engine", "ejs");
app.set("views", "./app/views");

app.use(express.static(__dirname + "/public"));

const db = require("./app/models");
db.sequelize.sync();

require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/index.routes")(app);

const Stream = require("node-rtsp-stream");
stream = new Stream({
  name: "name",
  streamUrl: "rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov",
  wsPort: 9999,
  ffmpegOptions: {
    "-stats": "",
    "-r": 30,
  },
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}.`);
});
