const Store = require("electron-store");
const store = new Store();

module.exports = resolution = {
  height: () => {
    try {
      return store.get("height");
    } catch {
      return 500;
    }
  },
  width: () => {
    try {
      return store.get("width");
    } catch {
      return 500;
    }
  },
  x: () => {
    try {
      return store.get("x");
    } catch {
      return undefined;
    }
  },
  y: () => {
    try {
      return store.get("y");
    } catch {
      return undefined;
    }
  },
  save(mainWindow) {
    mainWindow.on("resize", () => {
      const { width, height } = mainWindow.getBounds();
      store.set("width", width);
      store.set("height", height);
    });
    mainWindow.on("move", () => {
      const [x, y] = mainWindow.getPosition();
      store.set("x", x);
      store.set("y", y);
    });
  },
};
