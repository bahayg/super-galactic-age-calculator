import { Age } from './super-galactic-age-calculator.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $(".form-group").submit(function(event) {
    event.preventDefault();

    let inputtedAge = $("#entered-age").val();
    let inputtedLifeExpectancy = $("#life-expectancy").val();
    let newAge = new Age(inputtedAge, inputtedLifeExpectancy);

    $("#earth-age").text("You have " + newAge.earthAge() + " more years to live on earth!");
    $("#mercury-age").text("Your age in mercury years and years left to live on mercury are: " + newAge.mercuryAge());
    $("#venus-age").text("Your age in venus years and years left to live on venus are: " + newAge.venusAge());
    $("#mars-age").text("Your age in mars years and years left to live on mars are: " + newAge.marsAge());
    $("#jupiter-age").text("Your age in jupiter years and years left to live on jupiter are: " + newAge.jupiterAge());

  });
});
