

var myImages = ["https://generalchickencat.github.io/PROG-109/The%20Final%20Project/DJNP/05artifacts/Mod10/SlideshowImages/audience-1850022_1920.jpg","https://generalchickencat.github.io/PROG-109/The%20Final%20Project/DJNP/05artifacts/Mod10/SlideshowImages/audience-1867714_1920.jpg","https://generalchickencat.github.io/PROG-109/The%20Final%20Project/DJNP/05artifacts/Mod10/SlideshowImages/audience-1868137_1920.jpg","https://generalchickencat.github.io/PROG-109/The%20Final%20Project/DJNP/05artifacts/Mod10/SlideshowImages/concert-2527495_1280.jpg","https://generalchickencat.github.io/PROG-109/The%20Final%20Project/DJNP/05artifacts/Mod10/SlideshowImages/concert-336695_1920.jpg","https://generalchickencat.github.io/PROG-109/The%20Final%20Project/DJNP/05artifacts/Mod10/SlideshowImages/concert-768722_1920.jpg","https://generalchickencat.github.io/PROG-109/The%20Final%20Project/DJNP/05artifacts/Mod10/SlideshowImages/party-629241_1920.jpg","https://generalchickencat.github.io/PROG-109/The%20Final%20Project/DJNP/05artifacts/Mod10/SlideshowImages/smartphone-407108_1920.jpg"];

var captionImages =["Black Tie Affair","Black Tie Affair","The Argent Circle Opener","SakuraCon","Sindarin Heights","Angie's Heart","Neon Limits Ain't All That Bad","White Noise"];

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