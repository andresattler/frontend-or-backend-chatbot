'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _responses = require('./responses');

function talk(currentState, messageText, total) {
  var userAnswer = messageText.toLowerCase();
  if (currentState === 0 && userAnswer === 'no') {
    return {
      text: _responses.rejectionMessage,
      type: 'END'
    };
  }
  if (currentState === _responses.questions.length) {
    return {
      text: total > 0 ? (0, _responses.result)('backend') : (0, _responses.result)('frontend'),
      type: 'END'
    };
  }
  if (userAnswer === 'yes') {
    return {
      text: _responses.questions[currentState].text,
      type: 'QUESTION',
      weight: _responses.questions[currentState].weight
    };
  }
  if (userAnswer === 'no') {
    return {
      text: _responses.questions[currentState].text,
      type: 'QUESTION',
      weight: -_responses.questions[currentState].weight
    };
  }
  return {
    text: _responses.notUnderstood,
    type: 'NOTUNDERSTOOD'
  };
}

exports.default = talk;