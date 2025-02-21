document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        const offset = targetSection.offsetLeft;
        document.querySelector('main').style.transform = `translateX(-${offset}px)`;
    });
});
