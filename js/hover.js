let isDragging = false;
let initialX = 0;
let initialY = 0;
document.getElementById("video").addEventListener("mousedown", (event) => {
  if (event.button === 0) {
    isDragging = true;
    initialX = event.clientX;
    initialY = event.clientY;
  }
});

window.addEventListener("mouseup", () => (isDragging = false));

window.addEventListener("mousemove", (event) => {
  if (isDragging) {
    const newX = event.screenX - initialX;
    const newY = event.screenY - initialY;
    window.moveTo(newX, newY);
  }
});
