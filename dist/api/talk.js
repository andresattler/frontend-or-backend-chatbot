'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _responses = require('./responses');

function talk(currentState, messageText) {
  var userAnswer = messageText.toLowerCase();
  if (currentState === 0 && userAnswer === 'no') {
    return {
      text: _responses.rejectionMessage,
      type: 'END'
    };
  }
  if (userAnswer === 'yes') {
    return {
      text: _responses.questions[currentState],
      type: 'QUESTION'
    };
  }
  if (userAnswer === 'no') {
    return {
      text: _responses.questions[currentState],
      type: 'QUESTION'
    };
  }
  return {
    text: _responses.notUnderstood,
    type: 'NOTUNDERSTOOD'
  };
}

exports.default = talk;