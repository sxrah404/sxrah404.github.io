document.querySelectorAll('.icon').forEach(icon => {
  icon.addEventListener('click', () => {
    const windowId = icon.getAttribute('data-window');
    const win = document.getElementById(windowId);
    if (win) win.style.display = 'flex';
  });
});

document.querySelectorAll('.close-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.window').style.display = 'none';
  });
});

document.querySelectorAll('.window').forEach(windowEl => {
  if (windowEl.id === 'home') return;
  
  const header = windowEl.querySelector('.window-header');
  if (!header) return;

  let isDragging = false;
  let offsetX, offsetY;

  header.addEventListener('mousedown', e => {
    isDragging = true;
    const rect = windowEl.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    windowEl.classList.add('dragging');
    windowEl.style.zIndex = 10; 
  });

  document.addEventListener('mousemove', e => {
    if (isDragging) {
      windowEl.style.left = `${e.clientX - offsetX}px`;
      windowEl.style.top = `${e.clientY - offsetY}px`;
      windowEl.style.transform = 'none';
    }
  });

  document.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      windowEl.classList.remove('dragging');
    }
  });
});

// this is so that the most recently clicked window is on top (not counting home)
let highestZ = 10; 
const windows = document.querySelectorAll(".window:not(#home)");
windows.forEach(win => {
  win.addEventListener("mousedown", () => {
    highestZ++; // increments the window's z-index when it's clicked
    win.style.zIndex = highestZ;
  });
});