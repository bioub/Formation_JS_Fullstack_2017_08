const assert = require('assert');
const calc = require('./calc');

assert.strictEqual(calc.addition(1, 2), 3);
assert.strictEqual(calc.addition(-1, -2), -3);
assert.strictEqual(calc.addition(-1, 2), 1);

assert.strictEqual(calc.multiplication(2, 3), 6);
