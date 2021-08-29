window.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menu-btn");
    const minimizeButton = document.getElementById("minimize-btn");
    const maxUnmaxButton = document.getElementById("max-unmax-btn");
    const closeButton = document.getElementById("close-btn");

    menuButton.addEventListener("click", (e) => {
        window.openMenu(e.x, e.y);
    });

    minimizeButton.addEventListener("click", () => {
        window.minimizeWindow();
    });

    maxUnmaxButton.addEventListener("click", () => {
        const icon = maxUnmaxButton.querySelector("i.far");

        window.maxUnmaxWindow();
        if (window.isWindowMaximized()) {
            icon.classList.remove("fa-square");
            icon.classList.add("fa-clone");
        } else {
            icon.classList.add("fa-square");
            icon.classList.remove("fa-clone");
        }
    });
    closeButton.addEventListener("click", () => {
        window.closeWindow();
    });
});
