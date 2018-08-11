function markOff(listItem) {
    var mark = document.getElementById(listItem);
    mark.className = "complete";
  }
  
  function completed() {
    var complete = event.target.id;
    complete += "text";
    markOff(complete);
  }
  //this leads to the Area element ID
  document.getElementById("cockpit").addEventListener("click", completed, false);
  document.getElementById("freight").addEventListenter("click", completed, false);
  document.getElementById("coms").addEventListenter("click", completed, false);
  document.getElementById("defense").addEventListenter("click", completed, false);
  document.getElementById("engines").addEventListenter("click", completed, false);
  document.getElementById("portDock").addEventListenter("click", completed, false);
  document.getElementById("starDock").addEventListenter("click", completed, false);
  