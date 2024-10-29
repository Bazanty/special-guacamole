const targetDate = new Date("December 20, 2024 00:00:00").getTime();

function updateFlipCard(id, value) {
  const flipCard = document.getElementById(id);
  const currentSpan = flipCard.querySelector('.current');
  const nextSpan = flipCard.querySelector('.next');

  if (currentSpan.textContent !== value) {
    flipCard.classList.add('flipping');
    nextSpan.textContent = value;

    setTimeout(() => {
      currentSpan.textContent = value;
      flipCard.classList.remove('flipping');
    }, 500);
  }
}

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    clearInterval(countdownInterval);
    return;
  }

  const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
  const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  updateFlipCard('months', months.toString().padStart(2, '0'));
  updateFlipCard('days', days.toString().padStart(2, '0'));
  updateFlipCard('hours', hours.toString().padStart(2, '0'));
  updateFlipCard('minutes', minutes.toString().padStart(2, '0'));
  updateFlipCard('seconds', seconds.toString().padStart(2, '0'));
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); 
