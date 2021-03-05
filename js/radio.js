var nomes = ["Rádio Comercial", "RFM", "Antena 2", "M80", "Radar", "SBSR", "Vodafone", "Oxigénio"];

document.getElementById("clickable").onclick = function () {
    var nome = event.target.textContent;
    localStorage.setItem("fb", nomes.indexOf(nome));
    location.href = "radioATocarMusica.html";
};
