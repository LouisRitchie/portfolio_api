const express = require('express');

module.exports = dbClient => {
  const router = express.Router();

  router.get('/posts', function(req, res, next) {
    const text = 'SELECT p0."id", p0."title", p0."header_image", p0."raw_md", p0."slug", p0."inserted_at", p0."updated_at" FROM "posts" AS p0'
    const values = []

    dbClient.query(text, values)
      .then(dbRes => {
        res.send(JSON.stringify(dbRes.rows));
      })
      .catch(e => console.error(e.stack))
  });

  router.get('/posts/:slug', function(req, res, next) {
    const text = 'SELECT p0."id", p0."title", p0."header_image", p0."raw_md", p0."slug", p0."inserted_at", p0."updated_at" FROM "posts" AS p0 WHERE (p0."slug" = $1)'
    const values = ["home"]

    dbClient.query(text, values)
      .then(dbRes => {
        res.send(JSON.stringify(dbRes.rows));
      })
      .catch(e => console.error(e.stack))
  });

  router.post('/posts/new', function(req, res, next) {
    res.send('respond with a resource');
  });

  router.post('/posts/:slug/update', function(req, res, next) {
    res.send('respond with a resource');
  });

  return router
}
