// Arquivo: script.js

function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function toggleContrast() {
    const app = document.querySelector('.app-container');
    const cards = document.querySelectorAll('.card');
    
    if (app.style.backgroundColor === 'black') {
        app.style.backgroundColor = 'white';
        app.style.color = 'black';
        cards.forEach(c => c.style.backgroundColor = '#f9f9f9');
    } else {
        app.style.backgroundColor = 'black';
        app.style.color = 'white'; 
        cards.forEach(c => {
            c.style.backgroundColor = '#333';
            c.style.borderColor = '#fff';
        });
        document.querySelectorAll('p, h2, .card-title').forEach(t => t.style.color = '#fff');
    }
}