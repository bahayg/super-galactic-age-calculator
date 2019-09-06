import $ from 'jquery';
export class Age {
  constructor(earth, mercury, venus, mars, jupiter) {
    this.earth = earth,
    this.mercury = mercury;
    this.venus = venus;
    this.mars = mars;
    this.jupiter = jupiter;
  }
    let inputtedAge = $("#age").val();
    let inputtedLifeExpectancy = $("#life-expectancy").val();
    const calcLeftEarthYears = inputtedLifeExpectancy-inputtedAge;

  earthAge() {
    return calcLeftEarthYears;
  }
  mercuryAge() {
    return (inputtedAge/0.24, (calcLeftEarthYears)/0.24);
  }
  venusAge() {
    return (inputtedAge/0.62, (calcLeftEarthYears)/0.62);
  }
  marsAge() {
    return (inputtedAge/1.88, (calcLeftEarthYears)/1.88);
  }
  jupiterAge() {
    return (inputtedAge/11.86, (calcLeftEarthYears)/11.86);
  }
});
