// =======================================================
// 1. Obtener los elementos del DOM por su ID
// =======================================================
const textoContador = document.getElementById("contador");
const boton = document.getElementById("btn-like");
const tbody = document.getElementById("tbody-registros");

// Variable de estado que almacena el numero de clics
let likes = 0;

// =======================================================
// 2. Escuchar el evento 'click' y manipular el DOM
// =======================================================
boton.addEventListener("click", () => {
  // Incrementamos el contador
  likes++;
  textoContador.textContent = likes; // Actualizamos el DOM directamente

  // Captura de la marca de tiempo (timestamp)
  const ahora = new Date();
  const hora = String(ahora.getHours()).padStart(2, "0");
  const minutos = String(ahora.getMinutes()).padStart(2, "0");
  const segundos = String(ahora.getSeconds()).padStart(2, "0");
  const horaFormateada = `${hora}:${minutos}:${segundos}`; // Formato HH:MM:SS

  // Insercion dinamica de filas en la tabla
  const fila = document.createElement("tr");

  const celdaNumero = document.createElement("td");
  celdaNumero.textContent = likes;

  const celdaHora = document.createElement("td");
  celdaHora.textContent = horaFormateada;

  fila.appendChild(celdaNumero);
  fila.appendChild(celdaHora);

  // Insertamos la nueva fila al INICIO del tbody
  // para que el registro mas reciente quede arriba
  tbody.insertBefore(fila, tbody.firstChild);
});
