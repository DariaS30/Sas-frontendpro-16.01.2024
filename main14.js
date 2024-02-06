function createSumFunction() {
    let sum = 0;

    return function(value) {
        sum += value;
        return sum;
    };
}

// Створюємо екземпляр функції для накопичення суми
const sumFunction = createSumFunction();

// Приклад використання
console.log(sumFunction(3));
console.log(sumFunction(5));
console.log(sumFunction(20));
