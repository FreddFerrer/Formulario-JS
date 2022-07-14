const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input')

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
})

const comprobarFormulario = (e) => {
    switch (e.target.name) {
        case 'usuario':
            if(expresiones.usuario.test(e.target.value)) {
                document.getElementById('grupo__usuario').classList.remove('formulario__grupo-incorrecto')
                document.getElementById('grupo__usuario').classList.add('formulario__grupo-correcto')
                document.querySelector('#grupo__usuario i').classList.add('fa-check-circle')
                document.querySelector('#grupo__usuario i').classList.remove('fa-circle-xmark')
                document.querySelector('#grupo__usuario .formulario__input-error').classList.remove('formulario__input-error-activo')
                document.querySelector('#grupo__usuario .formulario__input-error').classList.add('formulario__input-error')

            } else {
                document.getElementById('grupo__usuario').classList.add('formulario__grupo-incorrecto')
                document.getElementById('grupo__usuario').classList.remove('formulario__grupo-correcto')
                document.querySelector('#grupo__usuario i').classList.add('fa-circle-xmark')
                document.querySelector('#grupo__usuario i').classList.remove('fa-check-circle')
                document.querySelector('#grupo__usuario .formulario__input-error').classList.add('formulario__input-error-activo')
            }
        break;
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
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,  //letras puntos guiones y guiones bajos
    telefono: /^\d{6,12}$/   //6 a 12 numeros
}