const form = document.getElementById('contactForm');
const messageDiv = document.getElementById('messageDiv');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        showMessage('Veuillez remplir tous les champs du formulaire.', 'error');
        return;
    }

    if (!isValidEmail(email)) {
        showMessage('Veuillez saisir une adresse e-mail valide.', 'error');
        return;
    }

    form.reset();
    showMessage('Votre message a été envoyé avec succès!', 'success');
});

function isValidEmail(email) {
    const parts = email.split('@');
    if (parts.length !== 2) {
        return false;
    }

    const [localPart, domainPart] = parts;
    if (localPart.trim() === '' || domainPart.trim() === '') {
        return false;
    }

    if (!domainPart.includes('.')) {
        return false;
    }

    return true;
}

function showMessage(message, type) {
    messageDiv.textContent = message;
    messageDiv.className = type;
}
