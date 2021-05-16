
function createMeal(obj) {
    const mealCard = document.createElement('div');
    mealCard.classList.add('mealCard');
    
    const mealImage = document.createElement('img');
    mealImage.setAttribute('src', obj.path);
    
    const mealName = document.createElement('p');
    mealName.textContent = obj.name;
    
    mealCard.appendChild(mealImage);
    mealCard.appendChild(mealName);
    
    return mealCard;
}

function createMenu() {
    const container = document.querySelector('main');
    container.textContent = '';

    const menuGrid = document.createElement('div');
    menuGrid.classList.add('menu');

    const menuMeals = [
        {
            path: 'images/salad.png',
            name: 'Salad'
        },
        {
            path: 'images/sandwich.png',
            name: 'Shrimp Sandwich'
        },
        {
            path: 'images/cocktail.png',
            name: 'Cocktail'
        },
        {
            path: 'images/yogurt.png',
            name: 'Yogurt'
        },
    ]

    menuMeals.forEach(food => {
        menuGrid.appendChild(createMeal(food));
    });

    container.appendChild(menuGrid);
}

export { createMenu }