module.exports = function setMenu(mainWindow, Menu) {
  // Create the menu template
  const menuTemplate = [
    {
      label: "Window",
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
        { label: "Quit", role: "quit" },
      ],
    },
    {
      label: "Tools",
      submenu: [
        {
          label: "Reload",
          role: "reload",
        },
        {
          label: "Dev Tools",
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
