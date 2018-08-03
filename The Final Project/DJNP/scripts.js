//This is another chunk of stolen code - it sets up date, then bits of the date.
//I've added one to the month to account for leap-year math bullarky.
//I've added 1k to the year to simulate the future timeline of the Inner City.
//This code does not pay off until way at the bottom... *
var currentDate = new Date();
var day = currentDate.getDate();
var month = currentDate.getMonth()+1;
var year = currentDate.getFullYear()+1000;

//this is a huge stolen function loop thingy to generate a countdown in javascript only
//stolen from here https://codeburst.io/a-countdown-timer-in-pure-javascript-f3cdaae1a1a3
function countdown(endDate) {
    let days, hours, minutes, seconds;
    
    endDate = new Date(endDate).getTime();
    
    if (isNaN(endDate)) {
      return;
    }
    
    setInterval(calculate, 1000);
    
    function calculate() {
      let startDate = new Date();
      startDate = startDate.getTime();
      
      let timeRemaining = parseInt((endDate - startDate) / 1000);
      
      if (timeRemaining >= 0) {
        days = parseInt(timeRemaining / 86400);
        timeRemaining = (timeRemaining % 86400);
        
        hours = parseInt(timeRemaining / 3600);
        timeRemaining = (timeRemaining % 3600);
        
        minutes = parseInt(timeRemaining / 60);
        timeRemaining = (timeRemaining % 60);
        
        seconds = parseInt(timeRemaining);
        
        //document.getElementById("days").innerHTML = parseInt(days, 10);
        //document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
        //document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
        //document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
        document.getElementById("showclock").innerHTML = "<p>D: " + days + "  h: " + hours + ":" + minutes + ":" + seconds + "</p>";

      } else {
        return;
      }
    }
  }
  //put in this countdown function what date you want to count down to
  //not sure what will happen when the date rolls around...
  (function () { 
    countdown('08/17/2018 11:59:00 PM'); 
  }());

// * - here's where the date code at the top pays off:
document.getElementById("timeday").innerHTML = "<p>" + month + "/" + day + "/" + year + "</p>";

