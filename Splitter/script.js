document.getElementById('bill-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    const totalBill = parseFloat(document.getElementById('total-bill').value);
    const numberOfPeople = parseInt(document.getElementById('number-of-people').value);

    // Calculate the amount per person
    if (numberOfPeople > 0) {
        const amountPerPerson = (totalBill / numberOfPeople).toFixed(2);
        document.getElementById('result').textContent = `Each person should pay: ₹${amountPerPerson}`;
    } else {
        document.getElementById('result').textContent = 'Number of people must be greater than zero.';
    }
});
