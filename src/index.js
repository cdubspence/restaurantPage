import './styles.css';
import pageLoad from "./modules/pageLoad";
import loadHomePage from "./modules/home";
import loadContactPage from "./modules/contact";
import loadMenuPage from "./modules/menu";

pageLoad();
loadHomePage();

const content = document.getElementById('content');
const buttons = document.querySelectorAll('.navButtons');

buttons.forEach(button => button.addEventListener('click', () => {
    content.innerHTML = '';//TODO: THis is destroying our event listeners after first click
    pageLoad();
    if(button.getAttribute('id') == 'homeBtn') {
        console.log(button.getAttribute('id'))
        loadHomePage()
    } else if (button.getAttribute('id') == 'menuBtn') {
        console.log(button.getAttribute('id'))
        loadMenuPage()
    } else {
        console.log(button.getAttribute('id'))
        loadContactPage()
    }
}))













// (function init() {
//     const content = document.getElementById('content');
//     const nav = document.createElement('div');
//     nav.classList.add('header');
//     nav.innerHTML = `<h1>El Chupacabra</h1>
//     <button class='navButtons' id='homeBtn' onclick='loadHomePage()'>Home</button>
//     <button class='navButtons' id='menuBtn'onclick='loadMenuPage()'>Menu</button>
//     <button class='navButtons' id='contactBtn'onclick='loadContactPage()'>Contact</button>`

//     content.appendChild(nav);
// })();

// document.getElementById('homeBtn').addEventListener('click', loadHomePage)
// document.getElementById('menuBtn').addEventListener('click', loadMenuPage)
// document.getElementById('contactBtn').addEventListener('click', loadContactPage)