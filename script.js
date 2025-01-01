const updateTotal = () => {
    const quantities = document.querySelectorAll('.quantity-input');
    let total = 0;

    quantities.forEach(element => {
        const price = parseFloat(element.dataset.price);
        const quantity = parseInt(element.value) || 0;
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

document.querySelectorAll('.quantity-input').forEach(input => {
    input.addEventListener('input', updateTotal);
});

document.getElementById('reset').addEventListener('click', function() {
    document.querySelectorAll('.quantity-input').forEach(element => element.value = 0);
    document.getElementById('total').textContent = '0.00';
});