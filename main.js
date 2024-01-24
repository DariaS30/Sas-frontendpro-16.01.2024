// Взаємодія з користувачем
let operation = prompt("Введіть операцію (+, -, *, /):");
let number1 = parseFloat(prompt("Введіть перше число:"));
let number2 = parseFloat(prompt("Введіть друге число:"));

// Робота
let result;

switch (operation) {
    case '+':
        result = number1 + number2;
        break;
    case '-':
        result = number1 - number2;
        break;
    case '*':
        result = number1 * number2;
        break;
    case '/':
        result = number1 / number2;
        break;
    default:
        alert("Непідтримувана операція");
        // Вийти зі скрипта, якщо операція непідтримувана
        throw new Error("Непідтримувана операція");
}

// Вивід результату
alert(number1 + " " + operation + " " + number2 + " = " + result);
