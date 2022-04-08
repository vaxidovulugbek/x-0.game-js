
const statusDisplay = document.querySelector(".status");
const cell = document.querySelectorAll(".cell");
// let countt = 1
// cell.forEach((item) => {
//   // console.log(item);
//   item.addEventListener("click",(e) => {
//     console.log(e.target);
//     if (countt % 2 == 0) {
//       e.target.style.backgroundColor = "#ffdd61"
//     }
//     else if (countt % 2 != 0) {
//       e.target.style.backgroundColor = "#952f2f"
//     }
//     countt++
//   })
// })

let gameholati = document.querySelector("#gameholati")
let gameRestart = document.querySelector("#gameres")

gameRestart.addEventListener("click" , dblockfunc)

let gameActive = true;
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];

// const winningMessage = () => `Player ${currentPlayer} win!`;
// const drawMessage = () => `Game ended in a draw!`;
// const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;
// const winningMessage = function  () {
//   alert("yutdik")
// }
const winningMessage = function () {
  gameholati.classList.add("db")
  return `Player ${currentPlayer} win!`
}
const drawMessage = function () {
  gameholati.classList.add("db")
  return `Game ended in a draw!`
}
const currentPlayerTurn = function () {
  gameholati.classList.add("db")
  return `It's ${currentPlayer}'s turn`
}


// statusDisplay.innerHTML = currentPlayerTurn();
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function handleCellPlayed(clickedCell, clickedCellIndex) {
  gameState[clickedCellIndex] = currentPlayer;
  clickedCell.innerHTML = currentPlayer;
}

function handlePlayerChange() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  // statusDisplay.innerHTML = currentPlayerTurn();

}

function handleResultValidation() {
  let roundWon = false;
  for (let i = 0; i <= 7; i++) {
    const winCondition = winningConditions[i];
    let a = gameState[winCondition[0]];
    let b = gameState[winCondition[1]];
    let c = gameState[winCondition[2]];
    if (a === "" || b === "" || c === "") {
      continue;
    }
    if (a === b && b === c) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    statusDisplay.innerHTML = winningMessage();
    gameActive = false;
    return;
  }

  let roundDraw = !gameState.includes("");
  if (roundDraw) {
    statusDisplay.innerHTML = drawMessage();
    gameActive = false;
    return;
  }

  handlePlayerChange();
}

function handleCellClick(clickedCellEvent) {
  const clickedCell = clickedCellEvent.target;
  const clickedCellIndex = parseInt(
    clickedCell.getAttribute("data-cell-index")
  );

  if (gameState[clickedCellIndex] !== "" || !gameActive) {
    return;
    
  }

  handleCellPlayed(clickedCell, clickedCellIndex);
  handleResultValidation();
}

function handleRestartGame() {
  gameActive = true;
  currentPlayer = "X";
  gameState = ["", "", "", "", "", "", "", "", ""];
  // statusDisplay.innerHTML = currentPlayerTurn();
  document.querySelectorAll(".cell").forEach((cell) => (cell.innerHTML = ""));
  
}

function dblockfunc () {
  console.log("say");
  gameholati.classList.remove("db")
}

document
document.querySelectorAll(".cell")
  .forEach((cell) => cell.addEventListener("click", handleCellClick));
document
document.querySelector(".game--restart")
  .addEventListener("click", handleRestartGame );





