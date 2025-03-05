let hasPlayed = false;
let timeLeft = 30;

function playAudio() {
    if (!hasPlayed) {
        var audio = document.getElementById("myAudio");
        audio.volume = 1.0;
        audio.play();
        hasPlayed = true;
        startTimer();
    }
}

function startTimer() {
    const timer = setInterval(() => {
        timeLeft--;
        if (timeLeft <= 0) {
            clearInterval(timer);
        }
    }, 1000);
}

// Предотвращение закрытия страницы
window.onbeforeunload = function() {
    if (timeLeft > 0) {
        return true; // Показывает стандартное сообщение подтверждения
    }
}