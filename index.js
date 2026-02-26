var menuOpened = false;
window.scrollToAbout = function () {
  var aboutSection = document.getElementById("js-publications-section");
  window.scrollTo({
    top: aboutSection.offsetTop,
    behavior: 'smooth'
  });
};
window.scrollToSection = function (id) {
  var section = document.getElementById(id);
  window.scrollTo({
    top: section.offsetTop - 48,
    behavior: 'smooth'
  });
};
window.openMenu = function () {
  menuOpened = !menuOpened;
  var menuItemsElement = document.getElementById('js-mobile-menu-items');
  menuItemsElement.classList.toggle('visible');
  var menuButton = document.getElementById('js-menu-button');
  menuButton.classList.toggle('closed-menu');
  updateBodyOverflow();
};
window.mainLinkClicked = function () {
  if (menuOpened) {
    var menuButton = document.getElementById('js-menu-button');
    menuButton.classList.toggle('closed-menu');
    var menuItemsElement = document.getElementById('js-mobile-menu-items');
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
};
window.menuItemClicked = function (id) {
  menuOpened = !menuOpened;
  var menuItemsElement = document.getElementById('js-mobile-menu-items');
  menuItemsElement.classList.toggle('visible');
  var menuButton = document.getElementById('js-menu-button');
  menuButton.classList.toggle('closed-menu');
  var section = document.getElementById(id);
  window.scrollTo({
    top: section.offsetTop - 48
  });
  updateBodyOverflow();
};
window.updateBodyOverflow = function () {
  var bodyElements = document.getElementsByTagName("body");
  if (bodyElements.length > 0) {
    if (menuOpened) {
      bodyElements[0].style.overflow = "hidden";
    } else {
      bodyElements[0].style.overflow = "";
    }
  }
};