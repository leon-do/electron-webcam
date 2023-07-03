// Access the webcam and display the video stream in the videoElement
navigator.mediaDevices
  .getUserMedia({ audio: false, video: true })
  .then((stream) => {
    document.getElementById("webcam").srcObject = stream;
  })
  .catch((error) => {
    console.error("Error accessing the webcam:", error);
  });
