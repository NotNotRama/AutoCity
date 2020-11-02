const mongoose = require('mongoose');

const Todo = mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  todo: {
    type: Boolean,
    required: true,
    default: true,
  },
  inProgress: {
    type: Boolean,
    required: true,
    default: false,
  },
  done: {
    type: Boolean,
    required: true,
    default: false,
  },
  deleted: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = mongoose.model('Todo', Todo);
