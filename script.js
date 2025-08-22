let highestZ = 10; 
const windows = document.querySelectorAll(".window:not(#home)");

// opening windows
document.querySelectorAll('.icon').forEach(icon => {
  icon.addEventListener('mousedown', () => {
    icon.style.transform = "scale(0.9)";
  });

  icon.addEventListener('mouseup', () => {
    icon.style.transform = "scale(1)";
  });

  icon.addEventListener('click', () => {
    const windowId = icon.getAttribute('data-window');
    const win = document.getElementById(windowId);
    if (win) win.style.display = 'flex';
    highestZ++;
    win.style.zIndex = highestZ;
  });

    icon.addEventListener('mouseleave', () => {
    icon.style.transform = "scale(1)";
  });
});

// closing windows
document.querySelectorAll('.close-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.window').style.display = 'none';
  });
});

// dragging windows
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

    highestZ++;
    windowEl.style.zIndex = highestZ;

    e.preventDefault(); 
  });

  document.addEventListener('mousemove', e => {
    if (isDragging) {
      let newLeft = e.clientX - offsetX;
      let newTop = e.clientY - offsetY;

      const winRect = windowEl.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      newLeft = Math.max(0, Math.min(newLeft, viewportWidth - winRect.width));
      newTop = Math.max(0, Math.min(newTop, viewportHeight - winRect.height));

      windowEl.style.left = `${newLeft}px`;
      windowEl.style.top = `${newTop}px`;
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
windows.forEach(win => {
  win.addEventListener("mousedown", () => {
    highestZ++; // increments the window's z-index when it's clicked
    win.style.zIndex = highestZ;
  });
});

// education section
var coll = document.getElementsByClassName("education-collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("education-active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// experience section
var coll = document.getElementsByClassName("experience-collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("experience-active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}