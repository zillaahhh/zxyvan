const correctPin = '062924';
let enteredPin = '';

function appendDigit(digit) {
    if (enteredPin.length < correctPin.length) {
        enteredPin += digit;
        updatePinDisplay();
    }
}

function clearPin() {
    enteredPin = '';
    updatePinDisplay();
}

function submitPin() {
    if (enteredPin === correctPin) {
        // Hide the preview image and PIN entry section
        document.getElementById('preview-image').style.display = 'none';
        document.getElementById('pin-calculator').style.display = 'none';
        
        // Show the full image and success message
        document.getElementById('image-container').style.display = 'block';
    } else {
        document.getElementById('message').textContent = 'Incorrect PIN. Please try again.';
    }
}

function updatePinDisplay() {
    const display = document.getElementById('pin-display');
    display.textContent = '• '.repeat(enteredPin.length).trim();
}

function goToGallery() {
    document.getElementById('image-container').style.display = 'none';
    document.getElementById('gallery-section').style.display = 'block';
    document.getElementById('sweet-message-section').style.display = 'none';
}

function goToSweetMessage() {
    document.getElementById('gallery-section').style.display = 'none';
    document.getElementById('sweet-message-section').style.display = 'block';
}

// Slide fade functionality
document.addEventListener('DOMContentLoaded', function () {
    let currentSlideIndex = 0;
    const fadingSlides = document.querySelectorAll('.fadingSlide');

    function changeSlides() {
        fadingSlides.forEach((slide, index) => {
            slide.style.opacity = (index === currentSlideIndex) ? '1' : '0';
        });
        currentSlideIndex = (currentSlideIndex + 1) % fadingSlides.length;
    }

    setInterval(changeSlides, 2500);
    changeSlides(); 
});
