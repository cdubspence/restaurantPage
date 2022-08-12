import pageLoad from "./pageLoad";

function loadHomePage() {
    const content = document.getElementById('content');

    const home = document.createElement('div');
    home.className = 'home';
    home.innerHTML = `
    <h1 class='title'>Home Page</h1>
    <p>SOmething about the page is written here to fill up
    some space and to take all the space it wants until it
    pops and maybe even some more ater that. I cant decide.</p>`
    content.appendChild(home);
};

export default loadHomePage;