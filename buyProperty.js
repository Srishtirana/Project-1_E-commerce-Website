document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('submit-form');
    const formMessage = document.getElementById('form-message');
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        formMessage.textContent = "Your information has been submitted successfully!";
        formMessage.style.display = 'block';
    });

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 3000);

    showSlide(currentSlide);
});
