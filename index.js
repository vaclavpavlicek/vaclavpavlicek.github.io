window.scrollToAbout = function() {
    var aboutSection = document.getElementById("about-container");
    window.scrollTo({
        top: aboutSection.offsetTop,
        behavior: 'smooth'
    });
};