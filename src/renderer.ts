declare global {
    interface Window {
        darkMode: {
            toggle: () => Promise<boolean>;
        };
    }
}

const toggleDarkModeBtn = document.getElementById("toggle-dark-mode")!;

toggleDarkModeBtn.addEventListener("click", async () => {
    const isDarkMode = await window.darkMode.toggle();
    if (toggleDarkModeBtn.classList.contains("placeholder-mode"))
        toggleDarkModeBtn.classList.remove("placeholder-mode");
    toggleDarkModeBtn.classList.add(isDarkMode ? "light-mode" : "dark-mode");
    toggleDarkModeBtn.classList.remove(isDarkMode ? "dark-mode" : "light-mode");
});

import { render } from "./app";

render();
