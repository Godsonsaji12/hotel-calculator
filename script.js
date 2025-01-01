const updateTotal = () => {
    const rows = document.querySelectorAll('tbody tr');
    let total = 0;

    rows.forEach(row => {
        const priceInput = row.querySelector('.price-input');
        const quantityInput = row.querySelector('.quantity-input');

        const price = parseFloat(priceInput.value) || 0;
        const quantity = parseInt(quantityInput.value) || 0;
        total += price * quantity;
    });

    document.getElementById('total').textContent = total.toFixed(2);
};

document.querySelectorAll('.increase').forEach(button => {
    button.addEventListener('click', function() {
        const quantityInput = this.previousElementSibling;
        quantityInput.value = parseInt(quantityInput.value || 0) + 1;
        updateTotal();
    });
});

document.querySelectorAll('.decrease').forEach(button => {
    button.addEventListener('click', function() {
        const quantityInput = this.nextElementSibling;
        quantityInput.value = Math.max(0, parseInt(quantityInput.value || 0) - 1);
        updateTotal();
    });
});

document.querySelectorAll('.quantity-input, .price-input').forEach(input => {
    input.addEventListener('input', updateTotal);
});

document.getElementById('reset').addEventListener('click', function() {
    document.querySelectorAll('.quantity-input').forEach(element => element.value = 0);
    document.querySelectorAll('.price-input').forEach((element, index) => {
        element.value = [5.00, 8.00, 4.00, 2.00][index].toFixed(2);
    });
    document.getElementById('total').textContent = '0.00';
});