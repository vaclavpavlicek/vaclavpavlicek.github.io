window.scrollToAbout = function() {
    const aboutSection = document.getElementById("about-container");
    window.scrollTo({
        top: aboutSection.offsetTop,
        behavior: 'smooth'
    });
};
