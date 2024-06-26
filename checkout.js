// js/checkout.js
document.addEventListener('DOMContentLoaded', function() {
    const paymentForm = document.getElementById('payment-form');
    paymentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const selectedPaymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
        if (selectedPaymentMethod === 'credit-card') {
            processCreditCardPayment();
        } else {
            processGooglePay();
        }
    });

    function processCreditCardPayment() {
        const cardNumber = document.getElementById('card-number').value;
        const cardExpiry = document.getElementById('card-expiry').value;
        const cardCvc = document.getElementById('card-cvc').value;

        // Mock payment processing
        if (cardNumber && cardExpiry && cardCvc) {
            alert('Credit Card Payment Successful!');
            localStorage.removeItem('cartItems');
            window.location.href = 'success.html';
        } else {
            alert('Please fill out all credit card fields.');
        }
    }

    function processGooglePay() {
        // Mock Google Pay processing
        alert('Google Pay Payment Successful!');
        localStorage.removeItem('cartItems');
        window.location.href = 'success.html';
    }
});
