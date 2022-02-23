let seletedState = 'login';
var slideIndex = 1;
showSlides(slideIndex);

function myFunction() {
  var txt;
  if (confirm("Thanks for Regestration!")) {
    txt = "You pressed OK!";
  } else {
    txt = "You pressed Cancel!";
  }
}
// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += "active";
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function openVendor(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function toggleLoginSignup(e){
  seletedState= e.target.value;
  document.getElementsByName('login-state').forEach(function(element){
    if(seletedState==element.value){
      element.checked=true;
    }
  })
  if(seletedState==="login"){
    document.getElementById("login-form").style.display='block';
    document.getElementById("signup-form").style.display='none';
  } else {
    document.getElementById("login-form").style.display='none';
    document.getElementById("signup-form").style.display='block';
  }
}

document.getElementsByName("login-state").forEach(function(ele){
  ele.addEventListener('change',toggleLoginSignup)
});


