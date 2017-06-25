'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _responses = require('./responses');

function talk(currentState, messageText) {
  var userAnswer = messageText.toLowerCase();
  if (currentState === 0 && userAnswer === 'no') {
    return _responses.rejectionMessage;
  }
  if (userAnswer === 'yes') {
    return _responses.questions[0];
  }
  if (userAnswer === 'no') {
    return _responses.questions[0];
  }
  return _responses.notUnderstood;
}

exports.default = talk;