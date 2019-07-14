var express = require('express');
var router = express.Router();

router.get('/posts', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/posts/:slug', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/posts/new', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/posts/:slug/update', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
