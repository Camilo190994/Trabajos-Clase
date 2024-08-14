function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.addEventListener("DOMContentLoaded", function() {
    const regBtn = document.getElementById('regBtn');

    regBtn.addEventListener('click', function() {
        validarContrasenas();
    });
});

function validarContrasenas() {
    let password1 = document.getElementById('password1').value;
    let password2 = document.getElementById('password2').value;

    if (password1.length < 6 || password2.length < 6) {
        mostrarError("Las contraseñas deben tener al menos 6 caracteres.");
        return;
    }

    if (password1 !== password2) {
        mostrarError("Las contraseñas no coinciden. Por favor, verifica.");
        return;
    }

    showAlertSuccess(); // Si las contraseñas coinciden y cumplen los requisitos, muestra la alerta de éxito
}

function mostrarError(mensaje) {
    const alertDanger = document.getElementById('alert-danger');
    alertDanger.querySelector('p').textContent = mensaje; // Cambia el texto de la alerta de error
    alertDanger.classList.add('show'); // Muestra la alerta de error
}
