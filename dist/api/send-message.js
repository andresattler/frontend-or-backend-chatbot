'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var token = process.env.FB_PAGE_ACCESS_TOKEN;

function sendTextMessage(recipientId) {
  (0, _request2.default)({
    uri: 'https://graph.facebook.com/v2.6/me/messages',
    qs: { access_token: token },
    method: 'POST',
    json: {
      recipient: {
        id: recipientId
      },
      message: {
        text: 'Hello World!'
      }
    }
  }, function (error, response) {
    if (error) {
      // eslint-disable-next-line no-console
      console.error('Error sending messages: ', error);
    } else if (response.body.error) {
      // eslint-disable-next-line no-console
      console.error('Error: ', response.body.error);
    }
  });
}

exports.default = sendTextMessage;