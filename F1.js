
// let request = document.querySelector(".request")
// let input = document.querySelectorAll(".inputs input")
// let button = document.querySelector(".inputs button")
// let sent = document.querySelector(`.sent`)

// function resetRequest(){
//     input.forEach((e, i) => {
//        e.value=""
//        let required = document.querySelectorAll(`.required`)
//             required[i].classList.add("hid")
//         sent.classList.add("hid")
//     })
// }
// button.addEventListener("click", () => {
//     let number = 0
//     let sent = document.querySelector(`.sent`)
//     input.forEach((e, i) => {
//         if (e.value.length === 0) {
//             number--
//             let required = document.querySelectorAll(`.required`)
//             required[i].classList.remove("hid")
//             sent.classList.add("hid")
//         } else if (e.value.length !== 0) {
//             number++
//             let required = document.querySelectorAll(`.required`)
//             required[i].classList.add("hid")
//         }
//     })
//     if (number === 2) {
//         sent.classList.remove("hid")
//     }
// })
// let specialButton = document.querySelectorAll(".special-button");
// specialButton.forEach((e) => {
//     e.addEventListener("click", () => {
//         request.classList.remove("hid")
//         document.body.classList.add("black-bg")
//         document.body.style.overflow = "hidden";
//         resetRequest()
//     })
// })

// let mark = document.querySelector(".mark")
// mark.addEventListener("click", () => {
//     request.classList.add("hid")
//     document.body.classList.remove("black-bg")
//     document.body.style.overflow = "auto";
// })

let links =document.querySelector(".links");
let button = document.querySelector(".links > i")
let isClicked=false
button.addEventListener("click",()=>{
if (!isClicked){
    links.classList.add("clicked")
 isClicked=true
    }else if (isClicked){
        links.classList.remove("clicked")
 isClicked=false
    }
})

let aboutList =document.querySelector(".about-list")
let isClickedList=false
aboutList.addEventListener("click",()=>{
    if (!isClickedList){
    aboutList.classList.add("clicked-list")
    isClickedList=true
    }else if(isClickedList){
    aboutList.classList.remove("clicked-list")
    isClickedList=false
    }
})