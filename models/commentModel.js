const mongoose = require('mongoose');
const validator = require('validator');

const commentSchema = mongoose.Schema({
  message: {
    type: String,
    required: [true, 'A message must be written']
  },
  likes: {
    type: Number,
    default: 0
  },
  dislike: {
    type: Number,
    default: 0
  },
  commentDate: {
    type: Date,
    default: Date.now()
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'A comment must belong to a user']
  }
})

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;