'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var token = process.env.FB_PAGE_ACCESS_TOKEN;

app.use(_bodyParser2.default.json());

app.get('/webhook', function (req, res) {
  if (req.query['hub.verify_token'] === 'advekcw4t93409tuqw') {
    res.status(200).send(req.query['hub.challenge']);
  } else {
    res.sendStatus(403);
  }
});

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

function receivedMessage(event) {
  var senderID = event.sender.id;
  var messageText = event.message.text;

  if (messageText) {
    sendTextMessage(senderID);
  }
  // Putting a stub for now, we'll expand it in the following steps
  // eslint-disable-next-line no-console
  console.log('Message data: ', event.message);
}

app.post('/webhook', function (req, res) {
  var data = req.body;
  // Make sure this is a page subscription
  if (data.object === 'page') {
    // Iterate over each entry - there may be multiple if batched
    data.entry.forEach(function (entry) {
      // const pageID = entry.id
      // const timeOfEvent = entry.time

      // Iterate over each messaging event
      entry.messaging.forEach(function (event) {
        if (event.message) {
          receivedMessage(event);
        } else {
          // eslint-disable-next-line no-console
          console.log('Webhook received unknown event: ', event);
        }
      });
    });
    res.sendStatus(200);
  }
});

app.listen(process.env.PORT || 8000);