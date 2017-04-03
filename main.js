

var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images folder/damn.jpg') {
      myImage.setAttribute ('src','images folder/images.jpg');
	} else {
	  myImage.setAttribute ('src','images folder/download.jpg');
	}
    
}





var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Your name?');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'I am ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'I am ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}