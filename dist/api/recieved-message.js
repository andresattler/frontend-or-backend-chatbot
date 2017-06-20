'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sendMessage = require('./send-message');

var _sendMessage2 = _interopRequireDefault(_sendMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function receivedMessage(event) {
  var senderID = event.sender.id;
  var messageText = event.message.text;

  if (messageText) {
    (0, _sendMessage2.default)(senderID);
  }
  // Putting a stub for now, we'll expand it in the following steps
  // eslint-disable-next-line no-console
  console.log('Message data: ', event.message);
}

exports.default = receivedMessage;