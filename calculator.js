const display = document.getElementById('calculator-display');
const buttons = document.querySelectorAll('#calculator-buttons button');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        if (this.value === 'C') {
            display.textContent = ''; // Clear the display
        } else if (this.value === '=') {
            // Calculate result
            display.textContent = evaluateExpression(display.textContent);
        } else {
            display.textContent += this.value;
        }
    });
});

function evaluateExpression(expression) {
    try {
        return math.evaluate(expression);
    } catch (e) {
        return 'Error';
    }
}

