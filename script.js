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
document.querySelectorAll('.window').forEach(windowEl => {
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
    windowEl.style.zIndex = 10; // bring to front when dragging
  });

  document.addEventListener('mousemove', e => {
    if (isDragging) {
      windowEl.style.left = `${e.clientX - offsetX}px`;
      windowEl.style.top = `${e.clientY - offsetY}px`;
      windowEl.style.transform = 'none'; // cancel initial center transform
    }
  });

  document.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      windowEl.classList.remove('dragging');
    }
  });
});
