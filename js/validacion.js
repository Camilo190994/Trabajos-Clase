function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}


document.getElementById('regBtn').addEventListener('click', function(event) {
    event.preventDefault(); 

    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    const existingError = document.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }

    if (!emailValidation(email)) {
        const errorMessage = document.createElement('div');
        errorMessage.textContent = 'Correo no válido';
        errorMessage.classList.add('error-message', 'text-danger');

        emailInput.insertAdjacentElement('afterend', errorMessage);
    } else {
        showAlertSuccess();
    }
});

function emailValidation(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}