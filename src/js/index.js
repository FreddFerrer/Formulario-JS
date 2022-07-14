const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input')

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
})

const comprobarFormulario = (e) => {
    switch (e.target.name) {
        case 'usuario':
            validarCampo(expresiones.usuario, e.target, 'usuario')
        break;
        case 'nombre':
            validarCampo(expresiones.nombre, e.target, 'nombre')
        break;
        case 'password':
            validarCampo(expresiones.password, e.target, 'password')
        break;
        case 'password2':
            validarCampo(expresiones.password, e.target, 'password2')
        break;
        case 'email':
            validarCampo(expresiones.password, e.target, 'email')
        break;
        case 'telefono':
            validarCampo(expresiones.telefono, e.target, 'telefono')
        break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto')
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto')
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle')
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle-xmark')
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo')
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error')

    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto')
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto')
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle-xmark')
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle')
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo')
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', comprobarFormulario)
    input.addEventListener('blur', comprobarFormulario)
    
})


const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,  //letras, numeros guiones y guiones bajos
    nombre: /^[a-zA-ZÁ-Ý\s]{1,40}$/,  //letras y espacios, pueden llevar acentos
    password: /^.{8,16}$/,  //8 y 16 digitos
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,  //letras puntos guiones y guiones bajos
    telefono: /^\d{6,12}$/   //6 a 12 numeros
}