/* Hide-show menu */
const navIcon = document.getElementsByClassName('nav_icon')[0];
let boolTrueFalse = new Boolean();
navIcon.addEventListener('click', () => {
    const menu = document.getElementsByClassName('menu')[0];
    if(boolTrueFalse) {
         menu.style.display = 'block';
         boolTrueFalse = false;
    } else {
        menu.style.display = 'none';
         boolTrueFalse = true;
    }
});

/* Hide-show submenu */
const offertLink = document.getElementsByClassName('offertLink')[0];
let boolTrueFalseOffertLink = new Boolean();
offertLink.addEventListener('click', () => {
    const submenu = document.getElementsByClassName('submenu')[0];
    if(boolTrueFalseOffertLink) {
        submenu.style.display = 'block';
        boolTrueFalseOffertLink = false;
    } else {
        submenu.style.display = 'none';
        boolTrueFalseOffertLink = true;
    }
});