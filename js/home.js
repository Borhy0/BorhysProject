let cards = document.getElementsByClassName('cards')[0];
let search = document.getElementsByClassName('search')[0];
let search_input = document.getElementById('search');
search_input.addEventListener('keyup', () => {
    let filter = search_input.value.toUpperCase();
    let a = search.getElementsByTagName('a');

    for (let index = 0; index < a.length; index++) {
        let b = a[index].getElementsByClassName('cont')[0];
        console.log(a.textContent)
        let TextValue = b.textContent || b.innerText;
        if (TextValue.toUpperCase().indexOf(filter) > -1) {
            a[index].style.display = "flex";
            search.style.visibility = "visible";
            search.style.opacity = 1;
        } else {
            a[index].style.display = "none";
        }
        if (search_input.value == 0) {
            search.style.visibility = "hidden";
            search.style.opacity = 0;
        }
    }
})
/*new code*/
var slideIndex = 0;
startAutoShow();

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var slides = document.getElementsByClassName("slide");
  
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  
  // Hide all slides
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Show the current slide
  slides[slideIndex - 1].style.display = "block";
}

// Automatic slideshow
function startAutoShow() {
  var slides = document.getElementsByClassName("slide");
  
  // Hide all slides
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slideIndex++;
  
  if (slideIndex > slides.length) { slideIndex = 1; }
  
  slides[slideIndex - 1].style.display = "block";
  
  // Change slide every 9 seconds
  setTimeout(startAutoShow, 9000);
}
var Audioo = document.getElementById("Audio").autoplay;