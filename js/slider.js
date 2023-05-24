const carousel = document.querySelector('[js-carousel-wrapper]');
const arrows = document.querySelectorAll('[data-carousel-arrows]');
const carouselDots = document.querySelectorAll('[js-data-dots]');
const slideNumber = document.querySelector('[js-slide-number-text]');
let slideIndex = 0;
// add current slide number on the top
function addCurrentSlideNumber(slide, numberText) {
    const lengthOfSlide = slide.length;
    numberText.textContent = `${slideIndex + 1} / ${lengthOfSlide}`;
}
// function to add active slide attribute
function activateSlide (slides) {
    slides.forEach(slide => {
        slide.removeAttribute('data-active-slide');
    });
    slides[slideIndex].setAttribute('data-active-slide', true);
}
// function to add active dots attribute
function activateDots(dots) {
    dots.forEach(dot => {
        dot.removeAttribute('data-active-dot')
    })
    dots[slideIndex].setAttribute('data-active-dot', true);
}
// Below function will add or remove disabled attribute to the arrows
function disableArrows(slides, nextBtn, prevBtn) {
    let nextBtnBooleanValue = slideIndex >= slides.length - 1 ? true : false;
    let prevBtnBooleanValue = slideIndex <= 0 ? true : false;
    nextBtnBooleanValue ? nextBtn.setAttribute('disabled', 'true') : nextBtn.removeAttribute('disabled');
    prevBtnBooleanValue ? prevBtn.setAttribute('disabled', 'true') : prevBtn.removeAttribute('disabled');
}
// helper function to hide or show slides
function showslides(carouselWrapper, dots) {
    const slides = carouselWrapper.querySelectorAll('[js-carousel-item]');
    // Below commented code need to added only if we no need to disabled arrow once they reached to end
    // if (slideIndex > slides.length - 1) slideIndex = 0;
    // if (slideIndex < 0) slideIndex = slides.length - 1;
    // Below code need to added only if we need to disable the arrows once they reached to end
    const nextBtn = carouselWrapper.querySelector('.next');
    const prevBtn = carouselWrapper.querySelector('.prev');
    disableArrows(slides, nextBtn, prevBtn)
    activateSlide (slides);
    activateDots(dots);
    addCurrentSlideNumber(slides, slideNumber);
}   
// function to navigate next or prev slide
function nextOrPrevSlide (dir) {
    if (dir === 'next') {
        slideIndex++;
        showslides(carousel, carouselDots);
    } else {
        slideIndex--;
        showslides(carousel, carouselDots);
    }
}
// function to activate current clicked dot vs current slide
function currentSlide(n) {
    slideIndex = n - 1;
    showslides(carousel, carouselDots);
}
// function to handle arrows click event
function handleArrowClickEvent(arrowBtn) {
    arrowBtn.forEach(arrow => {
        arrow.addEventListener('click', () => {
            if (arrow.dataset.dir === 'next') {
                nextOrPrevSlide('next');
            } else {
                nextOrPrevSlide('prev')
            }
        })
    });
}
// function to handle dots click event
function handleDotsClickEvent(dots) {
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            currentSlide(parseInt(dot.dataset.dotsIndex))
        })
    })
}
// handle all the click events
function handleClickEvents() {
    handleDotsClickEvent(carouselDots);
    handleArrowClickEvent(arrows);
    // We need to call this function here only if we need to disable the prev arrow on-load
    showslides(carousel, carouselDots);
}
handleClickEvents();