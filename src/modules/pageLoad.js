import { loadHomePage } from './home';
import { loadContactPage } from './contact';
import { loadMenuPage } from './menu';

export function pageLoad(page) {
   const content =  document.getElementById('content');
   content.removeChild(content.childNodes[2])
    if(page == 'menuBtn') {
        return loadMenuPage()
    } else if (page == 'contactBtn') {
        return loadContactPage()
    } else {
       return loadHomePage()
    }
    
};
