function generateBoardHTML() {
  return `<tr>
    <td id="field0" class="tdHover highlightRow" onclick="setIcon(0)">
        <img id="circle0" class="selectField d-none" src="./img/circle.png">
        <img id="cross0" class="selectField d-none" src="./img/cross.png"></td>
    <td id="field1" class="tdHover highlightRow" onclick="setIcon(1)">
        <img id="circle1" class="selectField d-none" src="./img/circle.png">
        <img id="cross1" class="selectField d-none" src="./img/cross.png"></td>
    <td id="field2" class="tdHover highlightRow" onclick="setIcon(2)">
        <img id="circle2" class="selectField d-none" src="./img/circle.png">
        <img id="cross2" class="selectField d-none" src="./img/cross.png"></td>
</tr>
<tr>
    <td id="field3" class="tdHover highlightRow" onclick="setIcon(3)">
        <img id="circle3" class="selectField d-none" src="./img/circle.png">
        <img id="cross3" class="selectField d-none" src="./img/cross.png"></td>
    <td id="field4" class="tdHover highlightRow" onclick="setIcon(4)">
        <img id="circle4" class="selectField d-none" src="./img/circle.png">
        <img id="cross4" class="selectField d-none" src="./img/cross.png"></td>
    <td id="field5" class="tdHover highlightRow" onclick="setIcon(5)">
        <img id="circle5" class="selectField d-none" src="./img/circle.png">
        <img id="cross5" class="selectField d-none" src="./img/cross.png"></td>
</tr>
<tr>
    <td id="field6" class="tdHover highlightRow" onclick="setIcon(6)">
        <img id="circle6" class="selectField d-none" src="./img/circle.png">
        <img id="cross6" class="selectField d-none" src="./img/cross.png"></td>
    <td id="field7" class="tdHover highlightRow" onclick="setIcon(7)">
        <img id="circle7" class="selectField d-none" src="./img/circle.png">
        <img id="cross7" class="selectField d-none" src="./img/cross.png"></td>
    <td id="field8" class="tdHover highlightRow" onclick="setIcon(8)">
        <img id="circle8" class="selectField d-none" src="./img/circle.png">
        <img id="cross8" class="selectField d-none" src="./img/cross.png"></td>
</tr>`;
}

function generateResultHTML() {
  return `<div class="resultDisplay"><h1>${winnerName} wins!   </h1>
  <div class="game-over">
    <img src="./img/gameOver.png" id="restart" class="d-none restartBtn game-over-img" onclick="render()">
    </div>
    </div>`;
}

function generatePlayerHTML() {
  return ` <div id="player1" class="player"><b>Player</b><img src="./img/circle.png"></div>
            <div id="player2" class="player"><b>Player</b><img src="./img/cross.png"></div>`;
}
