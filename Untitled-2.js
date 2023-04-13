// Variables del juego
var turno = "X";
var jugadas = 0;

// Función de cambiar turno
function cambiarTurno() {
  if (turno == "X") {
    turno = "O";
  } else {
    turno = "X";
  }
}

// Función de marcar casilla
function marcarCasilla(id) {
  var casilla = document.getElementById(id);
  if (casilla.innerHTML == "") {
    casilla.innerHTML = turno;
    jugadas++;
    if (comprobarGanador()) {
      alert("¡" + turno + " ha ganado!");
      reiniciarJuego();
    } else if (jugadas == 9) {
      alert("¡Empate!");
      reiniciarJuego();
    } else {
      cambiarTurno();
    }
  }
}

// Función de comprobar ganador
function comprobarGanador() {
  var casillas = document.getElementsByTagName("td");
  var combinacionesGanadoras = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];
  for (var i = 0; i < combinacionesGanadoras.length; i++) {
    var combinacion = combinacionesGanadoras[i];
    if (
      casillas[combinacion[0] - 1].innerHTML == turno &&
      casillas[combinacion[1] - 1].innerHTML == turno &&
      casillas[combinacion[2] - 1].innerHTML == turno
    ) {
      return true;
    }
  }
  return false;
}

// Función de reiniciar juego
function reiniciarJuego() {
  var casillas = document.getElementsByTagName("td");
  for (var i = 0; i < casillas.length; i++) {
    casillas[i].innerHTML = "";
  }
  turno = "X";
  jugadas = 0;
}

// Evento de click en casilla
document.getElementById("tablero
