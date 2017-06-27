'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var welcomeMessage = exports.welcomeMessage = 'Welcome can I help you of find out if You are more the frontend guy or more a backend evangelists!?';

var notUnderstood = exports.notUnderstood = 'Sorry I could not understand you';

var rejectionMessage = exports.rejectionMessage = 'Ok then not :) I wish you a nice day!';

var questions = exports.questions = [{ text: 'Do you like to create user interfaces? ', weight: 1 }, { text: 'Are you interested in complex algorithms processing data?', weight: -1 }, { text: 'Do you want to work with Databases?', weight: -1 }, { text: 'Do you like to visually create?', weight: 1 }];

var result = exports.result = function result(res) {
  return 'The data says that your probably more a ' + res + ' guy \n but my personal opinion is that you should just pick a language and build stuff. \n I think that is the best way for everyone to find out!';
};