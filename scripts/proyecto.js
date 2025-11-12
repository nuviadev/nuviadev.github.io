// Proyectos Page - Tabs Interactions

gsap.registerPlugin(ScrollTrigger);

// Pin the intro text section
ScrollTrigger.create({
    trigger: ".intro-wrapper",
    start: "top top",
    end: "bottom top",
    pin: ".text-align-center",
    pinSpacing: false
});

// Handling the scroll for the tabs
// Se asume que hay tantos .tabs_let-content y .tabs_video como pestañas

document.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;
    let windowHeight = window.innerHeight + 550; // +550 = increasing the scroll distance before cada cambio de pestaña
    let sections = document.querySelectorAll('.tabs_let-content');
    let videos = document.querySelectorAll('.tabs_video');
    let lastSectionIndex = sections.length - 1;

    sections.forEach((section, index) => {
        if (scrollPosition >= (index * windowHeight) && scrollPosition < ((index + 1) * windowHeight)) {
            section.classList.add('is-1');
            if (videos[index]) videos[index].classList.add('is-1');
        } else {
            if (index !== lastSectionIndex) {
                section.classList.remove('is-1');
                if (videos[index]) videos[index].classList.remove('is-1');
            }
        }
    });

    // Mantener la última pestaña activa hasta que el usuario la pase
    if (scrollPosition > (lastSectionIndex * windowHeight)) {
        sections[lastSectionIndex].classList.add('is-1');
        if (videos[lastSectionIndex]) videos[lastSectionIndex].classList.add('is-1');
    } else {
        sections[lastSectionIndex].classList.remove('is-1');
        if (videos[lastSectionIndex]) videos[lastSectionIndex].classList.remove('is-1');
    }
});