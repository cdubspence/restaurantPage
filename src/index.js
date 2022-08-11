import pageLoad from "./modules/pageLoad";
import loadHomePage from "./modules/home";
import loadContactPage from "./modules/contact";
import loadMenuPage from "./modules/menu";
import './styles.css';

function init() {
    pageLoad();
    document.getElementById('homeBtn').addEventListener('click', loadHomePage)
    document.getElementById('menuBtn').addEventListener('click', loadMenuPage)
    document.getElementById('contactBtn').addEventListener('click', loadContactPage)
    
}

init();