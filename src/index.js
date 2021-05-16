
import { init } from './modules/initial-page';
import { createContacts } from './modules/contacts'
import { createAbout } from './modules/about';

init();

const contactBtn = document.getElementById('Contacts');
contactBtn.addEventListener('click', createContacts);
const homeBtn = document.getElementById('Home');
homeBtn.addEventListener('click', createAbout);
