const menu_functions = require("./menu_functions");

const {
    getCurrentWindow,
    openMenu,
    minimizeWindow,
    unmaximizeWindow,
    maxUnmaxWindow,
    isWindowMaximized,
    closeWindow,
} = menu_functions;

window.addEventListener("DOMContentLoaded", () => {
    window.getCurrentWindow = getCurrentWindow;
    window.openMenu = openMenu;
    window.minimizeWindow = minimizeWindow;
    window.unmaximizeWindow = unmaximizeWindow;
    window.maxUnmaxWindow = maxUnmaxWindow;
    window.isWindowMaximized = isWindowMaximized;
    window.closeWindow = closeWindow;
});
