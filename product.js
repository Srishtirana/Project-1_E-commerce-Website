document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { id: 1, name: 'Luxury Villa', price: 1000000, date: '2024-06-01', image: 'Property1.jpg', video: 'https://youtu.be/HsBncmjKL5M?si=W1ncbVJbmbY1umyJ' },
        { id: 2, name: 'Cozy Apartment', price: 200000, date: '2024-05-15', image: 'Property2.jpeg', video: 'https://www.youtube.com/embed/abc' },
        { id: 3, name: 'Modern Condo', price: 300000, date: '2024-05-20', image: 'Property4.jpg', video: 'https://www.youtube.com/embed/def' },
        { id: 4, name: 'Suburban House', price: 500000, date: '2024-04-30', image: 'property3.jpeg', video: 'https://www.youtube.com/embed/ghi' },
        { id: 5, name: 'Beachfront Property', price: 750000, date: '2024-03-25', image: 'property5.jpeg', video: 'https://www.youtube.com/embed/jkl' },
        { id: 6, name: 'Downtown Loft', price: 450000, date: '2024-06-05', image: 'property6.jpg', video: 'https://www.youtube.com/embed/mno' },
        { id: 7, name: 'Country Cottage', price: 300000, date: '2024-05-10', image: 'property7.jpeg', video: 'https://www.youtube.com/embed/pqr' },
        { id: 8, name: 'Penthouse Suite', price: 850000, date: '2024-04-15', image: 'property8.jpg', video: 'https://www.youtube.com/embed/stu' },
        { id: 9, name: 'Rustic Cabin', price: 250000, date: '2024-03-20', image: 'property11.jpg', video: 'https://www.youtube.com/embed/vwx' },
        { id: 10, name: 'Luxury Estate', price: 1200000, date: '2024-06-10', image: 'property9.jpg', video: 'https://www.youtube.com/embed/yza' },
        { id: 11, name: 'Studio Apartment', price: 180000, date: '2024-06-03', image: 'property10.jpg', video: 'https://www.youtube.com/embed/bcd' },
        { id: 12, name: 'Urban Townhouse', price: 550000, date: '2024-05-22', image: 'property12.jpg', video: 'https://www.youtube.com/embed/efg' },
        { id: 13, name: 'Seaside Bungalow', price: 420000, date: '2024-04-28', image: 'property13.jpg', video: 'https://www.youtube.com/embed/hij' },
        { id: 14, name: 'Mountain Retreat', price: 600000, date: '2024-03-18', image: 'property14.jpeg', video: 'https://www.youtube.com/embed/klm' },
        { id: 15, name: 'City Apartment', price: 350000, date: '2024-02-25', image: 'property15.jpg', video: 'https://www.youtube.com/embed/nop' },
    ];

    const productList = document.getElementById('product-list');
    displayProducts(products);

    function displayProducts(products) {
        productList.innerHTML = '';
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product-item';
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}" onmouseover="zoomImage(this)" onmouseout="resetImage(this)">
                <h2>${product.name}</h2>
                <p>Price: $${product.price.toLocaleString()}</p>
                <p>Date Listed: ${product.date}</p>
                <button class="add-to-cart" onclick="addToCart(${product.id}, '${product.name}', ${product.price}, '${product.image}')">Add to Cart</button>
                <button class="buy-now" onclick="buyNow(${product.id})">Buy Now</button>
                <div class="reviews">
                    <h3>Reviews</h3>
                    <textarea placeholder="Leave a review" id="review-text-${product.id}"></textarea>
                    <button onclick="submitReview(${product.id})">Submit Review</button>
                    <div class="confirmation-message" id="confirmation-${product.id}" style="display:none;">Your review is submitted successfully!</div>
                    <div class="submitted-reviews" id="submitted-reviews-${product.id}"></div>
                </div>
                <button onclick="showVideo('${product.video}')">Watch Video</button>
            `;
            productList.appendChild(productDiv);
        });
    }

    window.sortProducts = function(criterion) {
        const sortedProducts = [...products].sort((a, b) => a[criterion] > b[criterion] ? 1 : -1);
        displayProducts(sortedProducts);
    };

    window.addToCart = function(id, name, price, image) {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const product = { id, name, price, image };
        cartItems.push(product);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        alert('Item added to cart!');
        window.location.href = 'cart.html';
    };

    window.buyNow = function(productId) {
        console.log(`Redirecting to checkout page for Product ${productId}`);
        window.location.href = 'checkout.html';
    };

    window.zoomImage = function(img) {
        img.style.transform = 'scale(1.1)';
    };

    window.resetImage = function(img) {
        img.style.transform = 'scale(1)';
    };

    // Other functions like submitReview, showVideo can remain unchanged
});