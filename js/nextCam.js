document.getElementById("nextCam").addEventListener("click", async () => {
  const videoElement = document.getElementById("webcam");
  const videoDevices = await navigator.mediaDevices.enumerateDevices();
  const videoInputs = videoDevices.filter((device) => device.kind === "videoinput");
  const currentCameraIndex = videoInputs.findIndex((input) => input.deviceId === videoElement.srcObject.getVideoTracks()[0].getSettings().deviceId);
  const nextCameraIndex = (currentCameraIndex + 1) % videoInputs.length;
  const nextCameraId = videoInputs[nextCameraIndex].deviceId;
  const stream = await navigator.mediaDevices.getUserMedia({
    video: {
      deviceId: { exact: nextCameraId },
    },
  });
  videoElement.srcObject = stream;
});
