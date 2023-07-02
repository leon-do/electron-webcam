const { app, BrowserWindow } = require("electron");
const display = require("./display");

function createWindow() {
  // Create a new browser window
  const mainWindow = new BrowserWindow({
    width: display.width(),
    height: display.height(),
    x: display.x(),
    y: display.y(),
    frame: false, // Remove window frame
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true, // Added to enable remote module access
    },
  });

  // save display when window is resized or moved
  display.save(mainWindow);

  // Load the index.html file
  mainWindow.loadFile("index.html");
}

// When Electron has finished initialization and is ready to create browser windows
app.on("ready", createWindow);
