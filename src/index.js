const electron = require("electron");
const url = require("url");
const path = require("path");
const menuTemplate = require("./menuTemplate");
const isSomething = require("./isSomething");

const { app, BrowserWindow, Menu } = electron;
const { isMac } = isSomething;

let mainWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({
        icon: "assets/images/logo.ico",
    });

    mainWindow.maximize();

    mainWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, "index.html"),
            protocol: "file:",
            slashes: true,
        })
    );

    mainWindow.on("closed", function () {
        mainWindow = null;
    });

    const menu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(menu);
};

app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on("window-all-closed", () => {
    if (!isMac) app.quit();
});
