// 1. Вивести на сторінку в один рядок через кому числа від 10 до 20.
let output1 = "";
for (let i = 10; i <= 20; i++) {
    output1 += i + ",";
}
document.write(`<p>${output1.slice(0, -1)}</p>`);

// 2. Вивести квадрати чисел від 10 до 20.
for (let i = 10; i <= 20; i++) {
    document.write(`<p>${i} в квадраті: ${i * i}</p>`);
}

// 3. Вивести таблицю множення на 7.
document.write("<p>Таблиця множення на 7:</p>");
for (let i = 1; i <= 10; i++) {
    document.write(`<p>7 * ${i} = ${7 * i}</p>`);
}

// 4. Знайти суму всіх цілих чисел від 1 до 15.
let sum = 0;
for (let i = 1; i <= 15; i++) {
    sum += i;
}
document.write(`<p>Сума чисел від 1 до 15: ${sum}</p>`);

// 5. Знайти добуток усіх цілих чисел від 15 до 35.
let product = 1;
for (let i = 15; i <= 35; i++) {
    product *= i;
}
document.write(`<p>Добуток чисел від 15 до 35: ${product}</p>`);

// 6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
let sum2 = 0;
for (let i = 1; i <= 500; i++) {
    sum2 += i;
}
let average = sum2 / 500;
document.write(`<p>Середнє арифметичне від 1 до 500: ${average}</p>`);

// 7. Вивести суму лише парних чисел в діапазоні від 30 до 80.
let sum3 = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        sum3 += i;
    }
}
document.write(`<p>Сума парних чисел від 30 до 80: ${sum3}</p>`);

// 8. Вивести всі числа в діапазоні від 100 до 200 кратні 3.
document.write("<p>Числа від 100 до 200 кратні 3:</p>");
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        document.write(`<p>${i}</p>`);
    }
}

// 9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
let number = prompt("Введіть натуральне число:");
number = parseInt(number);

document.write(`<p>Дільники числа ${number}:</p>`);
for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        document.write(`<p>${i}</p>`);
    }
}

// 10. Визначити кількість його парних дільників.
let evenDivisorsCount = 0;

for (let i = 1; i <= number; i++) {
    if (number % i === 0 && i % 2 === 0) {
        evenDivisorsCount++;
    }
}

document.write(`<p>Кількість парних дільників числа ${number}: ${evenDivisorsCount}</p>`);

// 11. Знайти суму його парних дільників.
let evenDivisorsSum = 0;

for (let i = 1; i <= number; i++) {
    if (number % i === 0 && i % 2 === 0) {
        evenDivisorsSum += i;
    }
}

document.write(`<p>Сума парних дільників числа ${number}: ${evenDivisorsSum}</p>`);

// 12. Надрукувати повну таблицю множення від 1 до 10.
document.write("<p>Повна таблиця множення від 1 до 10:</p>");
for (let i = 1; i <= 10; i++) {
    document.write("<p>");
    for (let j = 1; j <= 10; j++) {
        document.write(`${i} * ${j} = ${i * j}<br>`);
    }
    document.write("</p>");
}
