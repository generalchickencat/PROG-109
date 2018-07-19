function myFunction() {
    var txt;
    var Height;
    var Weight;
    var personName;

    var personName = prompt("Please enter your name", "Guy Fieri");
    if (personName == null || personName == "") {
        txt = "I wouldn't give my name either";
    } else {
        txt = "Hello " + personName + "! How are you today?";
    } 

/*    var Height = prompt("Please enter your Height in Feet", "6\'4\"");
    var Weight = prompt("Please enter your Weight in pounds", "206");

    var BMI = Weight / (Height x Height) x 703
*/    
    document.getElementById("demo").innerHTML = txt;
}