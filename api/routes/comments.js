var express = require('express');
const { post } = require('.');
var router = express.Router();

let comments = [];

/* GET Comments. */
router.get('/', function(req, res, next) {
  res.json({comments: comments });
});

/*POST Comments */
router.post('/', function(req, res, next) {
    comments = [...comments, req.body.newComment];
    res.json({comments: comments});
  });

module.exports = router;
