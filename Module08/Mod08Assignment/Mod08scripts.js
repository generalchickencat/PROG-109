function addNew () {
// Create a new element and store it in a variable.
var newEl = document.createElement('li');

//naming the new item
var newItem = document.getElementById('new').value;

// Create a text node and store it in a variable.
var newText = document.createTextNode(newItem);

// Attach the new text node to the new element.
newEl.appendChild(newText);

// Find the position where the new element should be added.
var position = document.getElementsByTagName('ul')[0];

// Insert the new element into its position.
position.appendChild(newEl);

//clear the thing
document.getElementById('new').value='';

}

//does this make the return key work?
/*
var input = document.getElementById("new");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("hitbutton").click();
    }
});*/
//i want pizza