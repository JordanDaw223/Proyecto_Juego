'use strict';

addEventListener("DOMContentLoaded",inicio);

function inicio(){

   // Variables globales
   let nombre = document.getElementById("name"); // Campo de texto del nombre
   const formulario = document.querySelector("form");
   const tablaContainer = document.getElementById("tablaContainer"); // Contenedor de la tabla
   const nombreError = document.getElementById("nombreError"); // Mensaje de error del nombre
   const jugarBtn = document.getElementById("jugar"); // Botón de jugar
   const tirarDadoBtn = document.getElementById("tirarDado"); // Botón para tirar el dado
   const mensaje = document.getElementById("mensaje"); // Mensaje de estado
   let posicionHeroe = { x: 0, y: 0 }; // Creo un objeto para marcar la posición actual del héroe
   let tiradas = 0; // Contador de tiradas
   let movido = true; // Variable para verificar si el héroe se movió
   const tirada = document.getElementById("tirada");

   // Evento para validar el formulario al enviarlo
   formulario.addEventListener("submit", enviarFormulario);
   function enviarFormulario(ev) {
       ev.preventDefault(); // Evita recargar la página al enviar el formulario
       if (validarNombre()) { // Verifica si el nombre es válido
           document.getElementById("bienvenida").textContent = `¡A luchar héroe: ${nombre.value}!`; // Mensaje de bienvenida
           jugarBtn.disabled = false; // Habilita el botón de jugar
          
       }
   }

   // Evento para iniciar el juego
   jugarBtn.addEventListener("click", iniciarJuego)
    function iniciarJuego(ev) {
       jugarBtn.style.display = "none"; // Oculta el botón de jugar
       crearTablero(); // Crea el tablero del juego
       tirarDadoBtn.style.display = "inline-block"; // Muestra el botón para tirar el dado
       formulario.style.display = "none"; // Escondo el boton
       tirada.style.display = "flex"; // Muestra el dado
   }

   // Evento para tirar el dado y mostrar movimientos posibles
   tirarDadoBtn.addEventListener("click", numeroDado);
    function numeroDado(ev) {
        if (!movido) {// Comprobamos si el heroe ha sido movido
            alert("¡Debes moverte antes de volver a tirar el dado!");
            return; // No permite tirar el dado si no se movió
        }
       tiradas++; // Incrementa el contador de tiradas
       const dado = Math.floor(Math.random() * 6) + 1; // Genera un número aleatorio entre 1 y 6
       tirada.textContent=dado;
       
       mostrarMovimientos(dado); // Resalta las celdas donde puede moverse el héroe

       movido=false; // Cambiamos la variable a false para que tenga que volver a moverse
   }

   // Valida el nombre del jugador
   function validarNombre() {
       const valor = nombre.value.trim(); // Elimina espacios al inicio y al final
       if (valor.length < 4) { // Verifica que tenga al menos 4 caracteres
        nombreError.textContent = "El nombre debe tener al menos 4 letras.";// Mostramos mensaje de error de formato
           return false; // Retornamos un false porque no es un nombre aceptado
       } else if (/\d/.test(valor)) { // Verifica que no contenga números
        nombreError.textContent = "Números no permitidos."; // Mostramos mensaje de error de formato
           return false; // Retornamos un false porque no es un nombre aceptado
       }
       else{
        nombreError.textContent = ""; // Limpia el mensaje de error si es válido
       return true; // Retornamos un true si el formato del nombre es aceptado
       }
   }

   // Crea la cuadrícula del juego
   function crearTablero() {
       const tabla = document.createElement("table"); // Crea un elemento de tabla
       for (let i = 0; i < 10; i++) {
           const fila = document.createElement("tr"); // Crea una fila
           for (let j = 0; j < 10; j++) {
               const celda = document.createElement("td"); // Crea una celda
               celda.classList.add("suelo"); // Aplica la clase de suelo
               if (i === 0 && j === 0){
                celda.classList.add("heroe"); // Marca la posición inicial del héroe
               } 
               if (i === 9 && j === 9){
                celda.classList.add("cofre"); // Marca la posición del cofre
               }    
               celda.dataset.x = i; // Guarda las coordenadas X como atributo
               celda.dataset.y = j; // Guarda las coordenadas Y como atributo
               fila.appendChild(celda); // Añade la celda a la fila
           }
           tabla.appendChild(fila); // Añade la fila a la tabla
       }
       tablaContainer.appendChild(tabla); // Muestra la tabla en el contenedor
    }
   



// Calcula las posiciones posibles basadas en la posición actual y el numero del dado
function calcularMovimientos(posicionHeroe, dado) {
    
    const movimientos = []; // creo un array llamado movimientos
    for (let i = 1; i <= dado; i++) {// En este for calculo los movimientos que puede hacer el heroe en base al numero del dado
        // Movimientos hacia abajo aumentando y, siempre siendo menor que diez para que no se salga de la tabla
        if (posicionHeroe.y + i < 10) {
            // Aqui guardo un objeto con la posicion a la que puede avanzar el heroe en el array
            movimientos.push({ x: posicionHeroe.x, y: posicionHeroe.y + i });
        }
        // Movimientos hacia arriba disminuyendo y, siempre siendo mayor o igual a 0 para no salirse de la tabla
        if (posicionHeroe.y - i >= 0) {
             // Aqui guardo un objeto con la posicion a la que puede avanzar el heroe en el array
            movimientos.push({ x: posicionHeroe.x, y: posicionHeroe.y - i });
        }
        // Movimientos hacia la derecha aumentando x
        if (posicionHeroe.x + i < 10) {
            // Aqui guardo un objeto con la posicion a la que puede avanzar el heroe en el array, siempe siendo menor que 10
            movimientos.push({ x: posicionHeroe.x + i, y: posicionHeroe.y });
        }
        // Movimientos hacia la izquierda disminuyendo x, siempre siendo mayor o igual a 0
        if (posicionHeroe.x - i >= 0) {
             // Aqui guardo un objetocon la posicion a la que puede avanzar el heroe en el array
            movimientos.push({ x: posicionHeroe.x - i, y: posicionHeroe.y });
        }
    }
    // retorno el array con los posibles movimientos que puede hacer el heroe
    return movimientos;
}

    

// Resalta las celdas en la lista de movimientos posibles
function resaltarMovimientos(movimientos) {
    // recorro el array de movimientos y guardo en una variable celda cada elemento que coincide con las coordenadas
    // x e y de cada elemento del array
    movimientos.forEach(posiblesMovimientos => {
        const celda = document.querySelector(`td[data-x="${posiblesMovimientos.x}"][data-y="${posiblesMovimientos.y}"]`);
        // me aseguro que la variable celda no esta vacia
        if (celda) {
            celda.classList.add("resaltado"); // Resalta la celda
            celda.addEventListener("click", moverHeroe); // Agrega evento de movimiento del heroe en cada celda.
        }
    });
}

    // creo una funcion para mostrar los movimientos pasando por parametro la variable dado que es numero que nos ha tocado
    function mostrarMovimientos(dado) {
        limpiarResaltados(); // Limpia los resaltados previos
        const movimientosPosibles = calcularMovimientos(posicionHeroe, dado); // Calcula las celdas posibles y las guardo en una variable
        resaltarMovimientos(movimientosPosibles); // paso por parametro la variable que almacena las celdas posible para resaltarlas
}

   // Mueve al héroe a la celda seleccionada
   function moverHeroe(ev) {
       const celda = ev.target; // guardo en una variable la celda pulsada por el usuario
       const nuevaX = parseInt(celda.dataset.x); // Guardo la coordenada x de donde ha clicado el usuario
       const nuevaY = parseInt(celda.dataset.y); // Guardo la coordenada y de donde ha clicado el usuario
       // Verifica que el movimiento sea válido, utilizo un metodo de math, esto hace que el resultado de la operacion
       // no sea negativo y lo condiciono a que sea menor que 6 que es el maximo de casillas que se puede mover 
       // independiente del resultado
       if (Math.abs(nuevaX - posicionHeroe.x) + Math.abs(nuevaY - posicionHeroe.y) <= 6) {
         // Cojo todos los elementos que tengan la clase heroe y se la quito, así limpio la anterior celda en la que estaba
         // posicionado
           document.querySelector(".heroe").classList.remove("heroe");
           celda.classList.add("heroe"); // Añado la clase a la nueva celda en la que esta posicionado
           posicionHeroe = { x: nuevaX, y: nuevaY }; // Actualiza la posición del héroe, guardando las nuevas coordenadas
           movido = true; // cambiamos a true que el heroe se ha movido
           verificarVictoria(); // Llamo a la funcion para comprobar si al moverse el heroe ha ganado
       }
   }    

   // Limpia las celdas resaltadas previas
    function limpiarResaltados() {
        // Creo un array que guarda todos los elementos td que tengan la clase resaltado
        const celdasResaltadas = document.querySelectorAll("td.resaltado");
        // Recorro un con un forEach para recorrer el array de objetos, a cada elemento del array le quito la clase de que este resaltado
        // y tambien re quito el evento de escucha de mover el heroe
        celdasResaltadas.forEach(celda => {
        celda.classList.remove("resaltado");
        celda.removeEventListener("click", moverHeroe); // Elimina los eventos previos
        });
}

   // Comprueba si el héroe ha alcanzado el cofre
  function verificarVictoria() {
    if (posicionHeroe.x === 9 && posicionHeroe.y === 9) { // Si está en la posición del cofre
        tirarDadoBtn.disabled = true; // Desactiva el botón de tirar dado

        // Obtener el récord del localStorage, si no existe, usar Infinity
        let record = localStorage.getItem("record");
        if (record === null) {
            record = Infinity; // Si no existe, establece un valor muy alto para que cualquier número sea un récord
        } else {
            record = parseInt(record); // Convertir el valor del récord a número
        }

        // Verifica si hay un nuevo récord
        if (tiradas < record) {
            localStorage.setItem("record", tiradas); // Actualiza el récord en localStorage
            alert(`¡Felicidades, ${nombre.value}! Has ganado y establecido un nuevo récord con ${tiradas} tiradas.`);
        } else {
            alert(`¡Felicidades, ${nombre.value}! Has ganado con ${tiradas} tiradas. El récord actual es ${record}.`);
        }
    }
}

    
}
