// scripts/proyecto.js
// Lógica para tabs y videos en la página de proyectos

document.addEventListener("DOMContentLoaded", function () {
  // Pin de intro (si usas GSAP, aquí iría la lógica)
  // Scroll de tabs
  let sections = document.querySelectorAll('.tabs_let-content');
  let videos = document.querySelectorAll('.tabs_video');
  let lastSectionIndex = sections.length - 1;

  function updateTabs() {
    let scrollPosition = window.scrollY;
    let windowHeight = window.innerHeight + 250; // Ajusta para la distancia de scroll

    sections.forEach((section, index) => {
      if (scrollPosition >= (index * windowHeight) && scrollPosition < ((index + 1) * windowHeight)) {
        section.classList.add('is-1');
        videos[index].classList.add('is-1');
      } else {
        if (index !== lastSectionIndex) {
          section.classList.remove('is-1');
          videos[index].classList.remove('is-1');
        }
      }
    });

    if (scrollPosition > (lastSectionIndex * windowHeight)) {
      sections[lastSectionIndex].classList.add('is-1');
      videos[lastSectionIndex].classList.add('is-1');
    } else {
      sections[lastSectionIndex].classList.remove('is-1');
      videos[lastSectionIndex].classList.remove('is-1');
    }
  }

  document.addEventListener("scroll", updateTabs);
  updateTabs(); // Inicializa
});
