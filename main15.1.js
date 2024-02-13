// Завдання 1: Середнє арифметичне числових елементів масиву

function calculateAverage(arr) {
    const numbers = arr.filter(item => typeof item === 'number');

    if (numbers.length === 0) {
        return 0; // Повертаємо 0, якщо немає числових елементів
    }

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    return average;
}

const array1 = [1, 'a', 2, 'b', 3, 'c'];
console.log(calculateAverage(array1)); // Виведе середнє арифметичне числових елементів (1 + 2 + 3) / 3 = 2

const array2 = ['x', 'y', 'z'];
console.log(calculateAverage(array2)); // Виведе 0, оскільки немає числових елементів


// Завдання 2: Математичні операції з введеними користувачем числами

function doMath(x, znak, y) {
    switch (znak) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            return x / y;
        case '%':
            return x % y;
        case '^':
            return Math.pow(x, y);
        default:
            return 'Непідтримуваний знак';
    }
}

const x = parseFloat(prompt('Введіть перше число:'));
const znak = prompt('Введіть знак математичної операції (+, -, *, /, %, ^):');
const y = parseFloat(prompt('Введіть друге число:'));

console.log(doMath(x, znak, y));


// Завдання 3: Заповнення двомірного масиву користувачем

function fillArray(rows, cols) {
    const resultArray = [];

    for (let i = 0; i < rows; i++) {
        const innerArray = [];
        for (let j = 0; j < cols; j++) {
            const value = prompt(`Введіть значення для елемента [${i}][${j}]:`);
            innerArray.push(value);
        }
        resultArray.push(innerArray);
    }

    return resultArray;
}

const rows = parseInt(prompt('Введіть кількість рядків:'));
const cols = parseInt(prompt('Введіть кількість стовпців:'));

const userArray = fillArray(rows, cols);
console.log(userArray);


// Завдання 4: Видалення символів з рядка

function removeChars(str, charsToRemove) {
    const charsSet = new Set(charsToRemove);
    const resultStr = str.split('').filter(char => !charsSet.has(char)).join('');
    return resultStr;
}

const inputString = prompt('Введіть рядок:');
const charsToRemove = prompt('Введіть символи для видалення (без пробілів, наприклад, ld):');

console.log(removeChars(inputString, charsToRemove));

