const { app, BrowserWindow } = require("electron");
require("electron-reload")(__dirname);

function createWindow() {
  // Create a new browser window
  const mainWindow = new BrowserWindow({
    width: 500,
    height: 500,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true, // Added to enable remote module access
    },
  });

  // Load the index.html file
  mainWindow.loadFile("index.html");

  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
  });
}

// When Electron has finished initialization and is ready to create browser windows
app.on("ready", createWindow);
