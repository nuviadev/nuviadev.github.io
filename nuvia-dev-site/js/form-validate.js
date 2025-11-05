// This file handles client-side validation for the contact form, providing accessible error messages.

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const messageInput = document.getElementById("message");
    const errorMessages = {
        email: "Por favor, introduce un correo electrónico válido.",
        phone: "Por favor, introduce un número de teléfono válido.",
        message: "El mensaje no puede estar vacío."
    };

    form.addEventListener("submit", function (event) {
        let valid = true;

        // Clear previous error messages
        clearErrors();

        // Validate email
        if (!validateEmail(emailInput.value)) {
            showError(emailInput, errorMessages.email);
            valid = false;
        }

        // Validate phone
        if (!validatePhone(phoneInput.value)) {
            showError(phoneInput, errorMessages.phone);
            valid = false;
        }

        // Validate message
        if (messageInput.value.trim() === "") {
            showError(messageInput, errorMessages.message);
            valid = false;
        }

        if (!valid) {
            event.preventDefault(); // Prevent form submission if invalid
        } else {
            // Simulate a fetch request to /api/contact
            simulateFetch();
        }
    });

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function validatePhone(phone) {
        const regex = /^\+?[0-9\s]*$/; // Simple regex for phone validation
        return regex.test(phone);
    }

    function showError(input, message) {
        const error = document.createElement("span");
        error.className = "error-message";
        error.textContent = message;
        input.parentNode.insertBefore(error, input.nextSibling);
        input.setAttribute("aria-invalid", "true");
        input.setAttribute("aria-describedby", error.id);
    }

    function clearErrors() {
        const errorMessages = document.querySelectorAll(".error-message");
        errorMessages.forEach(error => error.remove());
        const inputs = form.querySelectorAll("input, textarea");
        inputs.forEach(input => {
            input.setAttribute("aria-invalid", "false");
            input.removeAttribute("aria-describedby");
        });
    }

    function simulateFetch() {
        // Simulate a successful form submission
        setTimeout(() => {
            alert("Formulario enviado con éxito.");
            form.reset();
        }, 1000);
    }
});