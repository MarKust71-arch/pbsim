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