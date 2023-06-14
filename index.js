window.scrollToAbout = function() {
    const aboutSection = document.getElementById("about-container");
    window.scrollTo({
        top: aboutSection.offsetTop,
        behavior: 'smooth'
    });
};

window.scrollToSection = function(id) {
    console.log(id);
    const section = document.getElementById(id);
    window.scrollTo({
        top: section.offsetTop - 48,
        behavior: 'smooth'
    });
};
