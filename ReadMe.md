# Juego Interactivo en JavaScript

## Descripcion
Este es un juego interactivo basado en HTML, CSS y JavaScript donde el jugador, en el papel de un héroe, debe moverse por un tablero de 10x10 celdas y llegar a un cofre que está ubicado en la esquina inferior derecha del tablero. El jugador lanza un dado para determinar cuántos pasos puede moverse en cada turno y debe navegar por el tablero evitando obstáculos.

## Tecnologías utilizadas
HTML5: Estructura básica del juego, con un formulario para ingresar el nombre del jugador, una tabla para representar el tablero, y botones para interactuar con el juego.
CSS3: Estilos visuales para el diseño del tablero, los botones y la interfaz del juego, incluyendo imágenes de fondo y representaciones visuales de elementos como el héroe y el tesoro.
JavaScript: Lógica de interacción del juego, incluida la validación de nombre del jugador, el movimiento del héroe, la generación de tiradas de dado aleatorias, y la gestión de récords.
Características
Pantalla inicial con formulario de nombre: El jugador debe ingresar su nombre (mínimo 4 caracteres y sin números) para comenzar.
Generación de tablero de juego: Un tablero de 10x10 celdas es creado, con el héroe (representado por una imagen) en la esquina superior izquierda y el tesoro (una zanahoria) en la esquina inferior derecha.
Movimiento del héroe: Después de lanzar el dado, el jugador puede mover su héroe a las celdas resaltadas, basándose en el número obtenido en la tirada.
Registro de récord: Cuando el jugador alcanza el cofre, se guarda el récord de tiradas necesarias para completar el juego, comparándolo con el récord anterior (almacenado en el localStorage).
Interactividad: El jugador puede interactuar con el tablero, moviendo al héroe a celdas resaltadas y siguiendo las reglas del juego.
Resaltado de posibles movimientos: El dado determina cuántos pasos puede avanzar el jugador, y las celdas disponibles se resaltan para guiarlo en su próximo movimiento.
Mensajes de victoria y récord: Si el jugador alcanza el cofre, recibe un mensaje de victoria y se le informa si ha batido su récord personal.

## Instrucciones de uso
Inicio del juego:

Ingrese un nombre en el formulario de inicio.
El nombre debe tener al menos 4 caracteres y no debe contener números.

1. Jugar:

Una vez validado el nombre, haga clic en el botón "Introducir nombre" para continuar.
Haga clic en el botón "Jugar" para iniciar el juego.
Al hacer clic en "Jugar", se generará un tablero con el héroe en la esquina superior izquierda y el cofre en la esquina inferior derecha.

2. Tirar el dado:

Haga clic en el botón "Tirar dado" para generar un número aleatorio entre 1 y 6.
El número de la tirada indica cuántos pasos puede mover al héroe en cualquier dirección (arriba, abajo, izquierda o derecha).
Las celdas posibles para moverse se resaltarán, y el jugador podrá hacer clic en una celda para mover al héroe.

3. Objetivo:

El objetivo es llegar al cofre (ubicado en la esquina inferior derecha).
Una vez que el héroe alcance el cofre, el juego se detendrá y se mostrará un mensaje de victoria.
Récord:

Si el jugador establece un nuevo récord, se guardará en el almacenamiento local del navegador.

## Estructura de Archivos
index.html: Contiene la estructura HTML básica del juego, incluidos los formularios y botones de interacción.
estilo.css: Contiene los estilos visuales del juego, incluidos los estilos para las celdas del tablero, los botones, y los mensajes.
script.js: Contiene la lógica de JavaScript para la interacción del jugador, validación del nombre, generación de movimientos, cálculo de tiradas y gestión del récord.
Imágenes y Recursos
fondo.jpg: Imagen de fondo que cubre toda la pantalla del juego.
heroe.png: Imagen que representa al héroe (por ejemplo, Bugs Bunny).
zanahoria.png: Imagen del tesoro (zanahoria).
Requisitos
Un navegador moderno que soporte HTML5, CSS3 y JavaScript.
El juego se puede ejecutar localmente sin necesidad de servidores externos.

## Notas
El juego está diseñado para ser simple y fácil de jugar. La interfaz está pensada para ser visualmente atractiva y clara.
Los mensajes de error y éxito son proporcionados para ayudar a guiar al jugador a lo largo del juego.