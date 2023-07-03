window.addEventListener("focus", () => {
  document.getElementById("titleBar").style.display = "block";
  document.getElementById("nextCam").style.display = "block";
});

window.addEventListener("blur", () => {
  document.getElementById("titleBar").style.display = "none";
  document.getElementById("nextCam").style.display = "none";
});
