let storage = localStorage.getItem("dark")
const selector = document.querySelector(".toggleMenu")
const close = document.querySelector(".closeBtn")
const navElement = document.querySelector("nav")

const showMenu = () =>{
    document.querySelector("nav").classList.add("showMenu")
    document.querySelector("body").classList.add("no-scroll")
    localStorage.setItem("dark", "enable")
    storage = "enable"
}

const defatul = () =>{
    document.querySelector("nav").classList.remove("showMenu")
    document.querySelector("body").classList.remove("no-scroll")
    localStorage.setItem("dark", null)
    storage = null
}

if(storage === "enable"){
    showMenu()
}

selector.addEventListener("click", () =>{
    storage = localStorage.getItem("dark")
    if(storage !== "enable"){
        showMenu()
    }
})

close.addEventListener("click", () =>{
    storage = localStorage.getItem("dark")
    if(storage == "enable"){
        defatul()
    }
})

const scrollContainer = document.querySelector(".latestWorksContent")
const scrollBackBtn = document.querySelector(".back")
const scrollNextbtn = document.querySelector(".next")
const scrollIndicador = document.getElementById("indicador")

scrollBackBtn.addEventListener("click", () =>{
    scrollContainer.scroll({
        left: scrollContainer.scrollLeft - 963.90, //define a quantidade de pixels para voltar
        behavior: 'smooth' // Adiciona animação suave
    })
})

scrollNextbtn.addEventListener("click", () =>{
    scrollContainer.scroll({
        left: scrollContainer.scrollLeft += 963.90,  //define a quantidade de pixels para avançar
        behavior: 'smooth' // Adiciona animação suave
    })
})

scrollContainer.addEventListener("scroll", () =>{
    const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    const percentage = (scrollContainer.scrollLeft / maxScrollLeft) * 100;
    scrollIndicador.style.width = `${percentage}%`;
})

//Dark mode
let darkStoragre = localStorage.getItem("dark")
const dark = document.querySelector(".dark")

const theme = () =>{
    document.querySelector("body").classList.add("darkTheme")
    document.querySelector(".presentationBanner").classList.add("darkTheme")
    document.querySelector("#prof").classList.add("darkTheme")
    document.querySelector(".latestWorksContentCarousel .card").classList.add("darkTheme")
    const info = document.querySelectorAll(".latestWorksContentCarousel .infoCard")
    for (let s = 0; s < info.length; s++) {
        info[s].classList.add("darkTheme")
        localStorage.setItem("dark", "set")
    }
    document.querySelector(".latestWorks .latestWorksHeader").classList.add("darkTheme")
    document.querySelector("footer").classList.add("darkTheme")
    const elements = document.querySelectorAll(".card")
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add("darkTheme")
        localStorage.setItem("dark", "set")
    }
}

const defaultTheme = () =>{
    document.querySelector("body").classList.remove("darkTheme")
    document.querySelector(".presentationBanner").classList.remove("darkTheme")
    document.querySelector("#prof").classList.remove("darkTheme")
    document.querySelector(".latestWorksContentCarousel .card").classList.remove("darkTheme")
    const info = document.querySelectorAll(".latestWorksContentCarousel .infoCard")
    for (let s = 0; s < info.length; s++) {
        info[s].classList.remove("darkTheme")
        localStorage.setItem("dark", "set")
    }
    document.querySelector(".latestWorks .latestWorksHeader").classList.remove("darkTheme")
    document.querySelector("footer").classList.remove("darkTheme")
    const elementsRemove = document.querySelectorAll(".card")
    for (let i = 0; i < elementsRemove.length; i++ ) {
        elementsRemove[i].classList.remove("darkTheme")
        localStorage.setItem("dark", null)
    }
}

if(darkStoragre === "set"){
    theme()
}

dark.addEventListener("click", () =>{
    darkStoragre = localStorage.getItem("dark")
    if(darkStoragre != "set"){
        theme()
    }else{
        defaultTheme()
    }
})