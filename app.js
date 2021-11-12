const path = require("path");
const express = require("express");
const app = express();

app.use(express.static(path.join(__dirname)));
app.use("/css", express.static(__dirname));
app.use("img", express.static(__dirname + "/img"));
app.use("/js", express.static(__dirname + "/js"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(process.env.PORT || 3000);
