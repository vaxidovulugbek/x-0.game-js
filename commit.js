
let arr = [
  {
    holat:true
  },
  {
    holat:true
  },
  {
    holat:true
  },
  {
    holat:true
  },
  {
    holat:true
  },
  {
    holat:true
  },
  {
    holat:true
  },
  {
    holat:true
  },
  {
    holat:true
  },
]

let matrix = [
  [0,"x",0],
  [0,0,0],
  ["x",0,"x"],
]

let ellist = document.querySelector("#list")
// matrix.forEach(item => {
//   console.log(item[0]);
//   let li = document.createElement("li")
//   li.className = "item"
//   li.innerHTML = `<span class="sum">$}</span>`
//   ellist.appendChild(li)
// })

// for (let j = 0; j < matrix.length; j++) {
  // let li = document.createElement("li")
  // li.className = "item"
  // li.innerHTML = `<span class="sum">$}</span>`
  // ellist.appendChild(li)
// }



let count = 1
let item = document.querySelectorAll(".item")
item.forEach((el) => {
  el.addEventListener("click" ,(e) => {
    // console.log(e.target);
    if (count % 2 == 0) {
      el.textContent = 0
    }
    else if (count % 2 != 0) {
      el.textContent = 1
    }
    // e.target.style.opacity = "1"
    // if (item[0].textContent == 0){
    //   console.log("teng");
    //   // console.log(a);
    //   // let a = item[0].textContent +  item[1].textContent +  item[2].textContent
    //   // if (a == 001){
    //   //   console.log("ooojjjj");
    //   // }
    // }

    //  if (item[3].textContent == 0 && item[4].textContent == 0 && item[5].textContent == 1) {
    //   let b = item[3].textContent == 0 && item[4].textContent == 0 && item[5].textContent == 1
    // }
    // if (item[6].textContent == 1 && item[7].textContent == 1 && item[8].textContent == 1) {
    //   let c = item[3].textContent == 0 && item[4].textContent == 0 && item[5].textContent == 1
    // }
    count++
  })
})
// console.log(item[0].textContent);
if (item[0].textContent === 0) {
  console.log("teng");
} /// shu yerdan boshladm

if ()
console.log(item[0]);



item[0]
console.log(item[0].textContent);



let one = document.querySelector("#one")
one.addEventListener("click",(e) => {
  e.preventDefault()
  one.innerHTML = "x"
  obshiy() 
  obshiy3() 
})
let two = document.querySelector("#two")
two.addEventListener("click",(e) => {
  e.preventDefault()
  two.innerHTML = 0
  obshiy() 
})
let three = document.querySelector("#three")
three.addEventListener("click",(e) => {
  e.preventDefault()
  three.innerHTML = "x"
  obshiy() 
})
let four = document.querySelector("#four")
four.addEventListener("click",(e) => {
  e.preventDefault()
  four.innerHTML = "x"
  obshiy2()
  obshiy3() 
})
let five = document.querySelector("#five")
five.addEventListener("click",(e) => {
  e.preventDefault()
  five.innerHTML = "x"
  obshiy2()
})
let six = document.querySelector("#six")
six.addEventListener("click",(e) => {
  e.preventDefault()
  six.innerHTML = "x"
  obshiy2() 
})
let seven = document.querySelector("#seven")
seven.addEventListener("click",(e) => {
  e.preventDefault()
  seven.innerHTML = "x"
  obshiy3() 
})
let eight = document.querySelector("#eight")
eight.addEventListener("click",(e) => {
  e.preventDefault()
  eight.innerHTML = 0
})
let nine = document.querySelector("#nine")
nine.addEventListener("click",(e) => {
  e.preventDefault()
  nine.innerHTML = 0
})

function obshiy () {
  if (one.innerHTML == three.innerHTML && one.innerHTML == two.innerHTML) {
    console.log("funcsteng");
    alert("yutdiz")
  }
}
function obshiy2 () {
  if (four.innerHTML == five.innerHTML && four.innerHTML == six.innerHTML) {
    console.log("myfunc2");
    alert("yutdiz")
  }
}
function obshiy3 () {
  if (one.innerHTML == four.innerHTML && one.innerHTML == seven.innerHTML) {
    console.log("myfunc3");
    alert("yutdiz")
  }
}

