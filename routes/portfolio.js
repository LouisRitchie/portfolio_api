const express = require('express');

module.exports = dbClient => {
  const router = express.Router();

  router.get('/items', function(req, res, next) {
    res.send('respond with a resource');
  });

  router.get('/curated_list/:slug', function(req, res, next) {
    res.send('respond with a resource');
  });

  router.get('/items/:slug', function(req, res, next) {
    res.send('respond with a resource');
  });

  router.post('/items/new', function(req, res, next) {
    res.send('respond with a resource');
  });

  router.post('/items/:slug/update', function(req, res, next) {
    res.send('respond with a resource');
  });

  return router
}
