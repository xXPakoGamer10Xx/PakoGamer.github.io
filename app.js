const links = document.querySelectorAll('#indice a');

links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const href = link.getAttribute('href');
    const target = document.querySelector(href);
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Función para convertir de notación científica a decimal
function convertirNotacion() {
  var numero = parseFloat(document.getElementById("numero").value);
  var entrada = parseFloat(document.getElementById("entrada").value);
  var salida = parseFloat(document.getElementById("salida").value);

  var resultado = numero * Math.pow(10, entrada - salida);
  resultado = resultado.toFixed(10); // Limita a 10 dígitos después del punto decimal
  document.getElementById("resultado").innerText = resultado;
}

//Convertidor de unidades a SD
function actualizarUnidades() {
  const tipoUnidad = document.getElementById("tipoUnidad").value;
  const unidadEntrada = document.getElementById("unidadEntrada");
  const unidadSalida = document.getElementById("unidadSalida");

  unidadEntrada.innerHTML = "";
  unidadSalida.innerHTML = "";

  switch (tipoUnidad) {
    case "distancia":
      agregarOpcion(unidadEntrada, "kilo", "kilómetros");
      agregarOpcion(unidadSalida, "kilo", "kilómetros");
      agregarOpcion(unidadEntrada, "hecto", "hectómetros");
      agregarOpcion(unidadSalida, "hecto", "hectómetros");
      agregarOpcion(unidadEntrada, "deca", "decámetros");
      agregarOpcion(unidadSalida, "deca", "decámetros");
      agregarOpcion(unidadEntrada, "deci", "decímetros");
      agregarOpcion(unidadSalida, "deci", "decímetros");
      agregarOpcion(unidadEntrada, "centi", "centímetros");
      agregarOpcion(unidadSalida, "centi", "centímetros");
      agregarOpcion(unidadEntrada, "mili", "milímetros");
      agregarOpcion(unidadSalida, "mili", "milímetros");
      break;
    case "masa":
      agregarOpcion(unidadEntrada, "kilo", "kilogramos");
      agregarOpcion(unidadSalida, "kilo", "kilogramos");
      agregarOpcion(unidadEntrada, "hecto", "hectogramos");
      agregarOpcion(unidadSalida, "hecto", "hectogramos");
      agregarOpcion(unidadEntrada, "deca", "decagramos");
      agregarOpcion(unidadSalida, "deca", "decagramos");
      agregarOpcion(unidadEntrada, "deci", "decigramos");
      agregarOpcion(unidadSalida, "deci", "decigramos");
      agregarOpcion(unidadEntrada, "centi", "centigramos");
      agregarOpcion(unidadSalida, "centi", "centigramos");
      agregarOpcion(unidadEntrada, "mili", "miligramos");
      agregarOpcion(unidadSalida, "mili", "miligramos");
      break;
    case "volumen":
      agregarOpcion(unidadEntrada, "kilo", "kilolitros");
      agregarOpcion(unidadSalida, "kilo", "kilolitros");
      agregarOpcion(unidadEntrada, "hecto", "hectolitros");
      agregarOpcion(unidadSalida, "hecto", "hectolitros");
      agregarOpcion(unidadEntrada, "deca", "decalitros");
      agregarOpcion(unidadSalida, "deca", "decalitros");
      agregarOpcion(unidadEntrada, "deci", "decilitros");
      agregarOpcion(unidadSalida, "deci", "decilitros");
      agregarOpcion(unidadEntrada, "centi", "centilitros");
      agregarOpcion(unidadSalida, "centi", "centilitros");
      agregarOpcion(unidadEntrada, "mili", "mililitros");
      agregarOpcion(unidadSalida, "mili", "mililitros");
      break;
  }
}

function agregarOpcion(selectElement, valor, texto) {
  const option = document.createElement("option");
  option.value = valor;
  option.textContent = texto;
  selectElement.appendChild(option);
}

function convertir() {
  const cantidad = parseFloat(document.getElementById("cantidad").value);
  const unidadEntrada = document.getElementById("unidadEntrada").value;
  const unidadSalida = document.getElementById("unidadSalida").value;

  const factorConversion = obtenerFactorConversion(unidadEntrada, unidadSalida);
  const resultado = cantidad * factorConversion;

  document.getElementById("result").textContent = resultado.toFixed(5);
}

function obtenerFactorConversion(unidadEntrada, unidadSalida) {
  const factoresConversion = {
    kilo: { kilo: 1, hecto: 10, deca: 100, deci: 1000, centi: 10000, mili: 1000000 },
    hecto: { kilo: 0.1, hecto: 1, deca: 10, deci: 100, centi: 1000, mili: 100000 },
    deca: { kilo: 0.01, hecto: 0.1, deca: 1, deci: 10, centi: 100, mili: 10000 },
    deci: { kilo: 0.001, hecto: 0.01, deca: 0.1, deci: 1, centi: 10, mili: 1000 },
    centi: { kilo: 0.0001, hecto: 0.001, deca: 0.01, deci: 0.1, centi: 1, mili: 100 },
    mili: { kilo: 0.000001, hecto: 0.00001, deca: 0.0001, deci: 0.001, centi: 0.01, mili: 1 }
  };

  return factoresConversion[unidadEntrada][unidadSalida];
}

//Scroll para subir la pagina
var scrollButton = document.getElementById("scrollButton");
window.addEventListener("scroll", toggleScrollButton);

function toggleScrollButton() {
  if (window.pageYOffset > 20) {
    scrollButton.style.opacity = "1";
    scrollButton.style.pointerEvents = "auto";
  } else {
    scrollButton.style.opacity = "0";
    scrollButton.style.pointerEvents = "none";
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}


//Barra de menu
function toggleMenu() {
  var navbarMenu = document.getElementById("navbarMenu");
  navbarMenu.classList.toggle("show");
}

const navbarToggle = document.getElementById('navbar-toggle');
const navbarMenu = document.getElementById('navbar-menu');

navbarToggle.addEventListener('click', function() {
  this.classList.toggle('open');
  navbarMenu.classList.toggle('show');
});

//Calculadora de coloumb
function calcularFuerza() {
  // Obtener los valores ingresados por el usuario
  var carga1 = parseFloat(document.getElementById("carga1").value);
  var carga2 = parseFloat(document.getElementById("carga2").value);
  var distancia = parseFloat(document.getElementById("distancia").value);

  // Calcular la fuerza según la Ley de Coulomb
  var k = 9 * Math.pow(10, 9); // Constante de Coulomb
  var fuerza = (k * (carga1 * carga2) / Math.pow(distancia, 2)) * Math.pow(10, -3);

  // Mostrar el resultado en la celda de resultado
  var resultadoElement = document.getElementById("resultado3");
  resultadoElement.innerHTML = "La fuerza es: " + fuerza.toExponential(3) + " N";

  // Determinar si es atracción o repulsión
  if (fuerza > 0) {
    resultadoElement.innerHTML += " (Atracción)";
  } else if (fuerza < 0) {
    resultadoElement.innerHTML += " (Repulsión)";
  }
}

//Submenus
function showSubMenu(subMenuId) {
  var subMenu = document.getElementById(subMenuId);
  subMenu.style.display = "block";
}

function hideSubMenu(subMenuId) {
  var subMenu = document.getElementById(subMenuId);
  subMenu.onmouseout = function (event) {
    if (!subMenu.contains(event.relatedTarget)) {
      subMenu.style.display = "none";
    }
  };
}

//Ocultar la barra de deslizamiento
function showSubMenu(subMenuId) {
  var subMenu = document.getElementById(subMenuId);
  subMenu.style.display = "block";
  subMenu.style.overflowY = "scroll";
  subMenu.style.scrollbarColor = "#fff #fff"; // Cambia el color de la barra de desplazamiento según tus necesidades
}

//Calculadora de hooks
function calcularFuerzaHooke() {
  // Get the values from the input fields
  const constante = document.getElementById("constante").value;
  const deformacion = document.getElementById("deformacion").value;

  // Calcula la deformacion
  const fuerza = constante * deformacion;

  // Muestra el resultado
  document.getElementById("resultado2").innerHTML = fuerza;
}
