'use strict';

var table = document.getElementById('table_content');
var data = [];
var cars = [];

function Car(make, model, year, mileage) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.mileage = mileage;
}

var toyota = new Car('toyota', 'corrolla', 1988, 213000);
var honda = new Car('honda', 'accord', 2012, 110000);
var ford = new Car('ford', 'escort', 1993, 123000);

cars.push(toyota);
cars.push(honda);
cars.push(ford);

for (var i = 0; i < cars.length; i++) {
  data.push(
    '<td>' + cars[i].make + '</td>' +
    '<td>' + cars[i].model + '</td>' +
    '<td>' + cars[i].year + '</td>' +
    '<td>' + cars[i].mileage + '</td>'
  )
}

var newRow;

for (var j = 0; j < data.length; j++) {
  newRow = document.createElement('tr');
  newRow.innerHTML = data[j];
  table.appendChild(newRow);
}
