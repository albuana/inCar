document.addEventListener('DOMContentLoaded', move);
document.addEventListener('DOMContentLoaded', main);

var pp = 0;
var width = 0;
var aux = 0;
var time = document.getElementById("p1Footer").textContent;
var increase = 100/165;

function main(){
	var buttonPause = document.getElementById('pause');
	buttonPause.addEventListener('click', playOrPause);
	atualizarHora();
	setInterval(atualizarHora, 60000);
	setInterval(atualizarTempo, 1000);
}

function playOrPause(){
	var buttonPause = document.getElementById('pause');
	if(pp == 0){
		pp++;
		buttonPause.innerHTML = '<button id="pause" style="background:rgb(200,200,200); borden:none; padding:0px 0px; outline: 0"><img src="icons/play.png" width="100" height="85"></button>'
		aux = 100;
	} else {
		pp--;
		buttonPause.innerHTML = '<button id="pause" style="background:rgb(200,200,200); borden:none; padding:0px 0px; outline: 0"><img src="icons/pause.png" width="100" height="100"></button>'
		aux = width;
		move();
	}
}

function move() {
  var elem = document.getElementById("bar");
  var id = setInterval(frame, 500);
  function frame() {
    if (width >= 100 || aux == 100) {
      clearInterval(id);
    } else {
      width += increase/2;
      elem.style.width = width + '%';
    }
  }
}

document.getElementById("back").onclick = function () {
	location.href = "playlistsMusica.html";
};

function atualizarTempo (){
	if(aux != 100){
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
		document.getElementById("p1Footer").textContent = time + '						02:45';
	} else {
		document.getElementById("p1Footer").textContent = time + '						02:45';
	}
}
