const enrageTime = 9;
let time = enrageTime * 60;


const countdownEl = document.querySelector('.countdown');

function startTimer() {
    setInterval(updateCountdown, 1000);
}

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
    for (let i = 0; i < positions.length; i++) {
        console.log(`${positions[i]} callout!`)
    }
    // console.log('callout')
}