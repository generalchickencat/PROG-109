var firstName = prompt("Please enter your first name"); var secondName = prompt("Please enter your last name");
var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening ';
} else if (hourNow > 12) {
    greeting = 'Good afternoon ';
} else if (hourNow > 0) {
    greeting = 'Good morning ';
} else {
    greeting = 'Welcome ';
}

document.write('<h3>' + greeting + firstName + '</h3>');

/* alert: Welcome User!
var firstname;
var lastname;

prompt:  Ask the user for the firstname and store it in variable firstname (var firstname;)
prompt:  Ask the user for the second name and store it in a variable lastname (var lastname;)
In the Message concatenate the firstname and lastname  (HINT:  Concatenation in Javascript is done by the + symbol).
Display message by using: 
document.write('<h3>' + message + '</h3>');

var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');
*/