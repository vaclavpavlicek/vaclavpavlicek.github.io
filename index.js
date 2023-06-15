let menuOpened = false;

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
    menuOpened = !menuOpened;
    const menuItemsElement = document.getElementById('js-mobile-menu-items');
    menuItemsElement.classList.toggle('visible');
    const menuButton = document.getElementById('js-menu-button');
    menuButton.classList.toggle('closed-menu');
    console
};

window.mainLinkClicked = function() {
    console.log("menuOpened");
    console.log(menuOpened);
    if (menuOpened) {
        const menuButton = document.getElementById('js-menu-button');
        menuButton.classList.toggle('closed-menu');
        const menuItemsElement = document.getElementById('js-mobile-menu-items');
        menuItemsElement.classList.toggle('visible');
        menuOpened = false;
        window.scrollTo({
            top: 0
        });
    } else {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

window.menuItemClicked = function(id) {
    menuOpened = !menuOpened;
    const menuItemsElement = document.getElementById('js-mobile-menu-items');
    menuItemsElement.classList.toggle('visible');
    const menuButton = document.getElementById('js-menu-button');
    menuButton.classList.toggle('closed-menu');
    const section = document.getElementById(id);
    window.scrollTo({
        top: section.offsetTop - 48,
    });
}