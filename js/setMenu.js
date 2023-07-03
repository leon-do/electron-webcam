const { Menu } = require("electron");

module.exports = function setMenu(mainWindow) {
  // Create the menu template
  const menuTemplate = [
    {
      label: "Window",
      submenu: [{ label: "Quit", role: "quit" }],
    },
    {
      label: "View",
      submenu: [
        {
          label: "Float on Top",
          type: "checkbox",
          checked: mainWindow.isAlwaysOnTop(),
          click: () => {
            mainWindow.setAlwaysOnTop(!mainWindow.isAlwaysOnTop());
          },
        },
        { type: "separator" },
        {
          label: "Toggle Full Screen",
          role: "toggleFullScreen",
        },
        { type: "separator" },
        {
          label: "Reload",
          role: "reload",
        },
        {
          label: "Force Reload",
          role: "forceReload",
        },
        { type: "separator" },
        {
          label: "Toggle Developer Tools",
          role: "toggleDevTools",
        },
      ],
    },
  ];

  // Create the menu from the template
  const menu = Menu.buildFromTemplate(menuTemplate);

  // Set the application menu
  Menu.setApplicationMenu(menu);
};
