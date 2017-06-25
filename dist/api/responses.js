'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var welcomeMessage = exports.welcomeMessage = 'Welcome can I help yout of find out if You are more the frontend guy or more a backend evangelists!';

var notUnderstood = exports.notUnderstood = 'Sory I could not understand you';

var rejectionMessage = exports.rejectionMessage = 'Ok then not :) I wish you a nice day!';

var questions = exports.questions = [{ text: 'first question', weight: 1 }, { text: 'question 2', weight: 1 }, { text: 'question 3', weight: 1 }, { text: 'question 4', weight: 1 }, { text: 'question 5', weight: 1 }];

var result = exports.result = function result(res) {
  return 'I think you are more the ' + res + ' guy';
};