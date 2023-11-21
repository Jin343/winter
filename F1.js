let header = document.querySelector(".header")
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        header.style = "background-color:rgb(14, 100, 156)"
    } else {
        header.style = "background-color:rgb(0,0,0,0)"
    }
})
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
links.addEventListener("click",()=>{
    links.classList.add("clicked")
})

let aboutList =document.querySelector(".about-list")
let isClicked=false
aboutList.addEventListener("click",()=>{
    if (!isClicked){
    aboutList.classList.add("clicked-list")
    }else{
    aboutList.classList.remove("clicked-list")
    }
})