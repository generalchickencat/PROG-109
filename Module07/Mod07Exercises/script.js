function species(avgLife, homeWorld) {
    this.avgLife = avgLife;
    this.homeWorld = homeWorld;
}

var Human = new species(80, "Metronox");
var Draedean = new species(300, "Aesaria");
var Zaithen = new species(900, "Orbaeous");

function Figure(name, dob, species) {
    this.name = name;
    this.dob = dob;
    this.species = species;
    this.age = function () {
        return (3018 - this.dob);
        }
    this.status = function () {
        var doa;

        if (this.age > this.species.avgLife) { 
            doa = "Dead";
        }
        else {
            doa = "Alive";
        }
        return doa;
    }
}

var abronGenesis = new Figure("Abron Genesis", 2020, Human);
var ayrkThorne = new Figure("Ayrk Thorne", 2084, Draedean);
var skaiSoBlue = new Figure("Skai Soe Blue", 2089, Zaithen);

/*
var details1 = quayHotel.name + ' rooms: ';
details1 += quayHotel.checkAvailability();
var elHotel1 = document.getElementById('hotel1');
elHotel1.textContent = details1;
*/

var el = document.getElementById("mine");

el.innerHTML = "<p>" + abronGenesis.name + "<br>" + abronGenesis.status() +  "<br>" + abronGenesis.age() + "<br>" + abronGenesis.status() + "</p>";

/*"<br>" + abronGenesis.age + "<br>" + abronGenesis.status + "<br>from " + abrongGenesis.species.homeWorld + "</p>"; */