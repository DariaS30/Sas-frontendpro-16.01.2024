function pow(num, degree) {
    if (degree === 0) {
        return 1; // Будь-яке число підняте до ступеня 0 дорівнює 1
    } else if (degree > 0) {
        return num * pow(num, degree - 1); // Рекурсивний виклик
    } else {
        return 1 / pow(num, -degree); // Обробка випадку від'ємного ступеня
    }
}

// Приклад виклику функції
const result = pow(2, 3);
console.log(result);
