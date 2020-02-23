

const Addition = require ('../addition');

test('adds 1 + 2 to equal 3', () => {
    expect(Addition.sum(1, 2)).toBe(3);
});