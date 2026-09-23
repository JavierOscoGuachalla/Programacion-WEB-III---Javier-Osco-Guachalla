document.getElementById('formularioContacto').addEventListener('submit', function(event) {

    event.preventDefault();

    let nombres = document.getElementById('nombres').value.trim();
    let apellidos = document.getElementById('apellidos').value.trim();
    let email = document.getElementById('email').value.trim();
    let edad = document.getElementById('edad').value.trim();
    let consulta = document.getElementById('consulta').value;
    let experiencia = document.getElementById('experiencia').value;
    let comentarios = document.getElementById('comentarios').value.trim();

    const terminos = document.getElementById('terminos');


    if (!nombres || !apellidos || !email || !edad ||
        !consulta || !experiencia || !comentarios ||
        !terminos.checked) {

        alert('Por favor, complete todos los campos.');
        return;
    }


    if (!validateEmail(email)) {

        alert('Por favor, ingrese un correo electrónico válido.');
        return;
    }


    if (!validateEdad(edad)) {

        alert('Por favor, ingrese una edad válida.');
        return;
    }


    alert('Formulario enviado correctamente.');

});


function validateEmail(email) {

    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return re.test(email);
}


function validateEdad(edad) {

    const re = /^[0-9]{1,3}$/;

    return re.test(edad);
}