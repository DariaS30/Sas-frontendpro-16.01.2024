const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

// 1. Знайти суму та кількість позитивних елементів.
let positiveSum = 0;
let positiveCount = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        positiveSum += array[i];
        positiveCount++;
    }
}

console.log(`Сума позитивних елементів: ${positiveSum}`);
console.log(`Кількість позитивних елементів: ${positiveCount}`);

// 2. Знайти мінімальний елемент масиву та його порядковий номер.
const minElement = Math.min(...array);
const minIndex = array.indexOf(minElement);

console.log(`Мінімальний елемент: ${minElement}`);
console.log(`Його порядковий номер: ${minIndex}`);

// 3. Знайти максимальний елемент масиву та його порядковий номер.
const maxElement = Math.max(...array);
const maxIndex = array.indexOf(maxElement);

console.log(`Максимальний елемент: ${maxElement}`);
console.log(`Його порядковий номер: ${maxIndex}`);

// 4. Визначити кількість негативних елементів.
const negativeCount = array.filter(element => element < 0).length;
console.log(`Кількість негативних елементів: ${negativeCount}`);

// 5. Знайти кількість непарних позитивних елементів.
const oddPositiveCount = array.filter(element => element > 0 && element % 2 !== 0).length;
console.log(`Кількість непарних позитивних елементів: ${oddPositiveCount}`);

// 6. Знайти кількість парних позитивних елементів.
const evenPositiveCount = array.filter(element => element > 0 && element % 2 === 0).length;
console.log(`Кількість парних позитивних елементів: ${evenPositiveCount}`);

// 7. Знайти суму парних позитивних елементів.
const sumEvenPositive = array.reduce((sum, element) => (element > 0 && element % 2 === 0) ? sum + element : sum, 0);
console.log(`Сума парних позитивних елементів: ${sumEvenPositive}`);

// 8. Знайти суму непарних позитивних елементів.
const sumOddPositive = array.reduce((sum, element) => (element > 0 && element % 2 !== 0) ? sum + element : sum, 0);
console.log(`Сума непарних позитивних елементів: ${sumOddPositive}`);

// 9. Знайти добуток позитивних елементів.
const positiveProduct = array.filter(element => element > 0).reduce((product, element) => product * element, 1);
console.log(`Добуток позитивних елементів: ${positiveProduct}`);

// 10. Знайти найбільший серед елементів масиву, а інші обнулити.
const maxElement2 = Math.max(...array);
array.forEach((element, index) => array[index] = (element === maxElement2) ? element : 0);

console.log(`Найбільший елемент: ${maxElement2}`);
console.log(`Масив після обнулення інших елементів: ${array}`);
