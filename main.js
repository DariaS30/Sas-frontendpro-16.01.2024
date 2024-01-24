// Запитати користувача про перше число
let number1 = prompt("Введіть перше число:");

// Запитати користувача про друге число
let number2 = prompt("Введіть друге число:");

// Перетворити введені значення в числа
number1 = parseFloat(number1);
number2 = parseFloat(number2);

// Виконати операції та вивести результат
let sum = number1 + number2;
let difference = number1 - number2;
let product = number1 * number2;
let quotient = number1 / number2;

// Сформувати повідомлення з результатами
let message = "Результати операцій:\n" +
    number1 + " + " + number2 + " = " + sum + "\n" +
    number1 + " - " + number2 + " = " + difference + "\n" +
    number1 + " * " + number2 + " = " + product + "\n" +
    number1 + " / " + number2 + " = " + quotient;

// Вивести повідомлення алертом
alert(message);
