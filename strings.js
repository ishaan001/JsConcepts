// var firstname= 'ishaan';
// var middlename= 'veer';
// var lastname= 'dadhwal';

// console.log(firstname+ ' ' + middlename+' ' + lastname);
// console.log(firstname.concat("hello",lastname));
// var fullName = firstname+ ' ' + middlename+' ' + lastname;
// console.log(fullName.toUpperCase());
// console.log(fullName.toLowerCase());

var firstName = 'William';
var lastName = 'Johnson';
var age = 36;
var str = 'Hello there my name is Brad';
var tags = 'web design,web development,programming';

var val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Brad ';
val += 'Traversy';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
val =  'That\'s awesome, I can\'t wait';

// Length
val = firstName.length;

// concat()
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

// indexOf()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

// charAt()
val = firstName.charAt('2');
// Get last char
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0, 4);

// slice()
val = firstName.slice(0,4);
val = firstName.slice(-3);

// split()
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace('Brad', 'Jack');

// includes()
val = str.includes('foo');

console.log(val);