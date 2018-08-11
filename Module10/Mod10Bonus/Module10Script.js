function markOff(listItem) { // Step Three: adding the Class: Complete, list item is equal to what came out of Completed function
    var mark = document.getElementById(listItem); //variable: listItem corresponding to event trigger
    mark.className = "complete"; // adds the class "complete" to list item
  }
  
  function completed() { //  Step Two:  when click happens, run "completed" function
    var complete = event.target.id; // variable: Event is the Click, Target is the area clicked on, ID being the Attribute of that Area
    complete += "text";  // append "text" onto the end, so now the ID matches the list item ID
    markOff(complete);  // run the markOff function
  }
  // Step One:  each ID here is for the Area of the Map that we want to be able to click on.
  document.getElementById("cockpit").addEventListener("click", completed, false);
  document.getElementById("freight").addEventListener("click", completed, false);
  document.getElementById("coms").addEventListener("click", completed, false);
  document.getElementById("defense").addEventListener("click", completed, false);
  document.getElementById("engines").addEventListener("click", completed, false);
  document.getElementById("portDock").addEventListener("click", completed, false);
  document.getElementById("starDock").addEventListener("click", completed, false);