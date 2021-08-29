const electron = require("electron");
const url = require("url");
const path = require("path");

const { app, BrowserWindow } = electron;

const isMac = process.platform === "darwin";

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
