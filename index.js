const { app, BrowserWindow } = require("electron");
require("electron-reload")(__dirname);

function createWindow() {
  // Create a new browser window
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true, // Added to enable remote module access
    },
  });

  // Load the index.html file
  mainWindow.loadFile("index.html");

  // Handle the resize event to enforce the square shape
  mainWindow.on("resize", () => {
    const [width, height] = mainWindow.getSize();
    const size = Math.max(width, height);
    mainWindow.setSize(size, size);
  });
}

// When Electron has finished initialization and is ready to create browser windows
app.on("ready", createWindow);

// Quit the app when all windows are closed
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
