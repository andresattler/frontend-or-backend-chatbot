'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var welcomeMessage = exports.welcomeMessage = 'Welcome can I help yout of find out if You are more the frontend guy or more a backend evangelists!?';

var notUnderstood = exports.notUnderstood = 'Sory I could not understand you';

var rejectionMessage = exports.rejectionMessage = 'Ok then not :) I wish you a nice day!';

var questions = exports.questions = [{ text: 'Do you like to create user intefaces? ', weight: 1 }, { text: 'Are you interested in complex algorythms processing data?', weight: -1 }, { text: 'Do you want to work with Databases?', weight: -1 }, { text: 'Do you like to visually create?', weight: 1 }];

var result = exports.result = function result(res) {
  return 'The data says that your probably mor a ' + res + ' guy \n but my personal opinion is that you should just pick a language and build stuff. \n I think that is the best way for evryone to find out!';
};