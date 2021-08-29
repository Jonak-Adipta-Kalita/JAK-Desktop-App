const electron = require("electron");
const url = require("url");
const path = require("path");
const menu = require("./menu");

const { app, BrowserWindow, ipcMain } = electron;

const isWindows = process.platform === "win32";
const isMac = process.platform === "darwin";

let mainWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            nodeIntegration: true,
        },
        frame: isWindows ? false : true,
    });

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
};

app.whenReady().then(() => {
    createWindow();
});

app.on("window-all-closed", () => {
    if (!isMac) app.quit();
});

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

ipcMain.on(`display-app-menu`, (_, args) => {
    if (isWindows && mainWindow) {
        menu.popup({
            window: mainWindow,
            x: args.x,
            y: args.y,
        });
    }
});
