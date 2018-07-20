/* first let's talk about our variables:
table is the value we're multiplying by, so we prompt for that number.
operator was elliminated because we're only doing a multiplication table.
i is the value 1, because we don't want to start with negative numbers or zero, that's messed up.
msg is the header and the initiation point.
*/
var table = prompt("what would you like to multiply by today?",3);    // Unit of table

/*I worked with Adam to sort out this code - not sure if it's the best solution, we found that if you typed any number of spaces it breaks the result - but with these two arguments prevent the user from typing in letters, or typing nothing at all, it doesn't stop them from putting a space there*/
while (table === '' || isNaN(table)) { table = prompt("You must pick a number", 9)}

var i = 1;                                       // Set counter to 1, so it doesn't start at 0
var msg = '<h2> "Multiplication Table"  </h2>';  // Message plus message header
//while function starts at 1 (from the variable i) and goes to 11, which gives it that little extra oomph you sometimes need.
  while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }

// This writes the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;