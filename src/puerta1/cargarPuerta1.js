function obtenerCitasActuales() {
  fetch("https://ferreous-realinemen.000webhostapp.com/mostrarPuerta.php?puerta=1")
    .then((response) => response.json())
    .then((data) => {
      // Procesa los datos recibidos y actualiza las tablas
      const tablaActuales = document.querySelector("#tablaActuales tbody");
      console.log(data);
      // Limpia las tablas antes de actualizarlas
      tablaActuales.innerHTML = "";
      if (data.length === 0) {
        // No hay datos, mostrar mensaje
        mostrarMensaje(tablaActuales, "No hay citas para mostrar");
        return;
      }

      //console.log(data);
      data.forEach((item) => {
        const row = document.createElement("tr");

        row.classList.add("hora-actual");
        tablaActuales.appendChild(row);
        row.innerHTML = `<td>${item.Nombre}  ${item.Apellido}</td><td>${item.Marca}</td><td>${item.Placa}</td><td>${item.Color}</td><td>${item.Fecha}</td><td>${item.Modulo}</td>`;
      });
      // Hay datos, ocultar mensaje en la tabla correspondiente
      if(tablaActuales.innerHTML == ""){
        mostrarMensaje(tablaActuales, "No hay citas para mostrar");
      }
    })
    .catch((error) => console.error("Error al obtener los datos:", error));

  // Luego, verifica y elimina registros obsoletos
  
}

function obtenerCitasPasadas() {
  fetch("https://ferreous-realinemen.000webhostapp.com/citasPasadas.php?puerta=1")
    .then((response) => response.json())
    .then((data) => {
      // Procesa los datos recibidos y actualiza las tablas
      const tablaPasadas = document.querySelector("#tablaPasadas tbody");
      console.log(data);
      // Limpia las tablas antes de actualizarlas
      tablaPasadas.innerHTML = "";
      if (data.length === 0) {
        // No hay datos, mostrar mensaje
        mostrarMensaje(tablaPasadas, "No hay citas para mostrar");
        return;
      }

      //console.log(data);
      data.forEach((item) => {
        const row = document.createElement("tr");
        
        row.classList.add("hora-futura");
        tablaPasadas.appendChild(row);
        row.innerHTML = `<td>${item.Nombre}  ${item.Apellido}</td><td>${item.Marca}</td><td>${item.Placa}</td><td>${item.Color}</td><td>${item.Fecha}</td><td>${item.Modulo}</td>`;
      });
      // Hay datos, ocultar mensaje en la tabla correspondiente
      if (tablaPasadas.innerHTML == "") {
        mostrarMensaje(tablaPasadas, "No hay citas para mostrar");
      }
    })
    .catch((error) => console.error("Error al obtener los datos:", error));

  // Luego, verifica y elimina registros obsoletos
  
}

function obtenerCitasFuturas() {
  fetch("https://ferreous-realinemen.000webhostapp.com/citasFuturas.php?puerta=1")
    .then((response) => response.json())
    .then((data) => {
      // Procesa los datos recibidos y actualiza las tablas
      const tablaFuturas = document.querySelector("#tablaFuturas tbody");
      console.log(data);
      // Limpia las tablas antes de actualizarlas
      tablaFuturas.innerHTML = "";
      if (data.length === 0) {
        // No hay datos, mostrar mensaje
        mostrarMensaje(tablaFuturas, "No hay citas para mostrar");
        return;
      }

      //console.log(data);
      data.forEach((item) => {
        const row = document.createElement("tr");
        
        row.classList.add("hora-pasada");
        tablaFuturas.appendChild(row);
        row.innerHTML = `<td>${item.Nombre}  ${item.Apellido}</td><td>${item.Marca}</td><td>${item.Placa}</td><td>${item.Color}</td><td>${item.Fecha}</td><td>${item.Modulo}</td>`;
      });
      // Hay datos, ocultar mensaje en la tabla correspondiente
      if (tablaFuturas.innerHTML == "") {
        mostrarMensaje(tablaFuturas, "No hay citas para mostrar");
      }
    })
    .catch((error) => console.error("Error al obtener los datos:", error));

  // Luego, verifica y elimina registros obsoletos
  
}

function mostrarMensaje(tabla, mensaje) {
  tabla.innerHTML = `<tr><td colspan="6">${mensaje}</td></tr>`;
}

// Llama a la función inicialmente al cargar la página
obtenerCitasActuales();
obtenerCitasPasadas();
obtenerCitasFuturas();

setInterval(obtenerCitasActuales, 1000); // 1000 milisegundos (1 segundo)
setInterval(obtenerCitasPasadas, 1000); // 1000 milisegundos (1 segundo)
setInterval(obtenerCitasFuturas, 1000); // 1000 milisegundos (1 segundo)