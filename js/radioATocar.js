document.addEventListener('DOMContentLoaded', abrir);

var nomes = ["Rádio Comercial", "RFM", "Antena 3", "M80", "Radar", "SBSR", "Vodafone", "Oxigénio"];

function abrir() {
	var fb;
	if (localStorage.getItem("fb") === null){
		fb = 0;
		localStorage.setItem("fb", fb);
	    document.getElementById("nomeRadio").textContent = "Rádio Comercial";
		document.getElementById("rad").src="icons/r1.png"
	} else {
		fb = parseInt(localStorage.getItem("fb"));
		var nome = nomes[fb];
	    document.getElementById("nomeRadio").textContent = nome;
		document.getElementById("rad").src="icons/r" + (fb + 1) + ".png"
	}
	if (localStorage.getItem("onOff") === null){
		document.getElementById("rad").src="icons/r" + (fb + 1) + ".png";
		localStorage.setItem("onOff", true);
	} else {
		var flag = localStorage.getItem("onOff");
		if (flag == "true"){
			document.getElementById("rad").src="icons/r" + (fb + 1) + ".png";
		} else {
			document.getElementById("rad").src="icons/radiOff.png";
		}
	}
};

document.getElementById("forward").onclick = function () {
	var flag = localStorage.getItem("onOff");
	var fb = localStorage.getItem("fb");
	if(flag == "true"){
		var fb = parseInt(localStorage.getItem("fb"));
		fb += 1;
		if (fb > 4){
			fb = 0;
		}
		var nome = nomes[fb];
		var h1 = document.getElementById('nomeRadio');
		h1.innerHTML = '<h4 id="nomeRadio">' + nome + '<h4>'
		document.getElementById("rad").src="icons/r" + (fb + 1) + ".png"
		localStorage.setItem("fb", fb);
	}
};

document.getElementById("backward").onclick = function () {
	var flag = localStorage.getItem("onOff");
	if(flag == "true"){
		var fb = parseInt(localStorage.getItem("fb"));
		fb -= 1;
		if (fb < 0){
			fb = 4;
		}
		var nome = nomes[fb];
		var h1 = document.getElementById('nomeRadio');
		h1.innerHTML = '<h4 id="nomeRadio">' + nome + '<h4>'
		document.getElementById("rad").src="icons/r" + (fb + 1) + ".png"
		localStorage.setItem("fb", fb);
	}
};

document.getElementById("onOf").onclick = function() {
	var flag = localStorage.getItem("onOff");
	var fb = parseInt(localStorage.getItem("fb"));
	if(flag == "true"){
		document.getElementById("rad").src="icons/radiOff.png";
		localStorage.setItem("onOff", false);
	} else {
		document.getElementById("rad").src="icons/r" + (fb + 1) + ".png";
		localStorage.setItem("onOff", true);
	}
};

document.getElementById("back").onclick = function () {
	location.href = "radioMusica.html";
};
