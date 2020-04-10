var slideTeamIndex = 1;
showSlidesTeam(slideTeamIndex);

function plusSlides(n) {
  showSlidesTeam(slideTeamIndex += n);
}

function currentSlideTeam(n) {
  showSlidesTeam(slideTeamIndex = n);
}

function showSlidesTeam(n) {
  var i;
  var slideTeam = document.getElementsByClassName("slide-team");
  var btnTeam = document.getElementsByClassName("btn-team");
  if (n > slideTeam.length) {slideTeamIndex = 1}    
  if (n < 1) {slideTeamIndex = slideTeam.length}
  for (i = 0; i < slideTeam.length; i++) {
      slideTeam[i].style.display = "none";  
  }
  for (i = 0; i < btnTeam.length; i++) {
      btnTeam[i].className = btnTeam[i].className.replace(" active", "");
  }
  slideTeam[slideTeamIndex-1].style.display = "block";  
  btnTeam[slideTeamIndex-1].className += " active";
}





var slideClientIndex = 1;
showSlidesClient(slideClientIndex);

function plusSlides(n) {
  showSlidesClient(slideClientIndex += n);
}

function currentSlideClient(n) {
  showSlidesClient(slideClientIndex = n);
}

function showSlidesClient(n) {
  var i;
  var slideClient = document.getElementsByClassName("slide-client");
  var btnClient = document.getElementsByClassName("btn-client");
  if (n > slideClient.length) {slideClientIndex = 1}    
  if (n < 1) {slideClientIndex = slideClient.length}
  for (i = 0; i < slideClient.length; i++) {
      slideClient[i].style.display = "none";  
  }
  for (i = 0; i < btnClient.length; i++) {
      btnClient[i].className = btnClient[i].className.replace(" active", "");
  }
  slideClient[slideClientIndex-1].style.display = "block";  
  btnClient[slideClientIndex-1].className += " active";
}




var slideTestIndex = 1;
showSlidesTest(slideTestIndex);

function plusSlides(n) {
  showSlidesTest(slideTestIndex += n);
}

function currentSlideTest(n) {
  showSlidesTest(slideTestIndex = n);
}

function showSlidesTest(n) {
  var i;
  var slideTest = document.getElementsByClassName("slide-test");
  var btnTest = document.getElementsByClassName("btn-test");
  if (n > slideTest.length) {slideTestIndex = 1}    
  if (n < 1) {slideTestIndex = slideTest.length}
  for (i = 0; i < slideTest.length; i++) {
      slideTest[i].style.display = "none";  
  }
  for (i = 0; i < btnTest.length; i++) {
      btnTest[i].className = btnTest[i].className.replace(" active", "");
  }
  slideTest[slideTestIndex-1].style.display = "block";  
  btnTest[slideTestIndex-1].className += " active";
}