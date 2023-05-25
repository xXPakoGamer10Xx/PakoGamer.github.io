const links = document.querySelectorAll('#indice a');

links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const href = link.getAttribute('href');
    const target = document.querySelector(href);
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

var prefixes = {
  yotta: 1e24,
  zetta: 1e21,
  exa: 1e18,
  peta: 1e15,
  tera: 1e12,
  giga: 1e9,
  mega: 1e6,
  kilo: 1e3,
  hecto: 1e2,
  deca: 1e1,
  deci: 1e-1,
  centi: 1e-2,
  milli: 1e-3,
  micro: 1e-6,
  nano: 1e-9,
  pico: 1e-12,
  femto: 1e-15,
  atto: 1e-18,
  zepto: 1e-21,
  yocto: 1e-24
};

// Función para convertir a notación científica
function convertToScientific(number, prefix) {
  if (prefixes.hasOwnProperty(prefix)) {
    return (number * prefixes[prefix]).toExponential(2);
  }
  return "Prefijo no válido";
}

// Función para manejar el evento click del botón de conversión
function convertirNotacion() {
  // Obtener el número ingresado por el usuario
  var numero = parseFloat(document.getElementById("numero").value);

  // Obtener el prefijo de entrada seleccionado
  var entrada = document.getElementById("entrada").value;

  // Obtener el prefijo de salida seleccionado
  var salida = document.getElementById("salida").value;

  // Convertir el número a notación científica
  var resultadoCientifico = convertToScientific(numero, entrada);

  // Convertir el número de notación científica a la notación seleccionada
  var resultadoFinal = convertToScientific(parseFloat(resultadoCientifico), salida);

  // Mostrar el resultado
  document.getElementById("resultado").textContent = resultadoFinal;
}
