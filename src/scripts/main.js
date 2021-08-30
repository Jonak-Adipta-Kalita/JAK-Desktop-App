document
    .getElementById("toggle-dark-mode")
    .addEventListener("click", async () => {
        const isDarkMode = await window.darkMode.toggle();
        document.getElementById("theme-source").innerText = isDarkMode
            ? "Light Mode: "
            : "Dark Mode: ";
    });
