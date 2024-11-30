// script.js

// Zielzeitpunkt für den Countdown (Mitternacht)
const targetTime = new Date(Date.now() + 5 * 60 * 1000);
//targetTime.setHours(24, 0, 0, 0); // Heute um Mitternacht

const countdownElement = document.getElementById("countdown");
const celebrationElement = document.getElementById("celebration");

function updateCountdown() {
    const now = new Date();
    const timeRemaining = targetTime - now;

    if (timeRemaining > 0) {
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        countdownElement.textContent = `${hours} Stunden ${minutes} Minuten ${seconds} Sekunden`;
    } else {
        clearInterval(countdownInterval);
        countdownElement.style.display = "none";
        celebrationElement.style.display = "block";
    }
}

// Countdown alle 1 Sekunde aktualisieren
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();
