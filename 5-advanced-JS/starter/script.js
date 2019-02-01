// Function constructor
/*
var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};
//prototype added to constructor
Person.prototype.calculateAge = function() {
  console.log(2016 - this.yearOfBirth);
};
//instantiation, creating instances
var john = new Person("John", 1990, "teacher");
var jane = new Person("Jane", 1969, "designer");
var mark = new Person("Mark", 1948, "retired");
//executing code
// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();
//-----------------try on own now
var Car = function(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
};

Car.prototype.age = function() {
  console.log(Car.prototype);
  console.log(2019 - this.year);
};

var corvette = new Car("Chevrolet", "Corvette", 2010);
var mustang = new Car("Ford", "Mustang", 1969);

// corvette.age();
// mustang.age();
*/

//Object.create
var personProto = {
  calculateAge: function() {
    console.log(2016 - this.yearOfBirth);
  }
};

var john = Object.create(personProto);
john.name = "John";
john.yearOfBirth = 1990;
john.job = "teacher";

var jane = Object.create(personProto, {
  name: { value: "Jane" },
  yearOfBirth: { value: 1969 },
  job: { value: "designer" }
});
