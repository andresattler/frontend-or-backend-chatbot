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
    return _responses.questions[currentState];
  }
  if (userAnswer === 'no') {
    return _responses.questions[currentState];
  }
  return _responses.notUnderstood;
}

exports.default = talk;