'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.get('/webhook', function (req, res) {
  res.send('hello World');
});

app.listen(process.env.PORT || 8000

// tocken advekcw4t93409tuqw
);