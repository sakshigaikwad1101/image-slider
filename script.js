let slideIndex = 0;
let slides = document.querySelectorAll('.slide');
let autoPlayInterval;

function showSlide(index) {
  if (index < 0) {
    slideIndex = slides.length - 1;
  } else if (index >= slides.length) {
    slideIndex = 0;
  }

  document.querySelector('.slider').style.transform = `translateX(-${slideIndex * 100}%)`;
}

function prevSlide() {
  showSlide(slideIndex -= 1);
}

function nextSlide() {
  showSlide(slideIndex += 1);
}

function toggleAutoPlay() {
  let playPauseButton = document.querySelector('.play-pause');
  if (playPauseButton.innerHTML === 'Pause') {
    playPauseButton.innerHTML = 'Play';
    clearInterval(autoPlayInterval);
  } else {
    playPauseButton.innerHTML = 'Pause';
    autoPlayInterval = setInterval(nextSlide, 2000); // Change slide every 2 seconds
  }
}

// Start auto play
toggleAutoPlay();