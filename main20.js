document.addEventListener('DOMContentLoaded', function () {
    // Масив імен зображень
    const imageNames = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];

    // Отримання випадкового імені зображення
    const randomImageName = imageNames[Math.floor(Math.random() * imageNames.length)];

    // Отримання посилання на елемент зображення
    const randomImageElement = document.getElementById('randomImage');

    // Встановлення шляху до випадкового зображення
    randomImageElement.src = `images/${randomImageName}`;
});
