let storage = localStorage.getItem("menu")
const selector = document.querySelector(".toggleMenu")
const close = document.querySelector(".closeBtn")
let navElement = document.querySelector("nav")

const showMenu = () =>{
    document.querySelector("nav").classList.add("showMenu")
    document.querySelector("body").classList.add("no-scroll")
    localStorage.setItem("menu", "enable")
    storage = "enable"
}

const defatul = () =>{
    document.querySelector("nav").classList.remove("showMenu")
    document.querySelector("body").classList.remove("no-scroll")
    localStorage.setItem("menu", null)
    storage = null
}

if(storage === "enable"){
    showMenu()
}

selector.addEventListener("click", () =>{
    storage = localStorage.getItem("menu")
    if(storage !== "enable"){
        showMenu()
    }
})

close.addEventListener("click", () =>{
    storage = localStorage.getItem("menu")
    if(storage == "enable"){
        defatul()
    }
})