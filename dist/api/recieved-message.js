'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _sendMessage = require('./send-message');

var _sendMessage2 = _interopRequireDefault(_sendMessage);

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
        (0, _sendMessage2.default)(senderID, 'mongodb rocks!');
      } else {
        var user = new User({
          _id: event.sender.id,
          current_state: 0
        });
        user.save();
        (0, _sendMessage2.default)(senderID, 'Welcome new User!');
      }
    });
  }
  // Putting a stub for now, we'll expand it in the following steps
  // eslint-disable-next-line no-console
  console.log('Message data: ', event.message);
}

exports.default = receivedMessage;