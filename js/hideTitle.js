// when window is active, hide #titleBar
window.addEventListener("focus", () => {
  document.getElementById("titleBar").style.display = "block";
});

// when window is inactive, show #titleBar
window.addEventListener("blur", () => {
  document.getElementById("titleBar").style.display = "none";
});
