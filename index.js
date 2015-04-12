// Variables
var masa;
var	velocidad;
var	velocidadcuadrado;
var	altura = 6;
var gravedad = 9.8;
var	energiaCinetica;
var energiaCineticaDecimal;
var	energiaPotencial;
var energiaPotencialDecimal;
var	energiaMecanica;
var masaq;
var velocidadq;
var alturaq;
var velocidadcuadrado;
var b = document.getElementById("btn");
var m = document.getElementById("masa");
var v = document.getElementById("velocidad");
var h = document.getElementById("altura");

b.addEventListener("click", preguntarDatos);
// Functions
function preguntarDatos () {
	masaq = m.value;
	masa = parseInt(masaq);
	velocidadq = v.value;
	velocidad = parseInt(velocidadq);
	alturaq = h.value;
	altura = parseInt(alturaq);

	velocidadcuadrado = velocidad * velocidad;
	energiaCinetica = masa * velocidadcuadrado / 2;
	energiaCineticaDecimal = energiaCinetica.toFixed(1);
	eCinetica = parseInt(energiaCineticaDecimal);
	energiaPotencial = masa * gravedad * altura;
	energiaPotencialDecimal = energiaPotencial.toFixed(1);
	ePotencial = parseInt(energiaPotencialDecimal);

	energiaMecanica = eCinetica + ePotencial;

	m.value = "";
	v.value = "";
	h.value = "";

	var clone = document.querySelector('#results');
	clone.querySelector("#Ec").innerHTML = "Energía Cinética: " + energiaCinetica + " Julios";
	clone.querySelector("#Ep").innerHTML = "Energía Potencial Gravitatoria: " + energiaPotencial + " Julios";
	clone.querySelector("#Em").innerHTML = "Energía Mecánica: " + energiaMecanica + " Julios";
}