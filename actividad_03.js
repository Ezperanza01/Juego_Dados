/* JavaScript para Server Side actividad_03.html */

function func_juego() {
  // se genera un num aleatorio entero (1 - 50) y se guarda en una variable local
  let numAleatorio = parseInt(Math.random() * 50) + 1;
  // variables locales
  let num,
    usuario,
    intentos = 5;
  // limpia la consola
  console.clear("Inicia el Juego");

  // pide nimbre del jugador
  usuario = prompt("Hola, cuál es tu nombre? :");
  // opciones de acuerdo al nombre introducido
  switch (usuario) {
    case "":
      // si se presiona OK, pero no se escribe nombre
      console.log("Bienvenido Invitado !");
      usuario = "Invitado";
      break;
    case null:
      // si se presiona cancelar sale de la funcion
      return;
    default:
      // si se escribe un nombre y ser presiona OK
      console.log(`Bienvenido ${usuario} !`);
  }

  /* bucle que termina al agotar intentos o acertar el número */
  do {
    // despliega cuadro de solicitud de numero
    num = prompt(`${usuario}, ingresa un número del 1 al 50 (quedan ${intentos} intentos):`);
    /* despliega mensaje  segun el num introducido*/
    if (num == numAleatorio) {
      alert(`¡ ${usuario}, as acertado el número !`);
      console.warn("Acertaste");
    } else if (num === null) {
      console.error("Juego Cancelado");
      break;
    } else if (num == "") {
      console.warn("Perdiste una oportunidad");
    } else if (num > numAleatorio) {
      console.info(`El número ${num} es demasiado alto`);
    } else if (num < numAleatorio) {
      console.info(`El número ${num} es demasiado bajo`);
    }
    //  --intentos, le resta uno en cada iteracion
  } while (numAleatorio != num && --intentos > 0);

  // al terminar el bucle se revela el numero
  console.info(`El Número correcto es ${numAleatorio}`);
  console.info(`\nInténtalo nuevamente ${usuario}`);
}
