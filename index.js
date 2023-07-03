const { app, BrowserWindow, Menu } = require("electron");
const resolution = require("./js/resolution");
const setMenu = require("./js/setMenu");

function createWindow() {
  // Create a new browser window
  const mainWindow = new BrowserWindow({
    width: resolution.width(),
    height: resolution.height(),
    x: resolution.x(),
    y: resolution.y(),
    minWidth: 150,
    minHeight: 150,
    frame: false, // Remove window frame
    alwaysOnTop: true, // Set alwaysOnTop to true
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true, // Added to enable remote module access
    },
  });

  // Load the menu
  setMenu(mainWindow, Menu);

  // Save resolution when window is resized or moved
  resolution.save(mainWindow);

  // Load the index.html file
  mainWindow.loadFile("index.html");
}

// When Electron has finished initialization and is ready to create browser windows
app.on("ready", createWindow);
