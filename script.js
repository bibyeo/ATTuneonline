const sfxButton = document.getElementById('sfx-button');
const ambient = {
  'screen-1': document.getElementById('ambient-screen1'),
  'screen-2': document.getElementById('ambient-screen2'),
};

// Wire every element carrying data-goto (buttons, mode icons, level badge)
document.querySelectorAll('[data-goto]').forEach(el => {
  el.addEventListener('click', () => {
    playSfx(sfxButton);
    goToScreen(el.dataset.goto);
  });
});

function playSfx(audioEl) {
  audioEl.currentTime = 0;
  audioEl.play().catch(() => {}); // ignore autoplay-block errors
}

function goToScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  // stop all ambient tracks, then play the one for this screen (if any)
  Object.values(ambient).forEach(a => a.pause());
  if (ambient[id]) {
    ambient[id].currentTime = 0;
    ambient[id].play().catch(() => {});
  }

  if (id === 'screen-4') startProgressDemo();
}

// Placeholder progress bar animation for Screen 4 (Game in Progress)
// Replace with real gameplay progress tracking later
function startProgressDemo() {
  const fill = document.getElementById('progress-fill');
  fill.style.width = '0%';
  let pct = 0;
  const interval = setInterval(() => {
    pct += 2;
    fill.style.width = pct + '%';
    if (pct >= 100) {
      clearInterval(interval);
      goToScreen('screen-5');
    }
  }, 150);
}

// Try to start Screen 1's ambient track on first load.
// Browsers block unmuted autoplay before any user interaction, so this
// falls back to starting on the first click anywhere if it's blocked.
ambient['screen-1'].play().catch(() => {
  document.body.addEventListener('click', () => {
    if (document.getElementById('screen-1').classList.contains('active')) {
      ambient['screen-1'].play().catch(() => {});
    }
  }, { once: true });
});
