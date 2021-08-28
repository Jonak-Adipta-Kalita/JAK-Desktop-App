const { app, BrowserWindow } = require("electron");

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: "assets/logo.png",
    });

    win.loadFile("src/index.html");
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
