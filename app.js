const min = document.querySelector('.min-num');
const max = document.querySelector('.max-num');
const submit = document.getElementById('guess-btn');
const message = document.querySelector('.message');

let minNumber, maxNumber, correctNumber;
const total = 8;

(() => {
    minNumber = Math.ceil(Math.random() * total);
    console.log(minNumber);
    min.innerHTML = `${minNumber}`;
})();

(() => {
    maxNumber = Math.ceil(Math.random() * (total - minNumber) + minNumber) + 2;
        max.innerHTML = `${maxNumber}`;
        console.log(maxNumber);
})();

(() => {
    correctNumber = Math.ceil(Math.random() * (maxNumber - minNumber - 1) + (minNumber));
        console.log(correctNumber)
})();

const clicked = () => {
    console.log('clicked');
    const answer = parseInt(document.getElementById('guess-input').value);
    console.log(typeof answer);
    if (answer === correctNumber) {
        console.log('correct');
        message.className += ' fadeInDown';
        message.textContent = 'Correct!';
        setTimeout(() => location.reload(), 5000)
    } else {
        message.className += ' fadeInDown';
        message.textContent = 'Wrong answer, try again!';
        console.log('wrong')
    }
};

submit.addEventListener('click', clicked);

