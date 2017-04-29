var slides = document.querySelectorAll('#slides_js .slider-show_item');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 3000);

//Declare the function nextSlide
function nextSlide() {
    slides[currentSlide].className = 'slider-show_item';
    currentSlide = (currentSlide + 1) % slides.length;
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
