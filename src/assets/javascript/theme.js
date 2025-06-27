/**
 * Handle theme preference (auto/light/dark)
 **/
const themeKey = 'theme';

// Check if a theme preference is stored
const getStoredTheme = () => localStorage.getItem(themeKey) || 'auto';

const storedTheme = getStoredTheme();
document.documentElement.setAttribute('data-theme', storedTheme);

// Set the theme preference based on user selection
const setTheme = function (value) {
  document.documentElement.setAttribute('data-theme', value);
  localStorage.setItem(themeKey, value);
};

window.onload = function () {
  // Set the initial theme based on stored preference
  document.getElementById('theme-' + storedTheme).setAttribute('checked', '');

  // Switch theme based on user selection
  document.querySelectorAll('[name="theme"]').forEach((radio) => {
    radio.addEventListener('change', () => {
      if (radio.checked) {
        const selectedValue = radio.value;
        setTheme(selectedValue);
      }
    });
  });
};
