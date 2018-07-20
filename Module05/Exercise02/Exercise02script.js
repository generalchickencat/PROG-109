function myFunction() {
    var bmiMessage;
    var bmi;
    var height;
    var weight;
    var personName;

var height = prompt("please enter your Height in inches", "76")
var weight = prompt("please enter your Weight in pounds", "220")

var bmi = (weight / (height * height) * 703)

if (height == null || height == "") {
    bmi = "eh, you're probably fine."
}
if (weight == null || weight == "") {
    bmi = "eh, you're probably fine."
}

if (bmi >= 19 && bmi <= 25) {
    bmiMessage = "you're Normal"
}
else if (bmi >= 26 && bmi <= 30) {
    bmiMessage = "you're Overweight"
}
else if (bmi >= 31) {
    bmiMessage = "you're Obeeeeez"
}
 
    document.getElementById("demo").innerHTML = bmiMessage;
}