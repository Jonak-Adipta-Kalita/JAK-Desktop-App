const { app, BrowserWindow } = require("electron");

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        icon: "assets/images/logo.png",
		darkTheme: true,
    });

	mainWindow.maximize();
    mainWindow.loadFile("src/index.html");
};

app.whenReady().then(() => {
    createWindow();
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();

    app.on("activate", function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});
