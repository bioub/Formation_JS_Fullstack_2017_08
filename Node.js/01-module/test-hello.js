const assert = require('assert');
const hello = require('./hello');

assert.strictEqual(hello('Romain'), 'Bonjour Romain');