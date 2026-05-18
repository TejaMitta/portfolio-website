// ================= SMOOTH SCROLL =================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

    });

});

// ================= ACTIVE NAVBAR =================

window.addEventListener('scroll', () => {

    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('.nav-links a');

    sections.forEach(sec => {

        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){

            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            document.querySelector('.nav-links a[href*=' + id + ']')
            .classList.add('active');
        }

    });

});

// ================= WELCOME MESSAGE =================

window.onload = () => {

    console.log("Welcome to Mitta Teja Portfolio");

};