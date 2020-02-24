const Statistics = require('../Statistics');
const expect = require("expect");



test('calculating mean', () => {
    let a = [1,2];
    let Stats = new Statistics();
    let mean = Stats.Mean(a);

    expect(mean).toBe(1.5);
});

