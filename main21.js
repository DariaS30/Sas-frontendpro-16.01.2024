document.addEventListener('DOMContentLoaded', function () {
    const sliderImage = document.getElementById('sliderImage');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentImageIndex = 1;
    const totalImages = 4; // Загальна кількість зображень

    // Функція для встановлення зображення за індексом
    function setImage(index) {
        sliderImage.src = `Images/${index}.jpg`;
    }

    // Обробник кліку на кнопку "Prev"
    prevBtn.addEventListener('click', function () {
        if (currentImageIndex > 1) {
            currentImageIndex--;
            setImage(currentImageIndex);
            nextBtn.style.display = 'block';
        }

        if (currentImageIndex === 1) {
            prevBtn.style.display = 'none';
        }
    });

    // Обробник кліку на кнопку "Next"
    nextBtn.addEventListener('click', function () {
        if (currentImageIndex < totalImages) {
            currentImageIndex++;
            setImage(currentImageIndex);
            prevBtn.style.display = 'block';
        }

        if (currentImageIndex === totalImages) {
            nextBtn.style.display = 'none';
        }
    });
});
