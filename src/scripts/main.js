const toggleDarkModBtn = document.getElementById("toggle-dark-mode");

toggleDarkModBtn.addEventListener("click", async () => {
    const isDarkMode = await window.darkMode.toggle();
    if (toggleDarkModBtn.classList.contains("placeholder-mode"))
        toggleDarkModBtn.classList.remove("placeholder-mode");
    toggleDarkModBtn.classList.add(isDarkMode ? "light-mode" : "dark-mode");
    toggleDarkModBtn.classList.remove(isDarkMode ? "dark-mode" : "light-mode");
});
