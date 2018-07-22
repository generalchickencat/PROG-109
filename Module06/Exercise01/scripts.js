//Unit of Table
var table

/* Pressing a button makes the magic happen: */
function execute () {
  /* Anytime the button is pressed, msg and operator are emptied out. */
  var msg = '';
  var operator = '';
  /* A prompt requests a value. */
  table = prompt("Enter a number from 1-10", 5);
  /* The validity of the value is checked. */
  if (!(table >= 1 && table <= 10)) {
    table = prompt("Try again. A number. 1-10. You can do this.");
  } 
  if (!(table >= 1 && table <= 10)) {
    alert("Wow, you failed those really basic instructions. Enjoy your garbage code!");
    /* If they entered invalid values, we default to 1. */
    table = 1;
  }
  /* If the addition radio was checked, we assign an add value to operator */
  if (document.getElementById("add").checked) {
    operator = "add";
  }

  /* Set counter to 1 */
  var i = 1;
  
  /* If operator is add, addition is run. Otherwise, it defaults to multiplication. */
  if (operator === 'add') {
    /* Do addition */
    while (i < 11) {
      msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
      i++;
    }
  } else {
    /* Do multiplication */
    while (i < 11) {
      msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
      i++;
    }
  }

  /* Write the message into the page */
  var el = document.getElementById('blackboard');
  el.innerHTML = msg;
}
  
/* Trash below. */
/* document.getElementById("demo").innerHTML = x;
operator = function myFunction() {
    var x = document.getElementById("myRadio").checked;
    document.getElementById("demo").innerHTML = x;
};
*/