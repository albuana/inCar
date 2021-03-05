
document.getElementById("tempLeftUp").onclick = function () {
     var val = document.getElementById("tempLeft").textContent;
     var num = parseFloat(val);
     num += 0.5;
     document.getElementById("tempLeft").textContent = num.toFixed(1) + "º";
};

document.getElementById("tempLeftDown").onclick = function () {
     var val = document.getElementById("tempLeft").textContent;
     var num = parseFloat(val);
     num -= 0.5;
     document.getElementById("tempLeft").textContent = num.toFixed(1) + "º";
};

document.getElementById("tempRightUp").onclick = function () {
     var val = document.getElementById("tempRight").textContent;
     var num = parseFloat(val);
     num += 0.5;
     document.getElementById("tempRight").textContent = num.toFixed(1) + "º";
};

document.getElementById("tempRightDown").onclick = function () {
     var val = document.getElementById("tempRight").textContent;
     var num = parseFloat(val);
     num -= 0.5;
     document.getElementById("tempRight").textContent = num.toFixed(1) + "º";
};

document.getElementById("ventUp").onclick = function () {
     var str = document.getElementById("ventImg").src;
     var len = str.length;
     var ind = parseFloat(str[len - 5]);
     if (ind < 5){
         var res = str.replace("vent" + ind, "vent" + (ind + 1));
         document.getElementById("ventImg").src = res;
     }
};

document.getElementById("ventDown").onclick = function () {
     var str = document.getElementById("ventImg").src;
     var len = str.length;
     var ind = parseFloat(str[len - 5]);
     if (ind > 0){
         var res = str.replace("vent" + ind, "vent" + (ind - 1));
         document.getElementById("ventImg").src = res;
     }
};

document.getElementById("b1").onclick = function () {
    console.log(document.getElementById("b1").style.backgroundColor + " .");
    if (document.getElementById("b1").style.backgroundColor == "lightblue"){
        document.getElementById("b1").style.backgroundColor = "rgb(200, 200, 200)";
    } else {
        document.getElementById("b1").style.backgroundColor = "lightblue";
    }
};

document.getElementById("b2").onclick = function () {
    console.log(document.getElementById("b2").style.backgroundColor + " .");
    if (document.getElementById("b2").style.backgroundColor == "lightblue"){
        document.getElementById("b2").style.backgroundColor = "rgb(200, 200, 200)";
    } else {
        document.getElementById("b2").style.backgroundColor = "lightblue";
    }
};

document.getElementById("b3").onclick = function () {
    console.log(document.getElementById("b3").style.backgroundColor + " .");
    if (document.getElementById("b3").style.backgroundColor == "lightblue"){
        document.getElementById("b3").style.backgroundColor = "rgb(200, 200, 200)";
    } else {
        document.getElementById("b3").style.backgroundColor = "lightblue";
    }
};

document.getElementById("b4").onclick = function () {
    console.log(document.getElementById("b4").style.backgroundColor + " .");
    if (document.getElementById("b4").style.backgroundColor == "lightblue"){
        document.getElementById("b4").style.backgroundColor = "rgb(200, 200, 200)";
    } else {
        document.getElementById("b4").style.backgroundColor = "lightblue";
    }
};

document.getElementById("b5").onclick = function () {
    console.log(document.getElementById("b5").style.backgroundColor + " .");
    if (document.getElementById("b5").style.backgroundColor == "lightblue"){
        document.getElementById("b5").style.backgroundColor = "rgb(200, 200, 200)";
    } else {
        document.getElementById("b5").style.backgroundColor = "lightblue";
    }
};

document.getElementById("ligar").onclick = function () {
    var state = document.getElementById("ligar");
    if (state.style.backgroundColor == "green"){
        document.getElementById("ligar").style.backgroundColor = "red";
    } else {
        document.getElementById("ligar").style.backgroundColor = "green";
    }
};
