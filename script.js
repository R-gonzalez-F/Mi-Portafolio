const btnSubir = document.getElementById('btn-subir');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        btnSubir.style.display = 'flex';
    } else {
        btnSubir.style.display = 'none';
    }
});

btnSubir.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
const elementoHora = document.getElementById('hora');
function actualizarHora() {
    const ahora = new Date();
    const hora = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const segundos = ahora.getSeconds().toString().padStart(2, '0');
    elementoHora.textContent = `${hora}:${minutos}:${segundos}`;
}
actualizarHora();
setInterval(actualizarHora, 1000);



const modalCertificado = document.getElementById('modal-certificado');
const modalImagen = document.getElementById('modal-imagen');
const modalCerrarBtn = document.getElementById('modal-cerrar');

document.querySelectorAll('.certificado-destacado-trigger').forEach(boton => {
    boton.addEventListener('click', () => {
        modalImagen.src = boton.dataset.full;
        modalCertificado.classList.add('abierto');
    });
});

function cerrarModalCertificado() {
    modalCertificado.classList.remove('abierto');
}

modalCerrarBtn.addEventListener('click', cerrarModalCertificado);

modalCertificado.addEventListener('click', (evento) => {
    if (evento.target === modalCertificado) cerrarModalCertificado();
});