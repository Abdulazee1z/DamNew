// let user= prompt("who are you?")
// console.log (user)
// alert(`welcome ${user}, It's nice seeing you`)

// let name= prompt ("what is your name?")
// if(name =="Ahmad") {
//     alert("welcome Ahmad my gee!")
// } 

// else if(name == "Quadri"){
//     alert("Agba dev ni Quadri")
// }

// else if(name == "Elizabeth"){
//     alert("Obleeee")
// }

// else{
//     alert("welcome user")
// }

// for (let i=500; i < 1001; i += 10){
//     console.log(`Hello world ${i}`)
// }

// let board= document.getElementById("hello")
// board.innerText= "Good Morning"
// board.style.color= "blue"
// board.style.backgroundColor= "pink"
// console.log (board)



let body= document.body
let btn= document.getElementById("toggle")
let on= true

function change (){
    if(on){
        body.style.backgroundColor= "black"
        body.style.color="white"
        on= false
        btn.innetText= "Down Nepa"
    }
    else{
        body.style.backgroundColor= "white"
        body.style.color= "black"
        on= true
        btn.innerText= "Up Nepa"
    }
}
btn.addEventListener("click", change)

let h2=document.querySelector('h2')
let p1=document.querySelector('.greet')
let h4=document.getElementsByTagName('h4')[0]
let p2=document.getElementById('code')
let button=document.querySelector('button')
let button2=document.getElementById('reset')

function yam(){
  h4.innerText="congratulation"
  p2.style.visibility="visible"
  button.innerText="you won!!!"
  button.style.backgroundColor="yellow"
}

function cassava(){
  h4.innerText="Try your luck"
  p2.style.visibility="hidden"
  button.innerText="play"
  button.style.backgroundColor="black"
}

button.addEventListener("Click",yam)
button2.addEventListener("Click",cassava)