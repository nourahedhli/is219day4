const addition = require('./addition');
const product = require('./product');
const divide = require('./divide');
const square = require('./square');
const subtract = require('./subtract');
const square_root = require('./square_root');


class MathOperation {

    static sum(a = null, b = null) {
        if (Array.isArray(a)) {
            return addition.sum(a)
        } else {
            return addition.sum(a, b)
        }


    }

    static subtract(a, b) {
        return subtract(a, b);


    }

    static product(a, b) {
        return product (a, b);
    }

    static divide(a, b) {
        return divide(a, b);

    }

    static square_root(a) {
        return square_root(a)

    }

    static square(a) {
        return square(a)
    }
}

module.exports = MathOperation;