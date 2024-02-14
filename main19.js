// Отримання від користувача трьох рядків
const input1 = prompt('Введіть перший рядок:');
const input2 = prompt('Введіть другий рядок:');
const input3 = prompt('Введіть третій рядок:');

// Конкатенація та виведення у довільному порядку
const result = input2 + input3 + input1;
console.log(result);


// Отримання від користувача п'ятизначного числа
const numberInput = prompt('Введіть п\'ятизначне число:');

// Перетворення рядка на масив цифр та виведення у вихідному порядку
const digitsArray = Array.from(numberInput).map(Number);
console.log(digitsArray.join(' '));

