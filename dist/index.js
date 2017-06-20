'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _recievedMessage = require('./api/recieved-message');

var _recievedMessage2 = _interopRequireDefault(_recievedMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());

app.get('/webhook', function (req, res) {
  if (req.query['hub.verify_token'] === 'advekcw4t93409tuqw') {
    res.status(200).send(req.query['hub.challenge']);
  } else {
    res.sendStatus(403);
  }
});

app.post('/webhook', function (req, res) {
  var data = req.body;
  if (data.object === 'page') {
    data.entry.forEach(function (entry) {
      entry.messaging.forEach(function (event) {
        if (event.message) {
          (0, _recievedMessage2.default)(event);
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