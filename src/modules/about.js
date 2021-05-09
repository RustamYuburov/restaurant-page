
function createAboutImg(path) {
    const imgDiv = document.createElement('div');
    imgDiv.classList.add('about-img');
    
    const img = document.createElement('img');
    img.setAttribute('src', path);
    imgDiv.appendChild(img);
    
    return imgDiv;
}

function createAboutText(text) {
    const textDiv = document.createElement('div');
    textDiv.classList.add('description');
    
    const para = document.createElement('p');
    para.innerHTML = text;
    textDiv.appendChild(para);
    
    return textDiv;
}

function createAbout() {
    const home = document.createElement('div');
    home.setAttribute('id', 'home');

    const aboutObject = {
        path: 'images/about.jpg',
        text: 'The cafe is decorated with a strong summer theme, creating a holiday and leisure style that allows customers to slow down and enjoy food and drink.</br>We seem to be an ordinary coffee shop, but in fact, our food is diversified, not only Western food, but also Asian staple food and seafood. Thai barbecue and snacks can not to be missed too. Besides, there is quite a lot of choices for drinks, Coffee, Smoothies and Beer.</br>All ingredients are ordered daily and we guarantee fresh, quality food for every customer who comes to eat.'
    };

    home.appendChild(createAboutImg(aboutObject.path));
    home.appendChild(createAboutText(aboutObject.text));
    
    return home;
}

export { createAbout }