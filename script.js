var slideIndex = 1;
var slideTimeout;

// Next/previous controls
function plusSlides(n) {
  clearTimeout(slideTimeout);
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  clearTimeout(slideTimeout);
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slideTimeout = setTimeout(function() {
    showSlides(slideIndex);
  }, 4000);
}

// Call showSlides at the beginning to display the initial slide
showSlides(slideIndex);
