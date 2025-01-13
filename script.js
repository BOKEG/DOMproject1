// script.js
// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get all necessary elements
    const plusButtons = document.querySelectorAll('.fa-plus-circle');
    const minusButtons = document.querySelectorAll('.fa-minus-circle');
    const deleteButtons = document.querySelectorAll('.fa-trash-alt');
    const likeButtons = document.querySelectorAll('.fas fa-heart');
    const totalElement = document.querySelector('.total');
    
    // Function to update total price
    function updateTotal() {
        let total = 0;
        document.querySelectorAll('.card-body').forEach(card => {
            const quantity = parseInt(card.querySelector('.quantity').textContent);
            const price = parseInt(card.querySelector('.unit-price').textContent);
            total += quantity * price;
        });
        totalElement.textContent = total + ' $';
    }
    
    // Add quantity
    plusButtons.forEach(button => {
        button.addEventListener('click', function() {
            const quantityElement = this.parentElement.querySelector('.quantity');
            let quantity = parseInt(quantityElement.textContent);
            quantityElement.textContent = quantity + 1;
            updateTotal();
        });
    });
    
    // Subtract quantity
    minusButtons.forEach(button => {
        button.addEventListener('click', function() {
            const quantityElement = this.parentElement.querySelector('.quantity');
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 0) {
                quantityElement.textContent = quantity - 1;
                updateTotal();
            }
        });
    });
    
    // Delete item
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.card-body');
            card.remove();
            updateTotal();
        });
    });
    
    // Like item
    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('text-red-600');
            this.classList.toggle('text-blue-900');
        });
    });
});