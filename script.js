const displayScreen = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let userInput = '';
let result = 0;
let operator = '';

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.textContent;

        if (buttonText === 'C') {
            userInput = '';
            result = 0;
            operator = '';
            displayScreen.value = '';
        } else if (buttonText === '=') {
            calculateResult();
        } else if (buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === '/') {
            operator = buttonText;
            userInput += buttonText;
            displayScreen.value = userInput;
        } else {
            userInput += buttonText;
            displayScreen.value = userInput;
        }
    });
});

function calculateResult() {
    switch (operator) {
        case '+':
            result = parseFloat(userInput.split('+')[0]) + parseFloat(userInput.split('+')[1]);
            break;
        case '-':
            result = parseFloat(userInput.split('-')[0]) - parseFloat(userInput.split('-')[1]);
            break;
        case '*':
            result = parseFloat(userInput.split('*')[0]) * parseFloat(userInput.split('*')[1]);
            break;
        case '/':
            result = parseFloat(userInput.split('/')[0]) / parseFloat(userInput.split('/')[1]);
            break;
        default:
            result = userInput;
    }

    displayScreen.value = result;
    userInput = '';
    operator = '';
}