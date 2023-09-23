const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');
const content = document.querySelector('.content');

function removeOverlay() {
  container.classList.remove('show-nav');
  content.style.filter = 'blur(0px)';
}

open.addEventListener('click', () => {
  container.classList.add('show-nav');
  content.style.filter = 'blur(5px)';
});

close.addEventListener('click', () => {
  removeOverlay();
});

content.addEventListener('click', () => {
  removeOverlay();
});

document.addEventListener('keydown', (e) => {
  console.log(e.key);
  if (e.key === 'Escape') {
    removeOverlay();
  }
});

// Implement close on outside click
// Implement Overlay or Dim Background
