previousPosition = -2;
currentPosition = -1;
nextPosition = 0;
positions =
    ['arrow', 'square', 'circle', 'x',
        'arrow', 'circle', 'square', 'x',
        'arrow', 'square', 'circle', 'x',
        'arrow', 'circle', 'square', 'x',
        'arrow']

const enrageTime = 9;
// let time = enrageTime * 60;
let time = 539;

const startEl = document.querySelector('#start');
const stopEl = document.querySelector('#stop');
const countdownEl = document.querySelector('#countdown');

const copyEl = document.querySelector('#copy');

const currentEl = document.querySelector('#current');
const nextEl = document.querySelector('#next');
const previousEl = document.querySelector('#previous');

let myTimer;

function startTimer() {
    myTimer = setInterval(updateCountdown, 1000)
}

function stopTimer() {
    clearInterval(myTimer);
}

startEl.addEventListener('click', startTimer);
stopEl.addEventListener('click', stopTimer);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;

    if (seconds == 35 || seconds == 05) {
        callout()
    }
}

function callout() {
    currentPosition = currentPosition + 1
    // console.log(positions[currentPosition])
    previousEl.innerText = positions[currentPosition - 1];
    currentEl.innerText = positions[currentPosition];
    nextEl.innerText = positions[currentPosition + 1];
}