document.addEventListener('DOMContentLoaded', function () {
    const textInput = document.getElementById('textInput');
    const infoDiv = document.getElementById('infoDiv');

    textInput.addEventListener('focus', function () {
        // При фокусуванні на текстовому полі
        infoDiv.style.display = 'block';
    });

    textInput.addEventListener('blur', function () {
        // При втраті фокусу на текстовому полі
        infoDiv.style.display = 'none';
    });
});
