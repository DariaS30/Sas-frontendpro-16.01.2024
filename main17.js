//числа від 20 до 30 через пропуск.
for (let i = 20; i <= 30; i += 0.5) {
    console.log(i);
}

// Курс долара до гривні
const exchangeRate = 27;

// Виведення вартості в гривнях для різних сум у доларах
for (let dollars = 10; dollars <= 100; dollars += 10) {
    const uah = dollars * exchangeRate;
    console.log(`${dollars} доларів = ${uah} гривень`);
}

// Задане число N
const N = 100;

// Виведення цілих чисел, квадрат яких не перевищує N
for (let i = 1; i <= 100; i++) {
    const square = i * i;
    if (square <= N) {
        console.log(`${i} ^ 2 = ${square}`);
    }
}


// Задане ціле число
const numberToCheck = 17;

// Функція для перевірки, чи є число простим
function isPrime(number) {
    if (number <= 1) {
        return false; // Числа менше або рівні 1 не є простими
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; // Якщо знайдено дільник, число не є простим
        }
    }

    return true; // Якщо жодного дільника не знайдено, число є простим
}

// Перевірка заданого числа
if (isPrime(numberToCheck)) {
    console.log(`${numberToCheck} є простим числом.`);
} else {
    console.log(`${numberToCheck} не є простим числом.`);
}


// Задане число
const targetNumber = 81;

// Функція для перевірки, чи можна отримати число шляхом зведення 3 у деякий ступінь
function isPowerOf3(number) {
    if (number <= 0) {
        return false; // Від'ємні числа не можна отримати шляхом зведення 3 у ступінь
    }

    let power = 1;
    let result = 1;

    while (result < number) {
        power++;
        result = Math.pow(3, power);
    }

    return result === number;
}

// Перевірка заданого числа
if (isPowerOf3(targetNumber)) {
    console.log(`${targetNumber} можна отримати шляхом зведення числа 3 у ступінь.`);
} else {
    console.log(`${targetNumber} не можна отримати шляхом зведення числа 3 у ступінь.`);
}
