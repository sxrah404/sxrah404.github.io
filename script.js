document.querySelectorAll('.icon').forEach(icon => {
  icon.addEventListener('click', () => {
    const windowId = icon.getAttribute('data-window');
    const win = document.getElementById(windowId);
    if (win) win.style.display = 'flex';
  });
});

// close button
document.querySelectorAll('.close-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.window').style.display = 'none';
  });
});

// draggable
const aboutWindow = document.getElementById('about');
let isDragging = false;
let offsetX, offsetY;

aboutWindow.querySelector('.window-header').addEventListener('mousedown', e => {
  isDragging = true;
  const rect = aboutWindow.getBoundingClientRect();
  offsetX = e.clientX - rect.left;
  offsetY = e.clientY - rect.top;
  aboutWindow.classList.add('dragging');
});

document.addEventListener('mousemove', e => {
  if (isDragging) {
    aboutWindow.style.left = `${e.clientX - offsetX}px`;
    aboutWindow.style.top = `${e.clientY - offsetY}px`;
    aboutWindow.style.transform = `none`; // disable centering transform while dragging
  }
});

document.addEventListener('mouseup', () => {
  if (isDragging) {
    isDragging = false;
    aboutWindow.classList.remove('dragging');
  }
});
