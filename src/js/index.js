const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input')


const campos = {
    usuario: false,
    nombre: false,
    password: false,
    email: false,
    telefono: false
}

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
            validarContraseña2()
        break;
        case 'password2':
            validarContraseña2()
        break;
        case 'email':
            validarCampo(expresiones.email, e.target, 'email')
        break;
        case 'telefono':
            validarCampo(expresiones.telefono, e.target, 'telefono')
        break;
    }
}

const validarContraseña2 = () => {
    const pass1 = document.getElementById('password')
    const pass2 = document.getElementById('password2')

    if (pass1.value !== pass2.value) {
        document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto')
        document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto')
        document.querySelector(`#grupo__password2 i`).classList.add('fa-circle-xmark')
        document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle')
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo')
        campos['password'] = false;
    } else {
        document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto')
        document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto')
        document.querySelector(`#grupo__password2 i`).classList.remove('fa-circle-xmark')
        document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle')
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo')
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error')
        campos['password'] = true;
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
        campos[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto')
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto')
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle-xmark')
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle')
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo')
        campos[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', comprobarFormulario)
    input.addEventListener('blur', comprobarFormulario)
    
})

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const terminos = document.getElementById('terminos')

    if(campos.usuario && campos.email && campos.password && campos.nombre && campos.telefono && terminos.checked) {
        formulario.reset();
        document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo')
        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo')
        setTimeout(() => {
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo')
        }, 3000)
    } else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo')
        setTimeout(() => {
            document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo')
        }, 3000)
    }
    
})


const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,  //letras, numeros guiones y guiones bajos
    nombre: /^[a-zA-ZÁ-Ý\s]{1,40}$/,  //letras y espacios, pueden llevar acentos
    password: /^.{8,16}$/,  //8 y 16 digitos
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,  //letras puntos guiones y guiones bajos
    telefono: /^\d{6,12}$/   //6 a 12 numeros
}