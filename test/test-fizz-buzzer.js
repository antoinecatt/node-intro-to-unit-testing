const expect = require('chai').expect;
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
  it('should retun fizz, buzz or fizzBuzz', function() {
    const normalCases = [
      {a: 3, expected: 'fizz'},
      {a: 5, expected: 'buzz'},
      {a: 15, expected: 'fizz-buzz'},
      {a: 2, expected: 2}
    ];

    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.a);
      expect(answer).to.equal(input.expected);
    });

    it('should raise error if args not number', function() {
      const badInputs = [
        'a',
        true
      ];
      badInputs.forEach(input => {
        expect(() => fizzBuzzer(input));
      }).to.throw(Error);
    });
  });
});