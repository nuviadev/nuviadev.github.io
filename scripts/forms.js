// forms.js: validaciones y feedback accesible
import { qs } from './core.js';
export function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
// Implementar validaciones y feedback en contacto.html
