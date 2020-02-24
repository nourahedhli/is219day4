const Statistics = require('../Statistics');
const expect = require("expect");



test('calculating mean', () => {
    let a = [1,2];
    let Stats = new Statistics();
    let mean = Stats.Mean(a);

    expect(mean).toBe(1.5);
});

test('calculating variance', () => {
    let a = 1;
    let b = 2
    let Stats = new Statistics();
    let variance = Stats.Variance(a,b);

    expect(variance).toBe(-1);
});
