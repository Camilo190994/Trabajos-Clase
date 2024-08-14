document.getElementById('regBtn').addEventListener('click', function(event) { //Viendo si se hace el click
    event.preventDefault(); //Se evita que se mande el form por default


    //listamos las entradas que vamos a usar para validar
    const emailInput = document.getElementById('email'); 
    const email = emailInput.value;
    const password1Input = document.getElementById('password1');
    const password2Input = document.getElementById('password2');
    const password1 = password1Input.value;
    const password2 = password2Input.value;
    const nameInput = document.getElementById('nombre')
    const name = nameInput.value
    const lastnameInput = document.getElementById('apellido')
    const lastname = lastnameInput.value

    //seteamos un array que va a guardar el elemento y el mensaje de error
    const errors = []; 

    //Selecciona todos los elementos que tienen la clase de error
    const existingError = document.querySelectorAll('.error-message');
    existingError.forEach(error => error.remove()); //remove apunta al child



    //En cada error se manda el elemento y el mensaje
    if (!emailValidation(email)) {
        errors.push({ element: emailInput, message: 'Correo no válido' });
    } 


    if (password1.length < 6 || password2.length < 6) {
        errors.push({ element: password1Input, message: 'Las contraseñas deben tener al menos 6 caracteres.' });
    }
    if (password1 !== password2) {
        errors.push({ element: password2Input, message: 'Las contraseñas no coinciden. Por favor, verifica.' });
    }

    if(name.length <= 0){
        errors.push({element: nameInput, message: "El nombre no puede estar vacio"})
    }

    if(lastname.length <= 0){
        errors.push({element: lastnameInput, message: "El apellido no puede estar vacio"})
    }

    //Se recorre el array de errores para ver si hay alguno
    //si lo hay se aplica la función mostrar error
    if (errors.length > 0) {
        errors.forEach(error => {
            console.log(error)
            mostrarError(error.element, error.message);
        });
        return; 
    }


    showAlertSuccess();
});

function emailValidation(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

//creo un elemento p y al elemento le agrego un textContent que lo que hacer es ponerle el msj de error
//Despues se agregan estilos del tipo error-message y text-danger que son de bootstrap
//y despues en el elemento que tiene el error se le agrega un elemento en un lugar especifico, en este caso
//es inmediato al elemento encuestion
let count = 0
function mostrarError(inputElement, mensaje) {
    count= count + 1
    console.log(count)
    const errorMessage = document.createElement('p');
            //nace p
    errorMessage.textContent = mensaje;
    //p se le agrega el mensaje
    errorMessage.classList.add('error-message', 'text-danger');
    //p  se le agregan clases
    inputElement.insertAdjacentElement('afterend', errorMessage);
    //input a completar --- despues del elemento -- la 'p' que creamos
}

function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}
