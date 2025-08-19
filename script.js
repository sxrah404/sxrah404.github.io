// open windows
document.querySelectorAll('.icon').forEach(icon => {
  icon.addEventListener('click', () => {
    const target = icon.dataset.window;
    document.getElementById(target).style.display = 'flex';
  });
});

// close windows
document.querySelectorAll('.close-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.window').style.display = 'none';
  });
});