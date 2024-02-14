document.addEventListener('DOMContentLoaded', function () {
    // Отримати посилання на елемент таблиці
    const dynamicTable = document.getElementById('dynamicTable');

    // Заповнити таблицю числами від 1 до 100
    let count = 1;
    for (let i = 1; i <= 10; i++) {
        // Створити новий рядок
        const row = dynamicTable.insertRow();

        for (let j = 1; j <= 10; j++) {
            // Додати комірку в рядок і заповнити її числом
            const cell = row.insertCell();
            cell.textContent = count++;
        }
    }
});
