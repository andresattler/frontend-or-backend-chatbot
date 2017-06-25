'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _sendMessage = require('./send-message');

var _sendMessage2 = _interopRequireDefault(_sendMessage);

var _responses = require('./responses');

var _talk = require('./talk');

var _talk2 = _interopRequireDefault(_talk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = _mongoose2.default.model('User', {
  _id: String,
  current_state: Number
});

function receivedMessage(event) {
  var senderID = event.sender.id;
  var messageText = event.message.text;

  if (messageText) {
    User.findById(senderID, function (err, userObj) {
      if (userObj) {
        var answer = (0, _talk2.default)(userObj.current_state, messageText);
        var nextState = userObj.current_state + 1;
        console.log({ _id: senderID }, { current_state: nextState });
        User.update({ _id: senderID }, { current_state: nextState }, function (updateErr, user) {
          console.log(user);
        }).exec();
        (0, _sendMessage2.default)(senderID, answer);
      } else {
        var user = new User({
          _id: senderID,
          current_state: 0
        });
        user.save();
        (0, _sendMessage2.default)(senderID, _responses.welcomeMessage);
      }
    });
  }
}

exports.default = receivedMessage;