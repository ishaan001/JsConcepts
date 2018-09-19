//alert('Hello');
// log to console
console.log('Hello world'); //string
console.log(123); //number
console.log(true); // boolean
var greeting = "hello";
console.log(greeting); // variables
console.log([1,2,3,4,5]); // array
console.log({a:1,b:2}); //objects 
console.table({a:1,b:2}); //prints data in table in console
console.error('this is some error'); // somewhat like printing in catch
console.clear();
console.warn('this is a warning');
console.time('hello'); // timer which will count the time to print hello world
  console.log('Hello world');
  console.log('Hello world');
  console.log('Hello world');
  console.log('Hello world');
  console.log('Hello world');
  console.log('Hello world');
  console.log('Hello world');
console.timeEnd('hello');
//single line comments 

/*

multi
 line
  comments 

*/

// var name = "Ishaan Veer Dadhwal";
// console.log(typeof name);
// console.log(name.length);

// bool to a string

var name =5;
console.log(name);
console.log(name.length);

// printing the date
console.log(new Date());

var arr = String([1,2,3,4]);
var arr1 = [7,8,9,0];
console.log(arr1);
console.log(arr1.length);
console.log(arr1[0]);
console.log(arr);
console.log(arr.length);


// playing with numbers 

var val1 = 57.12;
console.log(val1.toFixed());
console.log(val1.toFixed(3));

var magicPi = Math.PI;
console.log(magicPi);
console.log(magicPi.toFixed(5));

var EulerNo = Math.E;
console.log(EulerNo);
console.log(Math.round(2.4));
console.log(Math.ceil(2.3));
console.log(Math.floor(2.9));
console.log(Math.min(1,2,-4,8,12));
console.log(Math.floor(Math.random() * 30 + 1));


var numbers = [100,44,5,6,89,19];
console.log(numbers.sort( function (a,b) {
  return a - b;
}));

var day;
switch(new Date().getDay()){
  case 0: 
          day = 'Sunday';
          break;
  case 1: 
          day = 'Monday';
          break;
  case 2: 
          day = 'Tuesday';
          break;
  case 3: 
          day = 'Wednesday';
          break;  
  case 4: 
          day = 'Thursday';
          break;  
  case 5: 
          day = 'Friday';
          break;
  case 6: 
          day = 'Saturday';
          break;    
  default: console.log('No such day is there');

}

console.log(`Today is ${day}`);


// function declarations
function square(firstname = 'ishaan', lastname = 'dadhwal'){

  console.log('Hello ' + firstname + ' ' + lastname);
}

square('madhav'); 


// function expressions  
// Setname is a variable which needs to be 
const SetName = function(x = 4){
    return x + x;
};
console.log(SetName());

//Immediatley invokable functions expressions (IIFE's)
// These are basically the functions we get decleared and executed by themseleves 
// for an better understanding you can consider them as anonyoums functions

(function(name){
  console.log(`My name is ${name}`);
})('ISHAAN');

 
var cars = ['honda', 'toyota', 'chevy', 'mercedes', 'audi'];

cars.forEach(function(car){
        console.log(car)
});