// SLIDE INDEX NUMBER
var slideIndex = 1;
showSlides(slideIndex);

// OPEN MODAL
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// CLOSE MODAL
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// NEXT/PREVIOUS CONTROLS
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// IMAGE THUMBNAIL CONTROLS
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// DISPLAY IMAGE SLIDES
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
    
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
    
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}