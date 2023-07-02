// Access the webcam and display the video stream in the videoElement
const videoElement = document.getElementById("webcam");

navigator.mediaDevices
  .getUserMedia({ audio: false, video: true })
  .then((stream) => {
    videoElement.srcObject = stream;
  })
  .catch((error) => {
    console.error("Error accessing the webcam:", error);
  });
