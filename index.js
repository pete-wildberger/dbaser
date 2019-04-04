'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./lib/dbaser.production.min.js');
} else {
  module.exports = require('./lib/dbaser.dev.js');
}
