(function loadMenuPage() {
    const content = document.getElementById('content');

    const menu = document.createElement('div');
    menu.innerHTML = `<div class='about'>
    <h1 class='title'>About Us</h1>
    <p>This is something unique about us and why we think
    eating at our place is better than eating anywher else in the world</p>`

    content.appendChild(menu);
})();

export default loadMenuPage;