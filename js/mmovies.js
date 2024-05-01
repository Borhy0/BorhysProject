let cards = document.getElementsByClassName('cards')[0];
let search = document.getElementsByClassName('search')[0];
let search_input = document.getElementById('search');
search_input.addEventListener('keyup', () => {
    let filter = search_input.value.toUpperCase();
    let a = search.getElementsByTagName('a');

    for (let index = 0; index < a.length; index++) {
        let b = a[index].getElementsByClassName('cont')[0];
        // console.log(a.textContent)
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
let audi = document.getElementById("TheAudio");
audi.volume = 0.1;
// First, ensure you have an audio element and a button with the class 'btns' in your HTML.

// JavaScript to pause the audio when the button is clicked
document.addEventListener('DOMContentLoaded', (event) => {
    // Get all buttons with the class 'btns'
    const buttons = document.querySelectorAll('.btns');
  
    // Add click event listener to each button
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        // Assuming there's one audio element on the page
        const audio = document.querySelector('audio');
        if (audio) {
          // Pause the audio
          audio.pause();
        }
      });
    });
  });
// JavaScript to pause the video inside a div with class 'vidcontainer' when a span with class 'close' is clicked
document.addEventListener('DOMContentLoaded', (event) => {
    // Get all spans with the class 'close'
    const closeSpans = document.querySelectorAll('.close');
  
    // Add click event listener to each span
    closeSpans.forEach(span => {
      span.addEventListener('click', () => {
        // Find the closest parent div with the class 'vidcontainer'
        let vidContainer = span.closest('.vidcontainer');
  
        // If a 'vidcontainer' is found, pause its video
        if (vidContainer) {
          let video = vidContainer.querySelector('video');
          if (video) {
            video.pause();
          }
        }
      });
    });
  });
  
