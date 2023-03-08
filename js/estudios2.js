let boton_cursos = document.getElementById('boton_cursos');

let cursos_oculto = document.getElementById('cursos_oculto');

boton_cursos.addEventListener('click', toggleText);

function toggleText() {
    cursos_oculto.classList.toggle('show')
} ;

