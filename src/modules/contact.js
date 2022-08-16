export function loadContactPage() {
    const content = document.getElementById('content');
    
    const contact = document.createElement('div');
    contact.className = 'contact'
    contact.innerHTML = `
    <h1 class='title'>We want to hear from you!</h1>
    <form id='contactForm'>
    Name: <input type='text'>
    Email: <input type='email'>
    Comments: <input type='textarea'>
    </form>`
    
    content.appendChild(contact);
};
