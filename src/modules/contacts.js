
function createContacts() {
    const container = document.querySelector('main');
    container.textContent = '';

    const contacts = document.createElement('div');
    contacts.classList.add('contacts');

    const number = document.createElement('span');
    number.textContent = `Number: 123 456 789`;
    const place = document.createElement('span');
    place.textContent = `Addres: Arctica, Coldest street, house #1`;

    const timetable = document.createElement('div');
    timetable.classList.add('timetable');
    timetable.innerHTML = 'Monday-Friday:</br>From 9:00 to 17:00</br>Weekend closed!'

    contacts.appendChild(number);
    contacts.appendChild(place);
    contacts.appendChild(timetable);

    container.appendChild(contacts);
}

export { createContacts };
