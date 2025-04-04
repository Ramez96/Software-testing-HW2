const { describe, it } = require('node:test');
const assert = require('assert');
const Calc  = require('./Calc');


describe('Calc', () => {
    it('should add two numbers', () => {
        const result = Calc.add(2, 3);
        assert.strictEqual(result, 5);
    });

    it('should add negative numbers', () => {
        const result = Calc.add(-2, -3);
        assert.strictEqual(result, -5);
    });
    
    it('should add zero', () => {
        const result = Calc.add(0, 0);
        assert.strictEqual(result, 0);
    });

    it('should subtract two numbers', () => {
        const result = Calc.subtract(5, -3);
        assert.strictEqual(result, 8);
    });
    it('should subtract negative numbers', () => {
        const result = Calc.subtract(-5, -3);
        assert.strictEqual(result, -2);
    });
    it('should subtract zero', () => {
        const result = Calc.subtract(0, 0);
        assert.strictEqual(result, 0);
    });
    it('should subtract from zero', () => {
        const result = Calc.subtract(0, 5);
        assert.strictEqual(result, -5);
    });
    
    it('should multiply two numbers', () => {
        const result = Calc.multiply(2, 3);
        assert.strictEqual(result, 6);
    });
    it('should multiply negative numbers', () => {
        const result = Calc.multiply(-2, -3);
        assert.strictEqual(result, 6);
    });
    it('should multiply by zero', () => {
        const result = Calc.multiply(0, 5);
        assert.strictEqual(result, 0);
    });
    it('should divide two numbers', () => {
        const result = Calc.divide(6, 3);
        assert.strictEqual(result, 2);
    });
    it('should divide integer and floating point numbers', () => {
        const result = Calc.divide(5, 2.3);
        const expected = 5 / 2.3;
        const delta = 0.000001;

        assert.ok(Math.abs(result - expected) < delta);
    });

    it('should divide negative numbers', () => {
        const result = Calc.divide(-6, -3);
        assert.strictEqual(result, 2);
    });
    it('should divide by zero', () => {
        assert.throws(() => {
            Calc.divide(5, 0);
        }, {
            name: 'Error',
            message: 'Division by zero is not allowed'
        });
    });
    it('should divide zero', () => {
        const result = Calc.divide(0, 5);
        assert.strictEqual(result, 0);
    });
    it('should divide by negative number', () => {
        const result = Calc.divide(6, -3);
        assert.strictEqual(result, -2);
    });

});




