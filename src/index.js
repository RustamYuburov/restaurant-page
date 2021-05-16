
import { init } from './modules/initial-page';
import { createContacts } from './modules/contacts'
import { createAbout } from './modules/about';
import { createMenu } from './modules/menu';

init();

const contactBtn = document.getElementById('Contacts');
contactBtn.addEventListener('click', createContacts);
const homeBtn = document.getElementById('Home');
homeBtn.addEventListener('click', createHome);
const menuBtn = document.getElementById('Menu');
menuBtn.addEventListener('click', createMenu)


function createHome() {
    const container = document.querySelector('main');
    container.textContent = '';

    container.appendChild(createAbout());
}