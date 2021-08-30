const electron = require("electron");
const url = require("url");
const path = require("path");
const menuTemplate = require("./menuTemplate");
const isSomething = require("./isSomething");

const { app, BrowserWindow, Menu, ipcMain, nativeTheme } = electron;
const { isMac } = isSomething;

let mainWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({
        icon: "assets/images/logo.ico",
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            nodeIntegration: true,
        },
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

    ipcMain.handle("dark-mode:toggle", () => {
        if (nativeTheme.shouldUseDarkColors) {
            nativeTheme.themeSource = "light";
        } else {
            nativeTheme.themeSource = "dark";
        }
        return nativeTheme.shouldUseDarkColors;
    });

    ipcMain.handle("dark-mode:system", () => {
        nativeTheme.themeSource = "system";
    });
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
