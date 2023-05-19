const links = document.querySelectorAll('#indice a');

links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const href = link.getAttribute('href');
    const target = document.querySelector(href);
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

function convertirNotacion() {
  // Obtener los valores ingresados por el usuario
  var numero = parseFloat(document.getElementById('numero').value);
  var potencia = parseInt(document.getElementById('potencia').value);

  // Realizar la conversión a notación científica
  var resultadoNotacion = numero + ' x 10^' + potencia;
  var resultadoNumerico = numero * Math.pow(10, potencia);

  // Redondear el resultado numérico al número exacto de decimales según la potencia
  var decimales = Math.abs(potencia);
  resultadoNumerico = resultadoNumerico.toFixed(decimales);

  // Mostrar la notación y el resultado en los elementos <span>
  document.getElementById('notacion').textContent = "Notación científica: " + resultadoNotacion;
  document.getElementById('resultado').textContent = resultadoNumerico;
}
