document.addEventListener('DOMContentLoaded', function() {
    let reviews = document.querySelectorAll('.review');
    let currentReview = 0;

    reviews[currentReview].classList.add('visible');

    setInterval(() => {
        reviews[currentReview].classList.remove('visible');
        currentReview = (currentReview + 1) % reviews.length;
        reviews[currentReview].classList.add('visible');
    }, 4000);

    const form = document.getElementById('property-form');
    const formMessage = document.getElementById('form-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way
        formMessage.textContent = "Your information has been submitted successfully!";
        formMessage.style.display = 'block';
    });
});
