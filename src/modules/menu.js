function loadMenuPage() {
    const content = document.getElementById('content');

    const menu = document.createElement('div');
    menu.className = 'menu'
    menu.innerHTML = `
    <h1 class='title'>Menu</h1>
    <ul>
        <li> Sushi </li>
        <li> Pizza </li>
        <li> Sammys </li>
        <li> Hot doggies </li>
    </ul>`

    
    content.appendChild(menu);
};

export default loadMenuPage;