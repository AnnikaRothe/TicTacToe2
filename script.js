// Initialisierung der Variablen
let fields = []; // leeres Array für die Spielfelder
let currentField = "cross"; // der Spieler, der als erstes beginnt (kreuz)
let winner; // Speichert, wer das Spiel gewinnt
let winnerName; // Speichert den Namen des Gewinners
let clicks = 0; // Anzahl der Spielzüge

// Funktion, um das Spielbrett anzuzeigen
function render() {
  resetVariables(); // Setzt alle Variablen zurück
  mainTable.innerHTML = generateBoardHTML(); // Erstellt das HTML-Element für das Spielbrett
  playerDisplay.innerHTML = generatePlayerHTML(); // Erstellt das HTML-Element für den Spieler
  resetStylesAll(); // Setzt alle Styles zurück
}

// Funktion zum Zurücksetzen aller Variablen
function resetVariables() {
  fields = []; // Leeres Array für die Spielfelder
  winner = 0; // Kein Gewinner
  winnerName = "no one"; // Noch kein Gewinner
  clicks = 0; // Anzahl der Spielzüge auf Null setzen
  currentField = "cross"; // Der Spieler, der als erstes beginnt (kreuz)
}

// Funktion zum Zurücksetzen aller Styles
function resetStylesAll() {
  player1.classList.add("highlightPlayer"); // Spieler 1 hervorheben
  player1.classList.remove("winner"); // Gewinnerklasse entfernen
  player2.classList.remove("winner"); // Gewinnerklasse entfernen
}

// Funktion, um das Icon auf das Spielfeld zu setzen
function setIcon(i) {
  // Wenn alle Felder gesetzt wurden, wird kein weiteres Icon hinzugefügt
  if ((fields.length = 9)) {
    if (currentField == "cross") {
      setCircle(); // Icon ändern
    } else {
      setCross(); // Icon ändern
    }
    fields[i] = currentField; // Speichern des aktuellen Spielers
  }
  showField(); // Spielbrett aktualisieren
  clicks++; // Anzahl der Spielzüge erhöhen
}

// Funktion, um das Icon zu ändern
function setCircle() {
  currentField = "circle"; // Das Icon wird zu einem Kreis
  player2.classList.add("highlightPlayer"); // Spieler 2 hervorheben
  player1.classList.remove("highlightPlayer"); // Spieler 1 zurücksetzen
}

// Funktion, um das Icon zu ändern
function setCross() {
  currentField = "cross"; // Das Icon wird zu einem Kreuz
  player1.classList.add("highlightPlayer"); // Spieler 1 hervorheben
  player2.classList.remove("highlightPlayer"); // Spieler 2 zurücksetzen
}

// Die Funktion `showField` wird aufgerufen, um das Spielfeld darzustellen und den Gewinner zu überprüfen.
function showField() {
  checkWin(); // Überprüfe, ob es einen Gewinner gibt.

  // Iteriere über alle Felder auf dem Spielfeld.
  for (let i = 0; i < fields.length; i++) {
    // Wenn das Feld mit einem Kreis (circle) gefüllt ist,
    // rufe die Funktion `finishFieldCircle` auf, um das Feld darzustellen.
    if (fields[i] == "circle") {
      finishFieldCircle(i);
    }
    // Wenn das Feld mit einem Kreuz (cross) gefüllt ist,
    // rufe die Funktion `finishFieldCross` auf, um das Feld darzustellen.
    if (fields[i] == "cross") {
      finishFieldCross(i);
    }
  }
}

// Die Funktion `finishFieldCircle` zeigt das Feld mit einem Kreis (circle) an.
function finishFieldCircle(i) {
  document.getElementById("circle" + i).classList.remove("d-none"); // Zeige das Feld mit dem Kreis (circle) an.
  hideClickedField(i); // Verstecke das geklickte Feld.
}

// Die Funktion `finishFieldCross` zeigt das Feld mit einem Kreuz (cross) an.
function finishFieldCross(i) {
  document.getElementById("cross" + i).classList.remove("d-none"); // Zeige das Feld mit dem Kreuz (cross) an.
  hideClickedField(i); // Verstecke das geklickte Feld.
}

// Die Funktion `checkWin` überprüft, ob es einen Gewinner gibt.
function checkWin() {
  checkWinDirection(); // Überprüfe, ob es einen Gewinner in horizontaler, vertikaler oder diagonaler Richtung gibt.
  whoWIns(); // Ermittle, wer gewonnen hat (Spieler X oder Spieler O).
  checkResult(); // Überprüfe, ob das Spiel unentschieden ist.
}

// Die Funktion `checkWinDirection` überprüft, ob es einen Gewinner in horizontaler, vertikaler oder diagonaler Richtung gibt.
function checkWinDirection() {
  checkWinHorizontal(); // Überprüfe, ob es einen Gewinner in horizontaler Richtung gibt.
  checkWinVertical(); // Überprüfe, ob es einen Gewinner in vertikaler Richtung gibt.
  checkWinDiag(); // Überprüfe, ob es einen Gewinner in diagonalen Richtungen gibt.
}

// Die Funktion `checkWinHorizontal` überprüft, ob es einen Gewinner in horizontaler Richtung gibt.
function checkWinHorizontal() {
  checkWinHorizontalRow1(); // Überprüfe, ob es einen Gewinner in der obersten Zeile gibt.
  checkWinHorizontalRow2(); // Überprüfe, ob es einen Gewinner in der mittleren Zeile gibt.
  checkWinHorizontalRow3(); // Überprüfe, ob es einen Gewinner in der untersten Zeile gibt.
}

// Die Funktion `checkWinVertical` überprüft, ob es einen Gewinner in vertikaler Richtung gibt.
function checkWinVertical() {
  checkWinVerticalRow1(); // Überprüfe, ob es einen Gewinner in der linken Spalte gibt.
  checkWinVerticalRow2(); // Überprüfe, ob es einen Gewinner in der mittleren Spalte gibt.
  checkWinVerticalRow3(); // Überprüfe, ob es einen Gew
}

function checkWinDiag() {
  // Überprüfe die beiden Diagonalen
  checkWinDiagRow1();
  checkWinDiagRow2();
}

function checkResult() {
  // Wenn es einen Gewinner gibt, zeige das Ergebnis an
  if (winner != 0) {
    showResult();
  }
  // Wenn das Spiel unentschieden ist, zeige das Ergebnis an
  if (clicks == 8 && winner == 0) {
    showResult();
  }
}

function showResult() {
  // Zeige das Ergebnis auf dem Bildschirm an
  playerDisplay.innerHTML = generateResultHTML();
  // Zeige den "Neustart"-Button an
  restart.classList.remove("d-none");
  // Verstecke alle Felder
  for (let i = 0; i < fields.length; i++) {
    hideClickedField(i);
  }
}

function hideClickedField(i) {
  // Entferne den Klick-Handler des Feldes
  document.getElementById("field" + i).onclick = null;
  // Entferne den Hover-Effekt des Feldes
  document.getElementById("field" + i).classList.remove("tdHover");
}

function whoWIns() {
  // Setze den Namen des Gewinners
  if (winner == "circle") {
    winnerName = "Player O ";
  }
  if (winner == "cross") {
    winnerName = "Player X";
  }
}
