import {
    app,
    BrowserWindow,
    Menu,
    ipcMain,
    nativeTheme,
    MenuItemConstructorOptions,
    MenuItem,
} from "electron";
import dotenv from "dotenv";

dotenv.config();

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

if (require("electron-squirrel-startup")) {
    app.quit();
}

const isMac = process.platform === "darwin";
const isWindows = process.platform === "win32";
const isLinux = process.platform === "linux";

const menuTemplate: (MenuItemConstructorOptions | MenuItem)[] = [
    {
        label: "View",
        submenu: [
            {
                label: "Reset Zoom",
                role: "resetZoom",
            },
            {
                role: "zoomIn",
            },
            {
                role: "zoomOut",
            },
            {
                type: "separator",
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

let mainWindow;
let iconFile: string;

if (isWindows) {
    iconFile = "assets/images/logo.ico";
} else if (isMac) {
    iconFile = "assets/images/logo.icns";
} else if (isLinux) {
    iconFile = "assets/images/logo.png";
} else {
    iconFile = "";
}

const createWindow = () => {
    mainWindow = new BrowserWindow({
        icon: iconFile,
        webPreferences: {
            preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
            nodeIntegration: true,
        },
    });

    mainWindow.maximize();

    mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

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

if (process.env.NODE_ENV !== "production") {
    menuTemplate.push({
        label: "Developer",
        submenu: [
            {
                label: "Developer Tools",
                role: "toggleDevTools",
            },
            {
                label: "Reload Window",
                role: "reload",
            },
        ],
    });
}
