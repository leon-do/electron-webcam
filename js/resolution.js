const fs = require("fs");

const path = "json/resolution.json";

module.exports = resolution = {
  height: () => {
    try {
      const data = fs.readFileSync(path, "utf8");
      return JSON.parse(data).height;
    } catch {
      return 500;
    }
  },
  width: () => {
    try {
      const data = fs.readFileSync(path, "utf8");
      return JSON.parse(data).width;
    } catch {
      return 500;
    }
  },
  x: () => {
    try {
      const data = fs.readFileSync(path, "utf8");
      return JSON.parse(data).x;
    } catch {
      return undefined;
    }
  },
  y: () => {
    try {
      const data = fs.readFileSync(path, "utf8");
      return JSON.parse(data).y;
    } catch {
      return undefined;
    }
  },
  save(mainWindow) {
    mainWindow.on("resize", () => {
      const [x, y] = mainWindow.getPosition();
      const { width, height } = mainWindow.getBounds();
      fs.writeFileSync(path, JSON.stringify({ width, height, x, y }));
    });
    mainWindow.on("move", () => {
      const [x, y] = mainWindow.getPosition();
      const { width, height } = mainWindow.getBounds();
      fs.writeFileSync(path, JSON.stringify({ width, height, x, y }));
    });
  },
};
