const cuadrado = document.querySelectorAll(".cuadrado");
const tiempofaltante = document.querySelectorAll("#tiempo");
let puntaje = document.getElementById("puntaje");

let resultado = 0;
let tiempoactual = tiempofaltante.textContent;
let posiciontopo = null;

function cuadradoazar() {
cuadtrado.forEach((nombredeclase) => {
  nombredeclase.classlist.remove("topo");
});

let posicionalazar = cuadrado[Math.floor (Math.random()*9];
posicionalazar.classlist.add("topo");

posiciontopo = posicionalazar.id;