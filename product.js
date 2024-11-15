// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.btn-add-cart');
    const feedback = document.getElementById('cart-feedback');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Get product name from button's data attribute
            const productName = button.getAttribute('data-product');
            
            // Display feedback to the user
            feedback.textContent = `${productName} added to cart!`;
            feedback.classList.remove('hidden');
            feedback.classList.add('visible');
            
            // Hide the feedback message after 2 seconds
            setTimeout(() => {
                feedback.classList.remove('visible');
                feedback.classList.add('hidden');
            }, 2000);
        });
    });
});
