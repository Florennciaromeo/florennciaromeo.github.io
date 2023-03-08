
let boton_uni = document.getElementById('boton_uni');

let universitario_oculto = document.getElementById('universitario_oculto');

boton_uni.addEventListener('click', toggleText);

function toggleText() {
    universitario_oculto.classList.toggle('show')
} ;

