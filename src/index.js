const electron = require("electron");
const url = require("url");
const path = require("path");

const { app, BrowserWindow, Menu } = electron;

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        icon: "assets/images/logo.ico",
        darkTheme: true,
    });

    mainWindow.maximize();
    mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, "index.html"),
		protocol: "file:",
		slashes: true,
	}));
	
	Menu.setApplicationMenu(null);
};

app.whenReady().then(() => {
    createWindow();
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});
