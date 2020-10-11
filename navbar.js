const navigation = document.querySelector('ul');
const toggleButton = document.getElementById('toggle-button');
const mobileNavigation = document.getElementById('mobile_submenu');
const offerItem = document.getElementById('offer__item');

navigation.classList.add('collapsed');
mobileNavigation.classList.add('collapsed');

const mainNavToggle = () => navigation.classList.toggle('collapsed');
const toggleMobileSubmenu = () => mobileNavigation.classList.toggle('collapsed')

toggleButton.addEventListener('click', mainNavToggle);
offerItem.addEventListener('click', toggleMobileSubmenu);