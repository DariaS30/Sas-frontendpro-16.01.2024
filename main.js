let number1 = prompt("Введіть перше число:");
let number2 = prompt("Введіть друге число:");

number1 = parseFloat(number1);
number2 = parseFloat(number2);

let sum = number1 + number2;
let difference = number1 - number2;
let product = number1 * number2;
let quotient = number1 / number2;

let message = "Результати операцій:\n" +
    number1 + " + " + number2 + " = " + sum + "\n" +
    number1 + " - " + number2 + " = " + difference + "\n" +
    number1 + " * " + number2 + " = " + product + "\n" +
    number1 + " / " + number2 + " = " + quotient;

alert(message);
