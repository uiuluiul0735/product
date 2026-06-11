const generateBtn = document.getElementById('generate-btn');
const numberDivs = document.querySelectorAll('.number');

generateBtn.addEventListener('click', () => {
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    numberDivs.forEach((div, index) => {
        div.textContent = Array.from(numbers)[index];
    });
});