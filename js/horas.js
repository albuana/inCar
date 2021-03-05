window.onload = function() {
    atualizarHora();
    setInterval(atualizarHora, 60000);
}

function atualizarHora (){
    var today = new Date();
    var horas = today.getHours();
    var minutos = today.getMinutes();
    if (minutos < 10){
        minutos = "0" + minutos;
    }
    var time = horas + ":" + minutos;
    document.getElementById("horas").textContent = time;
}
