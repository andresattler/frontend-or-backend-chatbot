'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.get('/webhook', function (req, res) {
  if (req.query['hub.mode'] === 'subscribe' && req.query['hub.verify_token'] === 'advekcw4t93409tuqw') {
    // eslint-disable-next-line no-console
    console.log('Validating webhook');
    res.status(200).send(req.query['hub.challenge']);
  } else {
    // eslint-disable-next-line no-console
    console.error('Failed validation. Make sure the validation tokens match.');
    res.sendStatus(403);
  }
});
app.listen(process.env.PORT || 8000

// tocken advekcw4t93409tuqw
);