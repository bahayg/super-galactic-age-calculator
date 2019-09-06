import { Age } from './../src/super-galactic-age-calculator.js';

describe('Age', function() {
    let testAge = new Age(35, 80);
    it('earthAge function should return 45', function() {
      expect(testAge.earthAge()).toEqual(45);
    });
    it('mercuryAge function should return 145.83333333333334,187.5', function() {
      expect(testAge.mercuryAge()).toEqual[145.83333333333334,187.5];
    });
    it('venusAge function should return 56.45161290322581,72.58064516129032', function() {
      expect(testAge.venusAge()).toEqual[56.45161290322581,72.58064516129032];
    });
    it('marsAge function should return 18.617021276595747,23.93617021276596', function() {
      expect(testAge.marsAge()).toEqual[18.617021276595747,23.93617021276596];
    });
    it('jupiterAge function should return 2.9510961214165263,3.794266441821248', function() {
      expect(testAge.jupiterAge()).toEqual[2.9510961214165263,3.794266441821248];
    });
});
