
// let arr = [
//   {
//     holat:true
//   },
//   {
//     holat:true
//   },
//   {
//     holat:true
//   },
//   {
//     holat:true
//   },
//   {
//     holat:true
//   },
//   {
//     holat:true
//   },
//   {
//     holat:true
//   },
//   {
//     holat:true
//   },
//   {
//     holat:true
//   },
// ]

// let matrix = [
//   [0,"x",0],
//   [0,0,0],
//   ["x",0,"x"],
// ]

// let ellist = document.querySelector("#list")
// // matrix.forEach(item => {
// //   console.log(item[0]);
// //   let li = document.createElement("li")
// //   li.className = "item"
// //   li.innerHTML = `<span class="sum">$}</span>`
// //   ellist.appendChild(li)
// // })

// // for (let j = 0; j < matrix.length; j++) {
//   // let li = document.createElement("li")
//   // li.className = "item"
//   // li.innerHTML = `<span class="sum">$}</span>`
//   // ellist.appendChild(li)
// // }



// let count = 1
// let item = document.querySelectorAll(".item")
// item.forEach((el) => {
//   el.addEventListener("click" ,(e) => {
//     // console.log(e.target);
//     if (count % 2 == 0) {
//       el.textContent = 0
//     }
//     else if (count % 2 != 0) {
//       el.textContent = 1
//     }
//     // e.target.style.opacity = "1"
//     // if (item[0].textContent == 0){
//     //   console.log("teng");
//     //   // console.log(a);
//     //   // let a = item[0].textContent +  item[1].textContent +  item[2].textContent
//     //   // if (a == 001){
//     //   //   console.log("ooojjjj");
//     //   // }
//     // }

//     //  if (item[3].textContent == 0 && item[4].textContent == 0 && item[5].textContent == 1) {
//     //   let b = item[3].textContent == 0 && item[4].textContent == 0 && item[5].textContent == 1
//     // }
//     // if (item[6].textContent == 1 && item[7].textContent == 1 && item[8].textContent == 1) {
//     //   let c = item[3].textContent == 0 && item[4].textContent == 0 && item[5].textContent == 1
//     // }
//     count++
//   })
// })
// // console.log(item[0].textContent);
// if (item[0].textContent === 0) {
//   console.log("teng");
// } /// shu yerdan boshladm

// if ()
// console.log(item[0]);



// item[0]
// console.log(item[0].textContent);



// let one = document.querySelector("#one")
// one.addEventListener("click",(e) => {
//   e.preventDefault()
//   one.innerHTML = "x"
//   obshiy() 
//   obshiy3() 
// })
// let two = document.querySelector("#two")
// two.addEventListener("click",(e) => {
//   e.preventDefault()
//   two.innerHTML = 0
//   obshiy() 
// })
// let three = document.querySelector("#three")
// three.addEventListener("click",(e) => {
//   e.preventDefault()
//   three.innerHTML = "x"
//   obshiy() 
// })
// let four = document.querySelector("#four")
// four.addEventListener("click",(e) => {
//   e.preventDefault()
//   four.innerHTML = "x"
//   obshiy2()
//   obshiy3() 
// })
// let five = document.querySelector("#five")
// five.addEventListener("click",(e) => {
//   e.preventDefault()
//   five.innerHTML = "x"
//   obshiy2()
// })
// let six = document.querySelector("#six")
// six.addEventListener("click",(e) => {
//   e.preventDefault()
//   six.innerHTML = "x"
//   obshiy2() 
// })
// let seven = document.querySelector("#seven")
// seven.addEventListener("click",(e) => {
//   e.preventDefault()
//   seven.innerHTML = "x"
//   obshiy3() 
// })
// let eight = document.querySelector("#eight")
// eight.addEventListener("click",(e) => {
//   e.preventDefault()
//   eight.innerHTML = 0
// })
// let nine = document.querySelector("#nine")
// nine.addEventListener("click",(e) => {
//   e.preventDefault()
//   nine.innerHTML = 0
// })

// function obshiy () {
//   if (one.innerHTML == three.innerHTML && one.innerHTML == two.innerHTML) {
//     console.log("funcsteng");
//     alert("yutdiz")
//   }
// }
// function obshiy2 () {
//   if (four.innerHTML == five.innerHTML && four.innerHTML == six.innerHTML) {
//     console.log("myfunc2");
//     alert("yutdiz")
//   }
// }
// function obshiy3 () {
//   if (one.innerHTML == four.innerHTML && one.innerHTML == seven.innerHTML) {
//     console.log("myfunc3");
//     alert("yutdiz")
//   }
// }





 


const statusDisplay = document.querySelector(".game--status");
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
  .querySelectorAll(".cell")
  .forEach((cell) => cell.addEventListener("click", handleCellClick));
document
  .querySelector(".game--restart")
  .addEventListener("click", handleRestartGame );





