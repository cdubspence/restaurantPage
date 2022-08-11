function pageLoad() {
    const content = document.getElementById('content');
    const nav = document.createElement('div');
    nav.classList.add('header');
    nav.innerHTML = `<h1>El Chupacabra</h1>
    <button class='navButtons' id='homeBtn'>Home</button>
    <button class='navButtons' id='menuBtn'>Menu</button>
    <button class='navButtons' id='contactBtn'>About</button>`
    content.appendChild(nav);
};

export default pageLoad;