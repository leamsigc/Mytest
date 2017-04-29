var slides = document.querySelectorAll('#slides_js .slider-show_item');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 3000);

//Declare the function nextSlide
function nextSlide() {
    goToSlide(currentSlide + 1);
}

function previousSlide() {
    goToSlide(currentSlide - 1);
}

function goToSlide(n) {
    slides[currentSlide].className = 'slider-show_item';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = 'slider-show_item active';
};
/***********Control script********/
var playing = true;
var pauseButton = document.getElementById('pause');

function pauseSlideshow() {
    pauseButton.innerHTML = 'Play';
    playing = false;
    clearInterval(slideInterval);
};
/*Play slide show */
function playSlideshow() {
    pauseButton.innerHTML = 'Pause';
    playing = true;
    slideInterval = setInterval(nextSlide, 3000);
};
/*Event for the button */
pauseButton.onclick = function () {
    if (playing) {
        pauseSlideshow();
    } else {
        playSlideshow();
    }
};
/* Buttons on next and previous */
var next = document.getElementById('next');
var previous = document.getElementById('previous');
/* on click events for the next and the previous*/
next.onclick = function () {
    pauseSlideshow();
    nextSlide();
};
previous.onclick = function () {
    pauseSlideshow();
    previousSlide();
};
