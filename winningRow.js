// Funktion zum Überprüfen, ob ein Gewinner in der ersten horizontalen Reihe vorliegt
function checkWinHorizontalRow1() {
  // Wenn alle drei Felder in der ersten Reihe den gleichen Wert haben...
  if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
    // ...dann speichere den Wert in der Variablen "winner"...
    winner = fields[0];
    // ...und füge eine CSS-Klasse hinzu, um die Gewinnreihe hervorzuheben.
    document.getElementById("field0").classList.add("highlightWinningRow");
    document.getElementById("field1").classList.add("highlightWinningRow");
    document.getElementById("field2").classList.add("highlightWinningRow");
  }
}

function checkWinHorizontalRow2() {
  if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
    winner = fields[3];
    document.getElementById("field3").classList.add("highlightWinningRow");
    document.getElementById("field4").classList.add("highlightWinningRow");
    document.getElementById("field5").classList.add("highlightWinningRow");
  }
}

function checkWinHorizontalRow3() {
  if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
    winner = fields[6];
    document.getElementById("field6").classList.add("highlightWinningRow");
    document.getElementById("field7").classList.add("highlightWinningRow");
    document.getElementById("field8").classList.add("highlightWinningRow");
  }
}

function checkWinVerticalRow1() {
  if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
    winner = fields[0];
    document.getElementById("field0").classList.add("highlightWinningRow");
    document.getElementById("field3").classList.add("highlightWinningRow");
    document.getElementById("field6").classList.add("highlightWinningRow");
  }
}

function checkWinVerticalRow2() {
  if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
    winner = fields[1];
    document.getElementById("field1").classList.add("highlightWinningRow");
    document.getElementById("field4").classList.add("highlightWinningRow");
    document.getElementById("field7").classList.add("highlightWinningRow");
  }
}

function checkWinVerticalRow3() {
  if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
    winner = fields[2];
    document.getElementById("field2").classList.add("highlightWinningRow");
    document.getElementById("field5").classList.add("highlightWinningRow");
    document.getElementById("field8").classList.add("highlightWinningRow");
  }
}

function checkWinDiagRow1() {
  if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
    winner = fields[0];
    document.getElementById("field0").classList.add("highlightWinningRow");
    document.getElementById("field4").classList.add("highlightWinningRow");
    document.getElementById("field8").classList.add("highlightWinningRow");
  }
}

function checkWinDiagRow2() {
  if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
    winner = fields[2];
    document.getElementById("field2").classList.add("highlightWinningRow");
    document.getElementById("field4").classList.add("highlightWinningRow");
    document.getElementById("field6").classList.add("highlightWinningRow");
  }
}
