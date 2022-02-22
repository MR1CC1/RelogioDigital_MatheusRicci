setInterval(function() {
    const relogio = document.querySelector("#horario");
    const today = new Date();
    const hora = today.getHours();
    const minutos = today.getMinutes();
    const segundos = today.getSeconds();

    relogio.innerHTML = `${hora}:${minutos}:${segundos}`;
}, 1000);