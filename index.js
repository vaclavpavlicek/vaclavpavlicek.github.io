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
    updateBodyOverflow();
};

window.mainLinkClicked = function() {
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
    updateBodyOverflow();
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
    updateBodyOverflow();
}

window.updateBodyOverflow = function() {
    const bodyElements = document.getElementsByTagName("body");
    if (bodyElements.length > 0) {
        if (menuOpened) {
            bodyElements[0].style.overflow = "hidden";
        } else {
            bodyElements[0].style.overflow = "";
        }
    }
}