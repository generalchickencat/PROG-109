//Unit of Table
var table

function execute () {
    //message
    var msg = '';
    var operator = '';
    table = prompt("Enter a number from 1-10", 5);
if (!(table >= 1 && table <= 10)) {
  table = prompt("Try again. A number. 1-10. You can do this.");
} 
if (!(table >= 1 && table <= 10)) {
  alert("Wow, you failed those really basic instructions. Enjoy your garbage code!");
}
if (document.getElementById("add").checked) {
    operator = "add"
}

//Set counter to 1
var i = 1;

if (operator === 'add') {
  // Do addition
  while (i < 11) {
    msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
    i++;
  }
} else {
  // Do multiplication
  while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }
}

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;

//document.getElementById("demo").innerHTML = x;
/*    // Type of calculation
operator = function myFunction() {
    var x = document.getElementById("myRadio").checked;
    document.getElementById("demo").innerHTML = x;
};
*/
}