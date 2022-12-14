import { pageLoad } from "./pageLoad";

export function createNavBar() {
    const content = document.getElementById('content');
    const nav = document.createElement('div');
    const title = document.createElement('h1');
    title.textContent ='Sushi by Spence';
    title.className = 'restaurantName';
    nav.classList.add('header');

    const navButtonHome = ButtonFactory('homeBtn', 'navButtons', 'Home')
    const navButtonMenu = ButtonFactory('menuBtn', 'navButtons', 'Menu')
    const navButtonContact = ButtonFactory('contactBtn', 'navButtons', 'Contact');

    nav.appendChild(navButtonHome);
    nav.appendChild(navButtonMenu);
    nav.appendChild(navButtonContact);

    content.appendChild(title);
    content.appendChild(nav);
}

function ButtonFactory(id, classname, text) { 
    var button = document.createElement('button');
    button.id = id;
    button.className = classname;
    button.textContent = text;
    button.addEventListener('click', function() {pageLoad(id)});
    return button;
    
}