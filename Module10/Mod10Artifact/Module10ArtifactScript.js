var myImages = ["http://graypawn.wdfiles.com/local--files/imagebin/cashewchicken.jpg", "http://graypawn.wdfiles.com/local--files/imagebin/PinneappleFriedRice.jpg","http://graypawn.wdfiles.com/local--files/imagebin/SesamyChicken.jpg","http://graypawn.wdfiles.com/local--files/imagebin/SweetandSour.jpg","http://graypawn.wdfiles.com/local--files/imagebin/WhiteRice.jpg","http://graypawn.wdfiles.com/local--files/imagebin/GeneralChicken.jpg","http://graypawn.wdfiles.com/local--files/imagebin/BBQ%20meal.jpg"];

var captionImages =["Cashew","Pinneapple","Sesamy","S&S","White Rice","General Tsos","BBQ"];

var index=0; 

function updateImage(){
    document.getElementById("slideshow").src = myImages[index];
    document.getElementById("slideshow").alt= captionImages[index];
    document.getElementById("caption").textContent = captionImages[index]; 
    } 

function next(){
    if (myImages.length == index+1){
    index=0;}
    else
    {index++;
    updateImage();
    }}

function back(){
    if (index===0)
    index=myImages.length-1;
    else
    index--;
    updateImage();
    }
   
var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 
   
previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false); 

function autoSlide(){
    if (document.getElementById("auto").checked)
    next(); 
    }

setInterval(autoSlide,2000); // Next