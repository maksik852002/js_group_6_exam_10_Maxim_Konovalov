const express = require("express");
const cors = require("cors");
const mysqlDb = require('./mysqlDb');

const comments = require("./app/comments");
const news = require("./app/news");

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());
app.use(express.static("public"));
app.use("/comments", comments);
app.use("/news", news);


const run = async () => {

  await mysqlDb.connect();

  app.listen(port, () => {
    console.log("Listening on port " + port);
  });

  process.on('exit', () => {
    mysqlDb.disconnect();
  })
};

run().catch(e => {
  console.log(e);
});
