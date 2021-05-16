import { createAbout } from './about'

// Creating Header and filling logo&navigation functions
function createHeader(arr, obj) {
    const header = document.createElement('header');
    header.classList.add('header');

    header.appendChild(createLogo(obj.name, obj.path));
    header.appendChild(createNavigation(arr));

    return header;
}

function createLogo(name, path) {
    const logoDiv = document.createElement('div');
    logoDiv.classList.add('logo');

    const cafeLogo = document.createElement('img');
    cafeLogo.classList.add('logo-image');
    cafeLogo.setAttribute('src', path);

    const cafeName = document.createElement('h1');
    cafeName.classList.add('cafe-name');
    cafeName.textContent = name;

    logoDiv.appendChild(cafeLogo);
    logoDiv.appendChild(cafeName);

    return logoDiv;
}

function createNavigation(array) {
    const navigation = document.createElement('nav');
    navigation.classList.add('navigation');

    array.forEach(element => {
        const button = document.createElement('button');
        button.setAttribute('id', element)
        button.textContent = element;
        navigation.appendChild(button);
    });

    return navigation;
}
// End of Header & etc functions

// Creating Main div function
function createMain() {
    const main = document.createElement('main');
    main.classList.add('main');

    createAbout();

    return main;
}

// Creating Footer function
function createFooter(obj) {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const span = document.createElement('span');
    span.textContent = obj.text;

    const githubLink = document.createElement('a');
    githubLink.setAttribute('href', obj.link);
    githubLink.setAttribute('target', '_blank');

    const githubLogo = document.createElement('img');
    githubLogo.setAttribute('src', obj.path);
    githubLink.appendChild(githubLogo);

    footer.appendChild(span);
    footer.appendChild(githubLink);

    return footer;
}

// Writing Initialize website function
function init() {
    const headerArray = ['Home', 'Menu', 'Contacts'];
    const headerObject = {
        name: 'Summer Cafe',
        path: './images/logo.png'
    }
    const footerObject = {
        text: 'Made by Rustam Yuburov',
        link: 'https://github.com/RustamYuburov/restaurant-page',
        path: 'images/github-logo.png'
    }

    const content = document.querySelector('#content');

    content.appendChild(createHeader(headerArray, headerObject));
    content.appendChild(createMain());
    content.appendChild(createFooter(footerObject));
}

export { init }