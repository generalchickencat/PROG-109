var elForm = document.getElementById('theForm');
var fixMsg = document.getElementById('theErrors');
var msg;
var firstName;
var lastName;

function validateMe() {
  msg='';
  //Reset errors to blank
  //First name check
  firstName = document.getElementById('firstname').value;
  if (firstName==="null" || firstName==="" || firstName.length > 20){
    msg += '<p>The first name is required and cannot be greater than 20 characters</p>';
  };

  //Last name check
  lastName = document.getElementById('lastname').value;
  if (lastName==="null" || lastName==="" || lastName.length > 50){
    msg += '<p>The last name is required and cannot be greater than 50 characters.</p>';
  };

  
  
  //Add the errors messages into div
  fixMsg.innerHTML = msg;
  //If an error message is present, prevent submission.
  /*if (msg !== '') {*/
  event.preventDefault();
  /*}*/
  
}

function prevent() {
  
}

elForm.addEventListener('submit', validateMe, false);