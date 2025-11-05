// main.js - This file manages navigation, responsive menu toggles, and dark mode functionality.

// Function to toggle the mobile navigation menu
const toggleMenu = () => {
    const menu = document.querySelector('.navbar__menu');
    menu.classList.toggle('is-active');
};

// Event listener for mobile menu toggle button
document.querySelector('.navbar__toggle').addEventListener('click', toggleMenu);

// Function to handle dark mode toggle
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
};

// Event listener for dark mode toggle button
document.querySelector('.dark-mode-toggle').addEventListener('click', toggleDarkMode);

// Ensure the menu is closed on page load
window.addEventListener('load', () => {
    const menu = document.querySelector('.navbar__menu');
    if (menu.classList.contains('is-active')) {
        menu.classList.remove('is-active');
    }
});