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

// Functions
function preguntarDatos () {
	masaq = prompt("Indica la masa del cuerpo(En kg)", 1);
	masa = parseInt(masaq);
	velocidadq = prompt("Y su velocidad?(En m/s)", 20);
	velocidad = parseInt(velocidadq);
	alturaq = prompt("Finalmente, indica la distancia con el suelo(En metros)", 60);
	altura = parseInt(alturaq);

	velocidadcuadrado = velocidad * velocidad;
	energiaCinetica = masa * velocidadcuadrado / 2;
	energiaCineticaDecimal = energiaCinetica.toFixed(1);
	eCinetica = parseInt(energiaCineticaDecimal);
	energiaPotencial = masa * gravedad * altura;
	energiaPotencialDecimal = energiaPotencial.toFixed(1);
	ePotencial = parseInt(energiaPotencialDecimal);

	energiaMecanica = eCinetica + ePotencial;
}

preguntarDatos();