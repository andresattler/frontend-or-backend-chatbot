'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _responses = require('./responses');

function talk(currentState, messageText) {
  var userAnswer = messageText.toLowerCase();
  if (currentState === 0 && userAnswer === 'no') {
    return { text: _responses.rejectionMessage };
  }
  if (userAnswer === 'yes') {
    return {
      text: _responses.questions[currentState],
      next: true
    };
  }
  if (userAnswer === 'no') {
    return {
      text: _responses.questions[currentState],
      next: true
    };
  }
  return { text: _responses.notUnderstood };
}

exports.default = talk;