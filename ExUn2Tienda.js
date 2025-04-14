var total = [];
////////////////
// Aqui van las funciones //
function AgreCarro1() {
    var botonElement = document.getElementById("boton1");
    var pElement = document.getElementById("uno");
    var contador = 0;
    botonElement.onclick = function () {
        contador++;
        pElement.textContent = contador;
        var los3 = parseInt(document.getElementById('numero1').value);
        total.push(los3);
    }
}

function AgreCarro2() {
    var botonElement = document.getElementById("boton2");
    var pElement = document.getElementById("uno");
    var contador = 0;
    botonElement.onclick = function () {
        contador++;
        pElement.textContent = contador;
        var los3 = parseInt(document.getElementById('numero2').value);
        total.push(los3);
    }
}

function AgreCarro3() {
    var botonElement = document.getElementById("boton3");
    var pElement = document.getElementById("dos");
    var contador = 0;
    botonElement.onclick = function () {
        contador++;
        pElement.textContent = contador;
        var los3 = parseInt(document.getElementById('numero3').value);
        total.push(los3);
    }
}

function AgreCarro4() {
    var botonElement = document.getElementById("boton4");
    var pElement = document.getElementById("dos");
    var contador = 0;
    botonElement.onclick = function () {
        contador++;
        pElement.textContent = contador;
        var los3 = parseInt(document.getElementById('numero4').value);
        total.push(los3);
    }
}

function Calcular() {
    let uno = document.getElementById("uno");
    let monitorValue = parseInt(uno.innerHTML);

    let dos = document.getElementById("dos");
    var dosValue = parseInt(dos.innerHTML);
    
    let sum = 0;

    for (let index = 0; index < total.length; index++) {
        sum += total[index];
    }
    document.getElementById("resultado").value = sum;
}