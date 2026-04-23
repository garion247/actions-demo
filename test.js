const { add, multiply } = require('./app');

let passed = 0;
let failed = 0;

function test(name, condition) {
    if (condition) {
        console.log(`  PASS: ${name}`);
        passed++;
    } else {
        console.log(`  FAIL: ${name}`);
        failed++;
    }
}

console.log('Running tests...\n');
test('add(2, 3) equals 5', add(2, 3) === 5);
test('add(-1, 1) equals 0', add(-1, 1) === 0);
test('multiply(3, 4) equals 12', multiply(3, 4) === 12);
test('multiply(0, 5) equals 0', multiply(0, 5) === 0);

console.log(`\nResults: ${passed} passed, ${failed} failed`);

const { subtract } = require('./app');
test('subtract(5, 3) equals 2', subtract(5, 3) === 2);
test('subtract(0, 0) equals 0', subtract(0, 0) === 0);

const { divide } = require('./app');
test('divide(10, 2) equals 5', divide(10, 2) === 5);
process.exit(failed === 0 ? 0 : 1);

const { power, clamp } = require('./app');
test('power(2, 3) equals 8', power(2, 3) === 8);
test('power(5, 0) equals 1', power(5, 0) === 1);
test('clamp(5, 1, 10) equals 5', clamp(5, 1, 10) === 5);
test('clamp(0, 1, 10) equals 1', clamp(0, 1, 10) === 1);
test('clamp(15, 1, 10) equals 10', clamp(15, 1, 10) === 10);
