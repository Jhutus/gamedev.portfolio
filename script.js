const sections = document.querySelectorAll('section');
let currentSection = 0;

function nextSection() {
    if (currentSection < sections.length - 1) {
        currentSection++;
        const sectionWidth = sections[0].offsetWidth;
        window.scrollTo({
            left: currentSection * sectionWidth,
            behavior: 'smooth'
        });
        updateProgress();
    }
}

function previousSection() {
    if (currentSection > 0) {
        currentSection--;
        const sectionWidth = sections[0].offsetWidth;
        window.scrollTo({
            left: currentSection * sectionWidth,
            behavior: 'smooth'
        });
        updateProgress();
    }
}

function updateProgress() {
    const contentWidth = document.querySelector('body').scrollWidth;
    const viewed = window.scrollX;
    const width = (viewed / (contentWidth - window.innerWidth)) * 100;
    document.getElementById('progress').style.width = `${width}%`;
}

// Actualizar progreso al hacer scroll
window.addEventListener('scroll', updateProgress);

// Inicializar
updateProgress();

