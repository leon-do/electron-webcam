const { app, BrowserWindow } = require("electron");

function createWindow() {
  // Create a new browser window
  const mainWindow = new BrowserWindow({
    width: 500,
    height: 500,
    frame: false, // Remove window frame
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true, // Added to enable remote module access
    },
  });

  // Load the index.html file
  mainWindow.loadFile("index.html");
}

// When Electron has finished initialization and is ready to create browser windows
app.on("ready", createWindow);
