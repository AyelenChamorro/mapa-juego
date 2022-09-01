

var vp = document.getElementById("villa");
var papel = vp.getContext("2d");


var vaca = {
    url: "./imagenes/vaca.png",
    cargaOk: false
};
var fondo = {
    url: "./imagenes/tile.png",
    cargaOk: false
};
var cerdo = {
    url: "./imagenes/cerdo.png",
    cargaOk: false
};
var pollo = {
    url: "./imagenes/pollo.png",
    cargaOk: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

function cargarFondo() {
fondo.cargaOk = true;
dibujar();
}
function cargarVacas() {
    vaca.cargaOk = true;
    dibujar();
}
function cargarCerdos() {
    cerdo.cargaOk = true;
    dibujar();
}
function cargarPollos() {
    pollo.cargaOk = true;
    dibujar();
}

function dibujar() {
    if(fondo.cargaOk){
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if (vaca.cargaOk) {
        var cantidad = aleatorio(5, 25);
        for (v=0; v < cantidad; v++){
            var x = aleatorio(0, 5);
            var y = aleatorio(0, 5);
            var x = x * 80;
            var y = y * 80; 
            papel.drawImage(vaca.imagen, x, y);
        }
       
    }
    if (cerdo.cargaOk) {
        var cantidad = aleatorio(5, 25);
        for (c = 0; c < cantidad; c++) {
            var x = aleatorio(0, 5);
            var y = aleatorio(0, 5);
            var x = x * 80;
            var y = y * 80;
            papel.drawImage(cerdo.imagen, x, y);
        }

    }
    if (pollo.cargaOk) {
        var cantidad = aleatorio(5, 25);
        for (p = 0; p < cantidad; p++) {
            var x = aleatorio(0, 5);
            var y = aleatorio(0, 5);
            var x = x * 80;
            var y = y * 80;
            papel.drawImage(pollo.imagen, x, y);
        }

    }

}



function aleatorio(min, maxi) {
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}
