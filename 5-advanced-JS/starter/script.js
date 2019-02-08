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
/*
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
*/

//Primitives vs objects

//Primitives
// var a = 23;
// var b = a;
// a = 46;
// console.log(a);
// console.log(b);
// //Objects
// var obj1 = {
//   name: "John",
//   age: 26
// };
// var obj2 = obj1;
// obj1.age = 30;
// console.log(obj1.age);
// console.log(obj2.age);
// //Functions
// var age = 27;
// var obj = {
//   name: "Jonas",
//   city: "Lisbon"
// };

// function change(a, b) {
//   age = 30;
//   b.city = "San Franscisco";
// }

// change(age, obj);

// console.log(age);
// console.log(obj.city);

////////////////////////////
// Lecture: Passing functions as arguements

// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {
//   var arrRes = [];
//   for (var i = 0; i < arr.length; i++) {
//     arrRes.push(fn(arr[i]));
//   }
//   return arrRes;
// }

// function calculateAge(el) {
//   return 2016 - el;
// }

// function isFullAge(el) {
//   return el >= 18;
// }

// function maxHeartRate(el) {
//   if (el >= 18 && el <= 81) {
//     return Math.round(206.9 - 0.67 * el);
//   } else {
//     return -1;
//   }
// }

// var ages = arrayCalc(years, calculateAge);
// var fullAges = arrayCalc(ages, isFullAge);
// var rates = arrayCalc(ages, maxHeartRate);

// console.log(ages);
// console.log(rates);

//////////////////////////////////
//Functions returning functions

// function interviewQuestion(job) {
//   if (job === "designer") {
//     return function(name) {
//       console.log(name + ", can you please explain what UX design is?");
//     };
//   } else if (job === "teacher") {
//     return function(name) {
//       console.log("What subject do you teach, " + name + "?");
//     };
//   } else {
//     return function(name) {
//       console.log("Hello " + name + ", what do you do?");
//     };
//   }
// }

// var teacherQuestion = interviewQuestion("teacher");
// var designerQuestion = interviewQuestion("designer");

// teacherQuestion("John");
// designerQuestion("John");
// designerQuestion("Jane");
// designerQuestion("Mark");
// designerQuestion("Mike");

// interviewQuestion("")("Jonny");

// IIFE

// function game() {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// }

(function() {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();

(function(goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);
