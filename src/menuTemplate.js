const electron = require("electron");

const { app } = electron;

const menuTemplate = [
    {
        label: "View",
        submenu: [
            {
                label: "Reset Zoom",
                role: "resetzoom",
            },
            {
                role: "zoomin",
            },
            {
                role: "zoomout",
            },
            {
                role: "togglefullscreen",
            },
        ],
    },
    {
        role: "window",
        submenu: [
            {
                role: "minimize",
            },
            {
                role: "close",
            },
            {
                type: "separator",
            },
            {
                label: "Exit",
                click() {
                    app.quit();
                },
                accelerator: "Alt+F4",
            },
        ],
    },
];

module.exports = menuTemplate;
