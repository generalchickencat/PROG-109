/*var anyItems = document.querySelectorAll('li');
if (anyItems.length > 0) {
    for (var i=0; i<anyItems.length; i++){
        anyItems[i].className = 'done';
    }
}*/
var attrList = document.getElementsByTagName('li');
for (i=0; i<attrList.length; i++) {
    
}

var el = document.getElementById('scriptResults');
el.innerHTML = "<p>Classes on this list are: " + attrList + "</p>";

//var newItemFirst = document.createElement('li');
//var newTextFirst = document.createTextNode('kale');
//newItemFirst.appendChild(newTextFirst);
//list.insertBefore(newItemFirst, list.firstChild);

//ffs this is jus to the dif between innerText and innerContent
/*
var firstItem = document.getElementById('one');
var showTextContent = firstItem.textContent;
var showInnerText = firstItem.innerText;

var msg = "<p>textContent: " + showTextContent + "</p>";
msg += '<p>innerText: ' + showInnerText + '</p>';
var el = document.getElementById('scriptResults');
el.innerHTML = msg;

firstItem.textContent = 'sourdough bread';
*/

//befucks sake - this is all just to play with children nodes.
/*
var itemTwo = document.getElementById('two');
var altText = itemTwo.firstChild.nodeValue;
altText = altText.replace('pine nuts', 'weiners');
itemTwo.firstChild.nodeValue = altText;

var itemOne = document.getElementById('one');
var altText = itemOne.firstChild.firstChild.nodeValue;
altText = altText.replace('fresh', 'furry');
itemOne.firstChild.firstChild.nodeValue = altText;
*/


/*
if (elements.length > 0) {                            // If 3 or more are found

  var el = elements[0];              // Select the third one from the NodeList
  el.className = 'cool';             // Change the value of its class attribute

}

var firstItem = document.getElementById('one');

if (firstItem.hasAttribute('class')) {
    var attr = firstItem.getAttribute('class');
    //add the value of th eattribute after the list
    document.getElementById('scriptResults');
    el.innerHTML = "<p>The first item has a class name: " + attr + "</p>";
}*/