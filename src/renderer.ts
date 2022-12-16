declare global {
    interface Window {
        darkMode: {
            toggle: () => Promise<boolean>;
        };
    }
}

const themeToggleBtn = document.getElementById("theme-toggle")!;
const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
const themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
    themeToggleLightIcon.classList.remove("hidden");
} else {
    themeToggleDarkIcon.classList.remove("hidden");
}

themeToggleBtn.addEventListener("click", async () => {
    themeToggleDarkIcon.classList.toggle("hidden");
    themeToggleLightIcon.classList.toggle("hidden");
    const isDarkMode = await window.darkMode.toggle();
    themeToggleBtn.classList.add(isDarkMode ? "dark-mode" : "light-mode");
    themeToggleBtn.classList.remove(isDarkMode ? "light-mode" : "dark-mode");
});

import { render } from "./app";

render();
