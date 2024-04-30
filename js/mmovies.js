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