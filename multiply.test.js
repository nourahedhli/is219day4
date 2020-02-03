

const multiply = require ('./multiply');

test('multiplying 3*3 to equal 9', () => {
    expect(multiply(3, 3)).toBe(9);
});