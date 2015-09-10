define('mu.dom.import', function (require) {
  'use strict';

  var partial = require('mu.fn.partial'),
      request = require('request'),
      html    = require('mu.dom.html');

  var import = function (node, url) {
    request(url).get()
    .on('response', partial(html, node));
  };

  return import;
});
