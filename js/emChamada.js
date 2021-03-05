window.onload = function() {
    atualizarHora();
    setInterval(atualizarHora, 60000);
    setInterval(atualizarTempo, 1000);
    var nome = localStorage.getItem("nomeContacto");
    document.getElementById("nomeContacto").textContent = nome;
};

/* callback do botão desligar */
document.getElementById("desligar").onclick = function () {
    location.href = "chamadasRecentes.html";
};

/* atualiza o tempo de chamada a cada segundo */
function atualizarTempo (){
    var time = document.getElementById("estadoChamada").textContent;
    var minutos = time.slice(0,2);
    var segundos = time.slice(3,5);
    segundos ++;
    if (segundos < 10){
        segundos = "0" + segundos;
    } else if (segundos == 60){
        segundos = "00";
        minutos ++;
        if (minutos < 10){
            minutos = "0" + minutos;
        }
    }
    time = minutos + ":" + segundos;
    document.getElementById("estadoChamada").textContent = time;
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
