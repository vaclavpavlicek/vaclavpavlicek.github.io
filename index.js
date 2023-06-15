window.scrollToAbout = function() {
    const aboutSection = document.getElementById("about-container");
    window.scrollTo({
        top: aboutSection.offsetTop,
        behavior: 'smooth'
    });
};

window.scrollToSection = function(id) {
    const section = document.getElementById(id);
    window.scrollTo({
        top: section.offsetTop - 48,
        behavior: 'smooth'
    });
};

window.openMenu = function() {
    console.log('hello');
    const menuItemsElement = document.getElementById('js-mobile-menu-items');
    menuItemsElement.classList.toggle('visible');
    const menuButton = document.getElementById('js-menu-button');
    menuButton.classList.toggle('closed-menu');
};

window.menuItemClicked = function(id) {
    const menuItemsElement = document.getElementById('js-mobile-menu-items');
    menuItemsElement.classList.toggle('visible');
    const section = document.getElementById(id);
    window.scrollTo({
        top: section.offsetTop - 48,
    });
}