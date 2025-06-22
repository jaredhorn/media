
// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Lightbox for Image Grid
document.querySelectorAll('.gg-box img').forEach(img => {
  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.id = 'lightbox';
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.background = 'rgba(0,0,0,0.8)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.innerHTML = `<img src="${img.src}" style="max-width:90%; max-height:90%">`;
    overlay.addEventListener('click', () => overlay.remove());
    document.body.appendChild(overlay);
  });
});

// Scroll Reveal using ScrollReveal.js (needs external lib)
ScrollReveal().reveal('.card', {
  distance: '30px',
  duration: 800,
  easing: 'ease-out',
  origin: 'bottom',
  interval: 100
});



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
