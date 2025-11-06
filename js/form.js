/**
 * form.js
 * Gestiona la validación y envío de formularios
 */

(function() {
    'use strict';

    // Configuración
    const CONFIG = {
        formSelector: '#contact-form',
        submitDelay: 500, // ms para prevenir múltiples envíos
        endpoint: '/api/contact' // endpoint simulado
    };

    // Estado del formulario
    let isSubmitting = false;
    let submitTimeout = null;

    /**
     * Muestra mensajes de error accesibles
     * @param {HTMLElement} input - El campo de entrada
     * @param {string} message - El mensaje de error
     */
    function showError(input, message) {
        const errorId = `${input.id}-error`;
        let errorElement = document.getElementById(errorId);

        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.id = errorId;
            errorElement.className = 'form-error';
            errorElement.setAttribute('role', 'alert');
            input.parentNode.appendChild(errorElement);
        }

        input.classList.add('form-input--error');
        input.setAttribute('aria-invalid', 'true');
        input.setAttribute('aria-describedby', errorId);
        errorElement.textContent = message;
    }

    /**
     * Limpia los errores de un campo
     * @param {HTMLElement} input - El campo de entrada
     */
    function clearError(input) {
        const errorId = `${input.id}-error`;
        const errorElement = document.getElementById(errorId);

        if (errorElement) {
            errorElement.remove();
        }

        input.classList.remove('form-input--error');
        input.removeAttribute('aria-invalid');
        input.removeAttribute('aria-describedby');
    }

    /**
     * Valida un campo de formulario
     * @param {HTMLElement} input - El campo a validar
     * @returns {boolean} - True si es válido
     */
    function validateField(input) {
        clearError(input);

        const value = input.value.trim();
        const type = input.type;
        let isValid = true;
        let errorMessage = '';

        // Validación requerida
        if (input.required && !value) {
            isValid = false;
            errorMessage = 'Este campo es obligatorio';
        }
        // Validación de email
        else if (type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Por favor, introduce un email válido';
            }
        }
        // Validación de teléfono
        else if (type === 'tel' && value) {
            const phoneRegex = /^\+?[\d\s-]{9,}$/;
            if (!phoneRegex.test(value)) {
                isValid = false;
                errorMessage = 'Por favor, introduce un teléfono válido';
            }
        }

        if (!isValid) {
            showError(input, errorMessage);
        }

        return isValid;
    }

    /**
     * Simula el envío del formulario
     * @param {FormData} formData - Los datos del formulario
     * @returns {Promise} - Promesa que resuelve con la respuesta
     */
    function submitForm(formData) {
        return new Promise((resolve, reject) => {
            // Simular llamada a API
            setTimeout(() => {
                if (Math.random() > 0.1) { // 90% éxito
                    resolve({
                        success: true,
                        message: 'Mensaje enviado correctamente'
                    });
                } else {
                    reject(new Error('Error al enviar el mensaje. Por favor, inténtalo de nuevo.'));
                }
            }, 1000);
        });
    }

    /**
     * Muestra el estado del envío
     * @param {HTMLElement} form - El formulario
     * @param {string} message - Mensaje a mostrar
     * @param {string} type - Tipo de mensaje ('success' o 'error')
     */
    function showStatus(form, message, type = 'success') {
        const statusId = 'form-status';
        let statusElement = document.getElementById(statusId);

        if (!statusElement) {
            statusElement = document.createElement('div');
            statusElement.id = statusId;
            statusElement.setAttribute('role', 'status');
            statusElement.className = 'form-status';
            form.appendChild(statusElement);
        }

        statusElement.textContent = message;
        statusElement.className = `form-status form-status--${type}`;
    }

    /**
     * Maneja el envío del formulario
     * @param {Event} e - Evento submit
     */
    async function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;

        // Prevenir múltiples envíos
        if (isSubmitting) return;
        isSubmitting = true;

        // Validar todos los campos
        const inputs = form.querySelectorAll('input, textarea, select');
        let isValid = true;

        inputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });

        if (!isValid) {
            isSubmitting = false;
            return;
        }

        // Mostrar estado de carga
        showStatus(form, 'Enviando mensaje...', 'info');

        try {
            const formData = new FormData(form);
            const response = await submitForm(formData);
            
            showStatus(form, response.message, 'success');
            form.reset();
        } catch (error) {
            showStatus(form, error.message, 'error');
        } finally {
            isSubmitting = false;
        }
    }

    /**
     * Configura el formulario de contacto
     */
    function setupContactForm() {
        const form = document.querySelector(CONFIG.formSelector);
        if (!form) return;

        // Validación en tiempo real con debounce
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                clearTimeout(submitTimeout);
                submitTimeout = setTimeout(() => {
                    validateField(input);
                }, CONFIG.submitDelay);
            });

            input.addEventListener('blur', () => {
                validateField(input);
            });
        });

        // Manejo del envío
        form.addEventListener('submit', handleSubmit);
    }

    /**
     * Inicialización cuando el DOM está listo
     */
    function init() {
        setupContactForm();
    }

    // Ejecutar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();