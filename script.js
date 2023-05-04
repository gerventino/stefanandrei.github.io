// const buttons = document.querySelectorAll("[data-carousel-button]")

// buttons.forEach(button => {
//     button.addEventListener("click", ()=>{
//         const offset = button.dataset.carouselButton === "next" ? 1 : -1 
//     // return 1 ,else return -1
//         const slides = button.closest("[data-carousel]").querySelector("[data-slides]")

//         const activeSlide = slides.querySelector("[data-active]")
//         let newIndex = [...slides.children].indexOf(activeSlide) + offset
//         if (newIndex < 0) newIndex = slides.children.length-1
//         if (newIndex >= slides.children.length) newIndex = 0

//         slides.children[newIndex].dataset.active = true
//         delete activeSlide.dataset.active
//     })
// })








let next = document.querySelector(".next")
let prev = document.querySelector(".prev")
let slides = document.querySelector(".slides")
let photos = [...slides.children]
let actualPosition = 0

next.addEventListener("click",()=>{
    photos[actualPosition].classList.remove("active")
    actualPosition++
    if(actualPosition>photos.length-1) {actualPosition = 0}
        photos[actualPosition].classList.add("active")
})

prev.addEventListener("click",()=>{
    photos[actualPosition].classList.remove("active")
    actualPosition--
    if(actualPosition < 0) {actualPosition = photos.length-1}
    photos[actualPosition].classList.add("active")
})



