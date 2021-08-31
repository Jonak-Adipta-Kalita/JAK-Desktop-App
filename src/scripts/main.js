document
    .getElementById("toggle-dark-mode")
    .addEventListener("click", async () => {
        const isDarkMode = await window.darkMode.toggle();
        document
            .getElementById("toggle-dark-mode")
            .classList.add(isDarkMode ? "light-mode" : "dark-mode");
        document
            .getElementById("toggle-dark-mode")
            .classList.remove(isDarkMode ? "dark-mode" : "light-mode");
    });
