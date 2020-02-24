const Calculator = require('./Calculator');
//const MathOperation = require('./Calculator');

class Statistics extends Calculator {
// we using this by extending calculator

    Variance (a,b) {

        return this.Subtract(a,b);

    }
    // either we want to use this directly from calculator or we can just use Math Operation
    //which ever we want

    // VarianceV2 (a,b) {
        //return this.result = MathOperation.subtract(a,b);


    //}


    Mean (valuess){

        let sum = this.Add(valuess);
        let numValues = valuess.length;
        return this.Divide(sum,numValues);


    }

}

module.exports =Statistics;

