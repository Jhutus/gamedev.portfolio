document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        const headerHeight = document.querySelector('header').offsetHeight; // Altura del header

        // Calcula la posición de la sección restando la altura del header
        const offsetPosition = targetSection.offsetTop - headerHeight;

        // Realiza el scroll con el offset
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});