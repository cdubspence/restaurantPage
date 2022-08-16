export function loadContactPage() {
    const content = document.getElementById('content');
    
    const contact = document.createElement('div');
    contact.className = 'contact'
    contact.innerHTML = `
    <h1 class='title'>We want to hear from you!</h1>
    <form id='contactForm'>
    <div class='formFld'>
        <input id='nameInput' type='text' placeholder='Name'>
        <label for='nameInput'>Name</label>
    </div>
    <input type='email' placeholder='Email'>
    Comments: <input type='textarea'>
    <button>Submit</button>
    </form>`
    
    content.appendChild(contact);
};
