const path = require("path");

const express = require("express");
const multer = require("multer");
const nanoid = require("nanoid");

const mysqlDb = require("../mysqlDb");

const config = require("../config");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, config.uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, nanoid() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

const router = express.Router();

router.get("/", async (req, res) => {
  const result = await mysqlDb.getConnection().query('SELECT `id`, `title`, `image`, `date` FROM newsApp.news');
  res.send(result);
});

router.get("/:id", async (req, res) => {
  const response = await mysqlDb.getConnection().query('SELECT * FROM newsApp.news WHERE `id` = ?', req.params.id);
  const result = response[0]
  !result
  ? res.status(404).send({error: 'Not found'})
  : res.send(result);
});

router.post("/", upload.single("image"), async (req, res) => {
  const response = req.body;
  if (!response.title || response.title === '' || !response.news_body || response.news_body === '') {
    res.status(400).send({ error: "Required fields must be present in the request!" });
  } else {
    req.file ? response.image = req.file.filename : response.image = null;
    const fields = Object.keys(response)
    const resFields = fields.map(el => response[el]);
    let result;
    try {
      result = await mysqlDb.getConnection().query(`INSERT INTO newsApp.news (${fields.join(', ')}) VALUES (?, ?, ?, ?)`, resFields);
    } catch (e) {
      res.status(400).send({ error: e.sqlMessage });
    }
    const request = await mysqlDb.getConnection().query(`SELECT * FROM newsApp.news  WHERE id = ${result.insertId}`);
    res.send(request[0]);
  }
});

router.delete("/:id", async (req, res) => {
  let request = await mysqlDb.getConnection().query(`SELECT * FROM newsApp.news  WHERE id = ${req.params.id}`);
  if (request.length === 0) {
    res.status(404).send({error: 'Not found'});
  } else {
    try {
      await mysqlDb.getConnection().query(`DELETE FROM newsApp.news WHERE id = ${req.params.id}`);
      res.send('Row with id - ' + req.params.id + ' in table - news was deleted.')
    } catch (e) {
      res.status(400).send({ error: e.sqlMessage });
    }
  };
});

module.exports = router;
