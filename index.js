const { app, BrowserWindow } = require("electron");
const resolution = require("./js/resolution");
const setMenu = require("./js/setMenu");

function createWindow() {
  // Create a new browser window
  const mainWindow = new BrowserWindow({
    title: "",
    minHeight: 150,
    minWidth: 150,
    width: resolution.width(),
    height: resolution.height(),
    x: resolution.x(),
    y: resolution.y(),
    titleBarStyle: "default", // "hiddenInset", 
    alwaysOnTop: true, // Set alwaysOnTop to true
  });

  // save resolution when window is resized or moved
  resolution.save(mainWindow);

  // set menu
  setMenu(mainWindow);

  // Load the index.html file
  mainWindow.loadFile("index.html");
}

// When Electron has finished initialization and is ready to create browser windows
app.on("ready", createWindow);

app.on("activate", () => {
  console.log("DFSDF");
});
