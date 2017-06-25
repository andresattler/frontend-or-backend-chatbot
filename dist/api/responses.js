'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var welcomeMessage = exports.welcomeMessage = 'Welcome can I help yout of find out if You are more the frontend guy or more a backend evangelists!?';

var notUnderstood = exports.notUnderstood = 'Sory I could not understand you';

var rejectionMessage = exports.rejectionMessage = 'Ok then not :) I wish you a nice day!';

var questions = exports.questions = [{ text: 'Do you like to ', weight: 1 }, { text: 'question 2', weight: 1 }, { text: 'question 3', weight: 1 }, { text: 'question 4', weight: 1 }, { text: 'question 5', weight: 1 }];

var result = exports.result = function result(res) {
  return 'The data says that your problay mor a ' + res + ' guy \n but my personal opinion is that you should just pick a language and build stuff. \n I think that is the best way for evryone to find out!';
};