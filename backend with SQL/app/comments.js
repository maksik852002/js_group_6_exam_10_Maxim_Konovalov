const express = require("express");
const mysqlDb = require("../mysqlDb");
const router = express.Router();

router.get("/", async (req, res) => {
  let result;
  if (req.query.news_id) {
    result = await mysqlDb.getConnection().query(`SELECT * FROM newsApp.comments WHERE \`${Object.keys(req.query)}\` = ?`, req.query.news_id);
  } else {
    result = await mysqlDb.getConnection().query(`SELECT * FROM newsApp.comments`);
  }
  res.send(result);
});

router.post("/", async (req, res) => {
  
  const response = req.body;
  if (!response.comment || response.comment === '' || !response.news_id || response.news_id ==='') {
    res.status(400).send({ error: "Required fields must be present in the request!" });
  } else {
    if (!response.author || response.author === '') {response.author = "Anonymous"}
    const fields = Object.keys(response)
    const resFields = fields.map(el => response[el]);
    const values = fields.map(el => el = '?');
    let result;
    try {
      result = await mysqlDb.getConnection().query(`INSERT INTO newsApp.comments (${fields.join(', ')}) VALUES (${values.join(', ')})`, resFields);
    } catch (e) {
      e.errno === 1452
      ? res.status(400).send({ error: `Cannot add or update a child row, news with id ${response.news_id} not found` })
      : res.status(400).send({ error: e.sqlMessage });
    }
    const request = await mysqlDb.getConnection().query(`SELECT * FROM newsApp.comments  WHERE id = ${result.insertId}`);
    res.send(request[0]);
  }
});

router.delete("/:id", async (req, res) => {
  let request = await mysqlDb.getConnection().query(`SELECT * FROM newsApp.comments  WHERE id = ${req.params.id}`);
  if (request.length === 0) {
    res.status(404).send({error: 'Not found'});
  } else {
    try {
      await mysqlDb.getConnection().query(`DELETE FROM newsApp.comments WHERE id = ${req.params.id}`);
      res.send('Row with id - ' + req.params.id + ' in table - comments was deleted.')
    } catch (e) {
      res.status(400).send({ error: e.sqlMessage });
    }
  };
});

module.exports = router;
