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

  // requires author, message, timestamp, and upvotes, downvotes
    comments = [...comments, {author: req.body.author, messsage:req.body.message, timestamp:req.body.timestamp, upvotes: 0, downvotes: 0}];
    res.json({comments: comments});
  });

module.exports = router;
