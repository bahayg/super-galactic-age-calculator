/* eslint-disable */
export class Age {
  constructor(ageEntered, lifeExpectancy) {
    this.ageEntered = ageEntered;
    this.lifeExpectancy = lifeExpectancy;
  }

  earthAge() {
    return this.lifeExpectancy - this.ageEntered;
  }
  mercuryAge() {
    return [this.ageEntered/0.24, this.earthAge()/0.24];
  }
  venusAge() {
    return [this.ageEntered/0.62, this.earthAge()/0.62];
  }
  marsAge() {
    return [this.ageEntered/1.88, this.earthAge()/1.88];
  }
  jupiterAge() {
    return [this.ageEntered/11.86, this.earthAge()/11.86];
  }
}
