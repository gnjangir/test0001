let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

// Automatic slideshow interval (adjust timing as needed)
const intervalTime = 5000; // 5 seconds
let slideInterval;

// Initial call to start slideshow
startSlideshow();

// Function to start the slideshow
function startSlideshow() {
    slideInterval = setInterval(nextSlide, intervalTime);
}

// Function to change slides automatically
function nextSlide() {
    slideIndex++;
    showSlide();
}

// Function to change slides manually
function changeSlide(n) {
    slideIndex += n;
    showSlide();
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
}

// Function to display specific slide
function currentSlide(index) {
    slideIndex = index;
    showSlide();
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
}

// Function to display current slide
function showSlide() {
    // Looping through slides
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }

    // Resetting transform to show current slide
    const slideWidth = slides[0].clientWidth;
    const translateX = -slideIndex * slideWidth;
    document.querySelector('.slides').style.transform = `translateX(${translateX}px)`;

    // Update active dot
    dots.forEach(dot => dot.classList.remove('active'));
    dots[slideIndex].classList.add('active');
}
