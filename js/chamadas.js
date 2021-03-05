
document.getElementById("clickable").onclick = function () {
    var nome = event.target.textContent;
    if (nome != ""){
        localStorage.setItem("nomeContacto", nome);
        location.href = "emChamada.html";
    }
};
