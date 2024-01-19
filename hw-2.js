// Отримуємо від користувача три числа за допомогою prompt
let number1 = parseFloat(prompt("Введіть перше число:"));
let number2 = parseFloat(prompt("Введіть друге число:"));
let number3 = parseFloat(prompt("Введіть третє число:"));

// Обчислюємо середнє арифметичне
let average = (number1 + number2 + number3) / 3;

// Виводимо результат через alert
alert("Середнє арифметичне введених чисел: " + average);
