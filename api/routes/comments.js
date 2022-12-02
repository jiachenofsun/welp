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

  // requires author, message, timestamp
    comments = [{author: req.body.author, message:req.body.message, timestamp:req.body.timestamp, upvotes: 0, downvotes: 0}, ...comments];
    res.json({comments: comments});
});

router.post('/upvote/', function(req, res, next) {
  // should receive dining hall, time, and food item name
  const author = req.body.author;
  const timestamp = req.body.timestamp;
  
  for (let comment of comments) {
    if (comment.author === author && comment.timestamp == timestamp) {
      comment.upvotes++;
      break;
    }
  }
  res.json({comments: comments});
});

router.post('/downvote/', function(req, res, next) {
  // should receive dining hall, time, and food item name
  const author = req.body.author;
  const timestamp = req.body.timestamp;
  
  for (let comment of comments) {
    if (comment.author === author && comment.timestamp == timestamp) {
      comment.upvotes--;
      break;
    }
  }
  res.json({comments: comments});
});

module.exports = router;
