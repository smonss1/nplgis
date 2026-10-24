const themeStorageKey = "nplgis-theme";
const savedTheme = localStorage.getItem(themeStorageKey);
const initialTheme = savedTheme === "light" ? "light" : "dark";

document.documentElement.dataset.theme = initialTheme;

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.querySelector("[data-theme-toggle]");
  const themeToggleIcon = themeToggle.querySelector(".theme-toggle-icon");

  function applyTheme(theme) {
    const isDark = theme === "dark";
    document.documentElement.dataset.theme = theme;
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} mode`);
    themeToggleIcon.textContent = isDark ? "☀" : "☾";
  }

  applyTheme(initialTheme);

  themeToggle.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem(themeStorageKey, nextTheme);
    applyTheme(nextTheme);
  });
});
